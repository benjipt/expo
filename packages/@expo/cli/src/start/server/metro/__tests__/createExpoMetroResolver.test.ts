import { getBareExtensions } from '@expo/config/paths';
import type { SourceFileResolution } from '@expo/metro/metro-resolver/types';
import assert from 'assert';
import fs from 'fs';
import path from 'path';

import { createFastResolver, FailedToResolvePathError } from '../createExpoMetroResolver';
import { isFailedToResolvePathError } from '../metroErrors';

type SupportedContext = Parameters<ReturnType<typeof createFastResolver>>[0];

const createContext = ({
  platform,
  isServer,
  origin,
  nodeModulesPaths = [],
  packageExports,
  override,
}: {
  origin: string;
  platform: string;
  isServer?: boolean;
  nodeModulesPaths?: string[];
  packageExports?: boolean;
  override?: Partial<SupportedContext>;
}): SupportedContext & { unstable_fileSystemLookup?: (filepath: string) => any } => {
  const preferNativePlatform = platform === 'ios' || platform === 'android';
  const sourceExtsConfig = { isTS: true, isReact: true, isModern: true };
  const sourceExts = getBareExtensions([], sourceExtsConfig);

  return {
    resolveAsset: jest.fn((dirPath, basename, extension) => [
      path.join(dirPath, basename + extension),
    ]),
    customResolverOptions: Object.create({
      environment: isServer ? 'node' : 'client',
    }),
    getPackage(packageJsonPath) {
      return JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    },
    unstable_fileSystemLookup(filePath) {
      if (!fs.existsSync(filePath)) {
        return { exists: false };
      }
      const fp = fs.realpathSync(filePath);
      const type = fs.statSync(fp).isDirectory() ? 'd' : 'f';
      return {
        exists: true,
        type,
        realPath: fp,
      };
    },
    mainFields: preferNativePlatform
      ? ['react-native', 'browser', 'main']
      : isServer
        ? ['main', 'module']
        : ['browser', 'module', 'main'],
    nodeModulesPaths,
    originModulePath: origin,
    preferNativePlatform,
    sourceExts,
    unstable_enablePackageExports: !!packageExports,
    unstable_conditionsByPlatform: {},
    unstable_conditionNames: isServer
      ? ['node']
      : platform === 'web'
        ? ['browser']
        : ['react-native'],
    ...override,
  };
};

// This test runs on the actual fs.
jest.unmock('fs');

const originProjectRoot = path.join(
  __dirname,
  '../../../../../../../../apps/native-component-list'
);

function resolveToEmpty(
  moduleId: string,
  {
    platform,
    isServer,
    from = 'index.js',
    nodeModulesPaths,
    packageExports,
    preserveSymlinks,
  }: {
    platform: string;
    isServer?: boolean;
    from?: string;
    nodeModulesPaths?: string[];
    packageExports?: boolean;
    preserveSymlinks?: boolean;
  }
) {
  const resolver = createFastResolver({ preserveSymlinks: !!preserveSymlinks, blockList: [] });
  const context = createContext({
    platform,
    isServer,
    origin: path.isAbsolute(from) ? from : path.join(originProjectRoot, from),
    nodeModulesPaths,
    packageExports,
  });
  const res = resolver(context, moduleId, platform);
  expect(res.type).toBe('empty');
}

function resolveTo(
  moduleId: string,
  {
    platform,
    isServer,
    from = 'index.js',
    nodeModulesPaths,
    packageExports,
    preserveSymlinks,
    isESMImport,
  }: {
    platform: string;
    isServer?: boolean;
    from?: string;
    nodeModulesPaths?: string[];
    packageExports?: boolean;
    preserveSymlinks?: boolean;
    isESMImport?: boolean;
  },
  type: 'sourceFile' | 'assetFiles' = 'sourceFile'
) {
  const resolver = createFastResolver({ preserveSymlinks: !!preserveSymlinks, blockList: [] });
  const context = createContext({
    platform,
    isServer,
    origin: path.isAbsolute(from) ? from : path.join(originProjectRoot, from),
    nodeModulesPaths,
    packageExports,
    override: { isESMImport },
  });
  const res = resolver(context, moduleId, platform);

  expect(res.type).toBe(type);
  return res.type === 'sourceFile'
    ? res.filePath
    : res.type === 'assetFiles'
      ? res.filePaths[0]
      : null;
}

describe(isFailedToResolvePathError, () => {
  it(`matches custom error`, () => {
    const error = new FailedToResolvePathError('message');
    expect(isFailedToResolvePathError(error)).toBe(true);
  });
});

describe(createFastResolver, () => {
  describe('node built-ins', () => {
    it('shims node built-ins on non-server platforms', () => {
      resolveToEmpty('node:path', { platform: 'ios', isServer: false });
      resolveToEmpty('node:assert', { platform: 'web', isServer: false });
      resolveToEmpty('node:punycode', { platform: 'web', isServer: false });
      resolveTo('punycode', { platform: 'web', isServer: false });
    });
    it('supports node built-ins on server platforms', () => {
      expect(resolveTo('node:assert', { platform: 'web', isServer: true })).toEqual('node:assert');
      expect(resolveTo('http', { platform: 'ios', isServer: true })).toEqual('http');
    });

    // TODO: Test node_module installed with the same name as a node built-in.
  });

  describe('package exports', () => {
    it('resolves react server files', () => {
      expect(resolveTo('react-dom/server', { platform: 'web' })).toEqual(
        expect.stringMatching(/\/node_modules\/react-dom\/server\.browser\.js$/)
      );
      expect(resolveTo('react-dom/server', { platform: 'web', packageExports: true })).toEqual(
        expect.stringMatching(/\/node_modules\/react-dom\/server\.browser\.js$/)
      );
      expect(resolveTo('react-dom/server', { platform: 'ios', packageExports: true })).toEqual(
        expect.stringMatching(/\/node_modules\/react-dom\/server\.node\.js$/)
      );
      expect(
        resolveTo('react-dom/server', { platform: 'web', packageExports: true, isServer: true })
      ).toEqual(expect.stringMatching(/\/node_modules\/react-dom\/server\.node\.js$/));
      expect(
        resolveTo('react-dom/server', { platform: 'ios', packageExports: true, isServer: true })
      ).toEqual(expect.stringMatching(/\/node_modules\/react-dom\/server\.node\.js$/));
    });

    it('asserts missing export in package', () => {
      // Sanity
      expect(() =>
        resolveTo('react-dom/foo.js', { platform: 'web', packageExports: true, isServer: true })
      ).toThrow(/Missing "\.\/foo\.js" specifier in "react-dom" package/);

      // Actual check
      expect(() =>
        resolveTo('react-dom/server.js', { platform: 'web', packageExports: true, isServer: true })
      ).toThrow(/Missing "\.\/server\.js" specifier in "react-dom" package/);
      resolveTo('react-dom/server.js', { platform: 'web', packageExports: false, isServer: true });
    });
  });

  it('resolves react-server file', () => {
    const resolver = createFastResolver({ preserveSymlinks: true, blockList: [] });
    const context = createContext({
      platform: 'web',
      isServer: true,

      origin: path.join(originProjectRoot, 'index.js'),
      override: {
        unstable_enablePackageExports: true,
        // unstable_conditionsByPlatform: {},
        unstable_conditionNames: ['node', 'require', 'react-server', 'workerd'],
      },
    });
    const results = resolver(context, 'react-server-dom-webpack/server', 'web');
    expect(results).toEqual({
      filePath: expect.stringMatching(/\/react-server-dom-webpack\/server\.edge\.js$/),
      type: 'sourceFile',
    });

    assert(results.type === 'sourceFile');
  });

  // This tests the `node_modules/react-native/node_modules/promise` structure
  // If this changes, another example of a nested package should be picked
  it('resolves nested `node_modules` packages', () => {
    const resolver = createFastResolver({ preserveSymlinks: true, blockList: [] });

    const indexPath = path.join(originProjectRoot, 'index.js');
    const platform = 'ios';
    const nodeModulesPaths = [
      path.join(originProjectRoot, 'node_modules'),
      path.join(originProjectRoot, '../../node_modules'),
    ];

    // First resolve `react-native`
    const nclContext = createContext({ platform, origin: indexPath, nodeModulesPaths });
    const nclResult = resolver(nclContext, 'react-native', platform);
    expect(nclResult).toMatchObject({ type: 'sourceFile', filePath: expect.any(String) });

    // Then resolve `promise` within `react-native`
    const rnEntryFile = (nclResult as SourceFileResolution).filePath;
    const rnContext = createContext({ platform, origin: rnEntryFile, nodeModulesPaths });
    const rnResult = resolver(rnContext, 'promise', platform);
    expect(rnResult).toMatchObject({ type: 'sourceFile', filePath: expect.any(String) });

    // Ensure the resolved path of `promise` is within React Native's `node_modules`
    expect(rnResult).toMatchObject({
      filePath: expect.stringContaining('node_modules/react-native/node_modules/promise'),
    });
  });

  describe('ios', () => {
    const platform = 'ios';

    it('resolves near self first', () => {
      const reactNativePath = resolveTo('react-native/Libraries/Promise.js', {
        platform,
        packageExports: true,
      })!;
      expect(
        resolveTo('promise/setimmediate/es6-extensions', {
          platform,
          from: reactNativePath,
          packageExports: true,
        })
      ).toMatch(/node_modules\/promise\/setimmediate\/es6-extensions.js$/);
    });

    describe('resolves assets near self', () => {
      const initialPath = resolveTo('expo-router/build/views/Sitemap.js', {
        platform,
        packageExports: true,
        preserveSymlinks: true,
      })!;

      it('exports and symlinks', () => {
        expect(
          resolveTo(
            'expo-router/assets/file.png',
            {
              platform,
              from: initialPath,
              packageExports: true,
              preserveSymlinks: true,
            },
            'assetFiles'
          )
        ).toMatch(/packages\/expo-router\/assets\/file.png$/);
      });
      it('exports without symlinks', () => {
        expect(
          resolveTo(
            'expo-router/assets/file.png',
            {
              platform,
              from: initialPath,
              packageExports: true,
              preserveSymlinks: false,
            },
            'assetFiles'
          )
        ).toMatch(/node_modules\/expo-router\/assets\/file.png$/);
      });
      it('no exports and symlinks enabled', () => {
        expect(
          resolveTo(
            'expo-router/assets/file.png',
            {
              platform,
              from: initialPath,
              packageExports: false,
              preserveSymlinks: true,
            },
            'assetFiles'
          )
        ).toMatch(/packages\/expo-router\/assets\/file.png$/);
      });
      it('no exports or symlinks enabled', () => {
        expect(
          resolveTo(
            'expo-router/assets/file.png',
            {
              platform,
              from: initialPath,
              packageExports: false,
              preserveSymlinks: false,
            },
            'assetFiles'
          )
        ).toMatch(/node_modules\/expo-router\/assets\/file.png$/);
      });
    });

    it('asserts not found module', () => {
      expect(() => resolveTo('react-native-fake-lib', { platform })).toThrow(
        /The module could not be resolved because no file or module matched the pattern:/
      );
    });

    it('resolves ios file module', () => {
      expect(resolveTo('react-native', { platform })).toEqual(
        expect.stringMatching(/\/node_modules\/react-native\/index\.js$/)
      );
      expect(resolveTo('./App', { platform })).toEqual(
        expect.stringMatching(/\/native-component-list\/App.tsx$/)
      );
    });

    it('resolves @babel/runtime package exports as CJS', () => {
      expect(
        resolveTo('@babel/runtime/helpers/interopRequireDefault', {
          platform,
        })
      ).toEqual(expect.stringMatching(/\/@babel\/runtime\/helpers\/interopRequireDefault.js$/));
      expect(
        resolveTo('@babel/runtime/helpers/interopRequireDefault', {
          platform,
          packageExports: true,
        })
      ).toEqual(expect.stringMatching(/\/@babel\/runtime\/helpers\/interopRequireDefault.js$/));
      expect(
        resolveTo('@babel/runtime/helpers/interopRequireDefault', {
          platform,
          packageExports: true,
          isServer: true,
        })
      ).toEqual(expect.stringMatching(/\/@babel\/runtime\/helpers\/interopRequireDefault.js$/));
    });

    it('resolves @babel/runtime package exports as ESM', () => {
      expect(
        resolveTo('@babel/runtime/helpers/interopRequireDefault', {
          platform,
          isESMImport: true,
        })
      ).toEqual(
        // NOTE(cedric): even though the import was used as ESM, package exports is disabled so we can't resolve ESM
        expect.stringMatching(/\/@babel\/runtime\/helpers\/interopRequireDefault.js$/)
      );
      expect(
        resolveTo('@babel/runtime/helpers/interopRequireDefault', {
          platform,
          packageExports: true,
          isESMImport: true,
        })
      ).toEqual(
        expect.stringMatching(/\/@babel\/runtime\/helpers\/esm\/interopRequireDefault.js$/)
      );
      expect(
        resolveTo('@babel/runtime/helpers/interopRequireDefault', {
          platform,
          packageExports: true,
          isServer: true,
          isESMImport: true,
        })
      ).toEqual(
        // NOTE(cedric): exporting for server prefers `node` even for ESM imports.
        // `node` is defined in babel's exports and points towards CJS.
        expect.stringMatching(/\/@babel\/runtime\/helpers\/interopRequireDefault.js$/)
      );
    });

    it('resolves with baseUrl', () => {
      expect(resolveTo('App.tsx', { platform, nodeModulesPaths: [originProjectRoot] })).toEqual(
        expect.stringMatching(/\/native-component-list\/App.tsx$/)
      );
      expect(() => resolveTo('App.tsx', { platform })).toThrow(
        /The module could not be resolved because no file or module matched the pattern:/
      );
    });

    [true, false].forEach((packageExports) => {
      it(
        'resolves module with browser shims' + (packageExports ? ' (package exports)' : ''),
        () => {
          // object-inspect doesn't contain package exports so the results should be the same
          // regardless of if the feature is on or not.
          const resolver = createFastResolver({ preserveSymlinks: false, blockList: [] });
          const context = createContext({
            platform,
            packageExports,
            origin: path.join(originProjectRoot, 'index.js'),
          });
          const results = resolver(context, 'object-inspect', platform);
          expect(results).toEqual({
            filePath: expect.stringMatching(/\/object-inspect\/index.js$/),
            type: 'sourceFile',
          });

          assert(results.type === 'sourceFile');

          // Browser shims are applied on native.
          ['web', 'ios'].forEach((platform) => {
            expect(
              resolver(
                createContext({
                  platform,
                  packageExports,
                  origin: results.filePath,
                }),
                './util.inspect.js',
                platform
              )
            ).toEqual({
              type: 'empty',
            });
          });

          // Browser shims are not applied in server contexts.
          expect(
            resolver(
              createContext({
                platform,
                isServer: true,
                origin: results.filePath,
                packageExports,
              }),
              './util.inspect.js',
              platform
            )
          ).toEqual({
            filePath: expect.stringMatching(/object-inspect\/util\.inspect\.js$/),
            type: 'sourceFile',
          });
        }
      );
    });

    xit('resolves module with browser shims with non-matching extensions', () => {
      const resolver = createFastResolver({ preserveSymlinks: false, blockList: [] });
      const context = createContext({
        platform,
        origin: path.join(originProjectRoot, 'index.js'),
      });
      const results = resolver(context, 'uuid/v4', platform);
      expect(results).toEqual({
        filePath: expect.stringMatching(/\/uuid\/v4.js$/),
        type: 'sourceFile',
      });

      assert(results.type === 'sourceFile');

      // Browser shims are applied on native.
      expect(
        resolver(
          createContext({
            platform,
            origin: results.filePath,
          }),
          './lib/rng',
          platform
        )
      ).toEqual({
        filePath: expect.stringMatching(/node_modules\/uuid\/lib\/rng-browser\.js/),
        type: 'sourceFile',
      });
    });
    it('resolves an asset', () => {
      const resolver = createFastResolver({ preserveSymlinks: false, blockList: [] });
      const context = createContext({
        platform,
        origin: path.join(originProjectRoot, 'index.js'),
      });
      const results = resolver(context, './assets/icons/icon.png', platform);
      expect(results).toEqual({
        filePaths: [expect.stringMatching(/\/native-component-list\/assets\/icons\/icon.png/)],
        type: 'assetFiles',
      });
      expect(context.resolveAsset).toHaveBeenCalledWith(
        expect.stringMatching(/\/native-component-list\/assets\/icons$/),
        'icon',
        '.png'
      );
    });
  });
});
