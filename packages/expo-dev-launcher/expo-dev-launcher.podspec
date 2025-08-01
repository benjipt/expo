require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

reactNativeVersion = '0.0.0'
begin
  reactNativeVersion = `node --print "require('react-native/package.json').version"`
rescue
  reactNativeVersion = '0.0.0'
end

reactNativeTargetVersion = reactNativeVersion.split('.')[1].to_i

Pod::Spec.new do |s|
  s.name           = 'expo-dev-launcher'
  s.version        = package['version']
  s.summary        = package['description']
  s.description    = package['description']
  s.license        = package['license']
  s.author         = package['author']
  s.homepage       = package['homepage']
  s.platforms      = {
    :ios => '15.1',
    :tvos => '15.1'
  }
  s.swift_version  = '5.2'
  s.source         = { :git => 'https://github.com/github_account/expo-development-client.git', :tag => "#{s.version}" }
  s.static_framework = true
  s.source_files   = 'ios/**/*.{h,m,mm,swift,cpp}'
  s.preserve_paths = 'ios/**/*.{h,m,mm,swift}'
  s.exclude_files  = 'ios/Unsafe/**/*.{h,m,mm,swift,cpp}', 'ios/Tests/**/*.{h,m,swift}'
  s.requires_arc   = true
  s.header_dir     = 'EXDevLauncher'

  s.resource_bundles = {
    'EXDevLauncher' => [
      'ios/Assets.xcassets',
    ]
  }

  new_arch_enabled = ENV['RCT_NEW_ARCH_ENABLED'] == '1'

  other_c_flags = "$(inherited) -DREACT_NATIVE_TARGET_VERSION=#{reactNativeTargetVersion}"
  dev_launcher_url = ENV['EX_DEV_LAUNCHER_URL'] || ""
  if dev_launcher_url != ""
    escaped_dev_launcher_url = Shellwords.escape(dev_launcher_url).gsub('/','\\/')
    other_c_flags += " -DEX_DEV_LAUNCHER_URL=\"\\\"" + escaped_dev_launcher_url + "\\\"\""
  end
  if ENV['USE_HERMES'] == nil || ENV['USE_HERMES'] == '1'
    other_c_flags += ' -DUSE_HERMES'
  end
  other_swift_flags = "$(inherited)"
  unless ENV['EX_DEV_CLIENT_NETWORK_INSPECTOR'] == 'false'
    other_swift_flags += ' -DEX_DEV_CLIENT_NETWORK_INSPECTOR'
  end

  if new_arch_enabled
    other_c_flags += ' -DRN_FABRIC_ENABLED -DRCT_NEW_ARCH_ENABLED'
  end

  s.xcconfig = {
    'GCC_PREPROCESSOR_DEFINITIONS' => "EX_DEV_LAUNCHER_VERSION=#{s.version}",
    'OTHER_CFLAGS' => other_c_flags,
  }

  header_search_paths = [
    '"$(PODS_ROOT)/Headers/Private/React-Core"',
    '"${PODS_ROOT}/Headers/Public/RNReanimated"',
    '"$(PODS_CONFIGURATION_BUILD_DIR)/EXManifests/Swift Compatibility Header"',
    '"$(PODS_CONFIGURATION_BUILD_DIR)/EXUpdatesInterface/Swift Compatibility Header"',
  ]
  if ENV['USE_FRAMEWORKS']
    header_search_paths.concat([
      # [begin] transitive dependencies of React-RCTAppDelegate that are not defined modules
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-Mapbuffer/React_Mapbuffer.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-RuntimeApple/React_RuntimeApple.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-RuntimeCore/React_RuntimeCore.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-jserrorhandler/React_jserrorhandler.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-jsinspectortracing/jsinspector_moderntracing.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-jsinspectorcdp/jsinspector_moderncdp.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-jsitooling/JSITooling.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-nativeconfig/React_nativeconfig.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-runtimescheduler/React_runtimescheduler.framework/Headers"',
      '"${PODS_CONFIGURATION_BUILD_DIR}/React-performancetimeline/React_performancetimeline.framework/Headers"',
      # [end] transitive dependencies of React-RCTAppDelegate that are not defined modules
    ])
  end

  # Swift/Objective-C compatibility
  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES',
    'OTHER_CFLAGS[config=*Debug*]' => other_c_flags,
    'OTHER_SWIFT_FLAGS[config=*Debug*]' => other_swift_flags,
    'HEADER_SEARCH_PATHS' => header_search_paths.join(' '),
    'FRAMEWORK_SEARCH_PATHS' => '"${PODS_CONFIGURATION_BUILD_DIR}/RNReanimated"',
    "CLANG_CXX_LANGUAGE_STANDARD" => "c++20",
  }

  s.user_target_xcconfig = {
    'HEADER_SEARCH_PATHS' => '"${PODS_CONFIGURATION_BUILD_DIR}/expo-dev-launcher/Swift Compatibility Header"',
  }

  s.dependency "React-Core"
  s.dependency 'React-RCTAppDelegate'
  s.dependency "expo-dev-menu-interface"
  s.dependency "EXManifests"
  s.dependency "EXUpdatesInterface"
  s.dependency "expo-dev-menu"
  s.dependency "ExpoModulesCore"
  s.dependency "ReactAppDependencyProvider"
  add_dependency(s, "React-jsinspector", :framework_name => 'jsinspector_modern')

  unless defined?(install_modules_dependencies)
    # `install_modules_dependencies` is defined from react_native_pods.rb.
    # when running with `pod ipc spec`, this method is not defined and we have to require manually.
    require File.join(File.dirname(`node --print "require.resolve('react-native/package.json')"`), "scripts/react_native_pods")
  end
  install_modules_dependencies(s)

  s.subspec 'Unsafe' do |unsafe|
    unsafe.source_files = 'ios/Unsafe/**/*.{h,m,mm,swift,cpp}'
    unsafe.compiler_flags = '-x objective-c++ -std=c++20 -fno-objc-arc' # Disable Automatic Reference Counting
  end

  s.subspec 'Main' do |main|
    main.dependency "expo-dev-launcher/Unsafe"
  end

  s.test_spec 'Tests' do |test_spec|
    test_spec.source_files = 'ios/Tests/**/*.{h,m,mm,swift}'
    test_spec.dependency 'Quick'
    test_spec.dependency 'Nimble'
    test_spec.dependency "React-CoreModules"
    test_spec.dependency "OHHTTPStubs"
    # ExpoModulesCore requires React-hermes or React-jsc in tests, add ExpoModulesTestCore for the underlying dependencies
    test_spec.dependency 'ExpoModulesTestCore'
  end

  s.default_subspec = 'Main'

end
