# Changelog

## Unpublished

### 🛠 Breaking changes

- Remove flipper hack support ([#37532](https://github.com/expo/expo/pull/37532) by [@EvanBacon](https://github.com/EvanBacon))
- Use template tarball from expo package. ([#37334](https://github.com/expo/expo/pull/37334) by [@jakex7](https://github.com/jakex7))

### 🎉 New features

- Enable async require by default. ([#36405](https://github.com/expo/expo/pull/36405) by [@EvanBacon](https://github.com/EvanBacon))
- Support JSON output for install check. ([#37318](https://github.com/expo/expo/pull/37318) by [@betomoedano](https://github.com/betomoedano))
- Add `EXPO_USE_STICKY_RESOLVER` to enable experimental sticky resolution to native modules ([#37201](https://github.com/expo/expo/pull/37201) by [@kitten](https://github.com/kitten))
- Support external URLs with static redirects ([#38041](https://github.com/expo/expo/pull/38041) by [@hassankhan](https://github.com/hassankhan))
- Add `EXPO_UNSTABLE_LIVE_BINDINGS` to allow developer to disable live binding in `experimentalImportSupport`. ([#38135](https://github.com/expo/expo/pull/38135) by [@krystofwoldrich](https://github.com/krystofwoldrich))
- Add `location.origin`, Expo SDK version and Hermes version to sitemap UI ([#38201](https://github.com/expo/expo/pull/38201) by [@hassankhan](https://github.com/hassankhan))

### 🐛 Bug fixes

- Fix DOM component metadata overwriting causing WebView 404s after EAS updates. ([#38290](https://github.com/expo/expo/pull/38290) by [@danoc](https://github.com/danoc))
- Support `--output-dir` being a directory outside of the project root. ([#38260](https://github.com/expo/expo/pull/38260) by [@EvanBacon](https://github.com/EvanBacon))
- Update error message for ngrok ([#22469](https://github.com/expo/expo/pull/22469) by [@russorat](https://github.com/russorat))
- Support SSR imports of internal node builtins such as `_http_agent`. ([#37494](https://github.com/expo/expo/pull/37494) by [@EvanBacon](https://github.com/EvanBacon))
- Allow anonymous sessions even when `projectId` is set ([#36874](https://github.com/expo/expo/pull/36874) by [@kadikraman](https://github.com/kadikraman))
- Add static rewrites support to export and server-side handling ([#37930](https://github.com/expo/expo/pull/37930) by [@hassankhan](https://github.com/hassankhan))
- Fix missing Error import stack with `EXPO_METRO_UNSTABLE_ERRORS` enabled and no cause ([#38256](https://github.com/expo/expo/pull/38256)) by [@krystofwoldrich](https://github.com/krystofwoldrich))
- Enable inverse dependency stack trace (`EXPO_METRO_UNSTABLE_ERRORS`) for Metro bundling errors by default ([#38296](https://github.com/expo/expo/pull/38296) by [@krystofwoldrich](https://github.com/krystofwoldrich))
- Fix duplicate code frames printed in transformation error ([#38288](https://github.com/expo/expo/pull/38288) by [@krystofwoldrich](https://github.com/krystofwoldrich))
- Fix processing circular dependencies for inverse dependency resolver stack trace ([#38414](https://github.com/expo/expo/pull/38414) by [@krystofwoldrich](https://github.com/krystofwoldrich))

### 💡 Others

- Extend list of blocked internal imports for react-native-web. ([#38381](https://github.com/expo/expo/pull/38381) by [@EvanBacon](https://github.com/EvanBacon))
- Fix typos. ([#38264](https://github.com/expo/expo/pull/38264) by [@EvanBacon](https://github.com/EvanBacon))
- add modal component ([#37365](https://github.com/expo/expo/pull/37365) by [@Ubax](https://github.com/Ubax))
- Use Vaul for modals and sheets on web with a custom stack ([#37767](https://github.com/expo/expo/pull/37767) by [@hirbod](https://github.com/hirbod))
- fix web back/forward buttons ([#37747](https://github.com/expo/expo/pull/37747) by [@Ubax](https://github.com/Ubax))
- Added CSS-Modules Fast Refresh E2E Coverage ([#37845](https://github.com/expo/expo/pull/37845) by [@hirbod](https://github.com/hirbod))
- Added tests for modal stacking ([#37856](https://github.com/expo/expo/pull/37856) by [@hirbod](https://github.com/hirbod))
- simplify/optimize web-modal tests ([#38025](https://github.com/expo/expo/pull/38025) by [@hirbod](https://github.com/hirbod))
- Fix e2e start-test for local runs ([#38066](https://github.com/expo/expo/pull/38066) by [@Ubax](https://github.com/Ubax))
- Switch Metro imports to `@expo/metro` wrapper package ([#38166](https://github.com/expo/expo/pull/38166) by [@kitten](https://github.com/kitten))
- Treat Meta Quest devices as Android devices in `resolvePlatformFromUserAgentHeader` ([#37749](https://github.com/expo/expo/pull/37749) by [@behenate](https://github.com/behenate))

### ⚠️ Notices

- Added support for React Native 0.80.x. ([#37400](https://github.com/expo/expo/pull/37400) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.24.20 - 2025-07-08

_This version does not introduce any user-facing changes._

## 0.24.19 - 2025-07-07

### 🐛 Bug fixes

- Allow fast resolver to resolve nested `node_modules` packages in monorepos. ([#37769](https://github.com/expo/expo/pull/37769) by [@byCedric](https://github.com/byCedric))
- Rewrite React canary resolution to rely on normal Node module resolution. ([#37770](https://github.com/expo/expo/pull/37770) by [@byCedric](https://github.com/byCedric))

## 0.24.17 - 2025-07-02

### 💡 Others

- Bumped `playwright` version to 1.53.1. ([#37631](https://github.com/expo/expo/pull/37631) by [@kudo](https://github.com/kudo))

## 0.24.16 - 2025-07-01

_This version does not introduce any user-facing changes._

## 0.24.15 - 2025-06-18

_This version does not introduce any user-facing changes._

## 0.24.14 - 2025-06-04

### 🐛 Bug fixes

- remove extraneous log ([#36801](https://github.com/expo/expo/pull/36801) by [@EvanBacon](https://github.com/EvanBacon))
- Fix virtual externalized module checking for `window` for web worker code ([#36852](https://github.com/expo/expo/pull/36852) by [@kitten](https://github.com/kitten))
- Prevent module registry (from `metro-require` fork) to be reinstantiated outside of development ([#36828](https://github.com/expo/expo/pull/36828) by [@kitten](https://github.com/kitten))

### 💡 Others

- Update to `getenv@2.0.0` to support upper case boolean environment variables ([#36688](https://github.com/expo/expo/pull/36688) by [@stephenlacy](https://github.com/stephenlacy))
- Remove "Please" from warnings and errors ([#36862](https://github.com/expo/expo/pull/36862) by [@brentvatne](https://github.com/brentvatne))
- Update tests to include new expo-router asset - arrow_down.png ([#36882](https://github.com/expo/expo/pull/36882) by [@Ubax](https://github.com/Ubax))

## 0.24.13 — 2025-05-08

### 🐛 Bug fixes

- Update to `lan-network@^0.1.6` for VPN network local IP changes and Windows fixes ([#36747](https://github.com/expo/expo/pull/36747) by [@kitten](https://github.com/kitten))

## 0.24.12 — 2025-05-06

### 💡 Others

- Remove EAS build cache provider implementation ([#36584](https://github.com/expo/expo/pull/36584) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- Rename remote build cache provider to build cache provider ([#36643](https://github.com/expo/expo/pull/36643) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.24.11 — 2025-05-03

_This version does not introduce any user-facing changes._

## 0.24.10 — 2025-05-01

### 🎉 New features

- Prevent deleting project directory. ([#36514](https://github.com/expo/expo/pull/36514) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Improve error format when `npx expo export` (native) fails. ([#36533](https://github.com/expo/expo/pull/36533) by [@EvanBacon](https://github.com/EvanBacon))

## 0.24.9 — 2025-04-30

_This version does not introduce any user-facing changes._

## 0.24.8 — 2025-04-30

### 🐛 Bug fixes

- Fix fallback resolution strategy for non-monorepo Node module installations (e.g. isolated dependencies with pnpm without workspaces) ([#36181](https://github.com/expo/expo/pull/36181) by [@kitten](https://github.com/kitten))

## 0.24.7 — 2025-04-28

### 🎉 New features

- Add support for custom remote build cache providers ([#36314](https://github.com/expo/expo/pull/36314) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.24.6 — 2025-04-28

### 🎉 New features

- Inject web stream support when bundling for native platforms. ([#36407](https://github.com/expo/expo/pull/36407) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Remove absolute paths from server components output. ([#35276](https://github.com/expo/expo/pull/35276) by [@EvanBacon](https://github.com/EvanBacon))
- Move virtual RSC client boundary entry point to `expo`. ([#36408](https://github.com/expo/expo/pull/36408) by [@EvanBacon](https://github.com/EvanBacon))

## 0.24.5 — 2025-04-25

_This version does not introduce any user-facing changes._

## 0.24.4 — 2025-04-23

### 🎉 New features

- Add more options to `npx expo lint` command. ([#36262](https://github.com/expo/expo/pull/36262) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Exclude directories from prebuild "magic string" renaming operations. ([#36325](https://github.com/expo/expo/pull/36325) by [@byCedric](https://github.com/byCedric))

## 0.24.3 — 2025-04-21

### 🐛 Bug fixes

- Fix support for using build variants with remote build cache ([#36165](https://github.com/expo/expo/pull/36165) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- Add `exporting` config option for serializer to generate correct entry bundle file name. ([#35563](https://github.com/expo/expo/pull/35563) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Add HMR for environment variables in development ([#36189](https://github.com/expo/expo/pull/36189) by [@EvanBacon](https://github.com/EvanBacon))
- Drop `internal-ip` and determine local network IP address and gateway with UDP sockets. ([#35102](https://github.com/expo/expo/pull/35102) by [@kitten](https://github.com/kitten))
- Improve ability to open stacks from command line. ([#36272](https://github.com/expo/expo/pull/36272) by [@EvanBacon](https://github.com/EvanBacon))
- Exclude `@expo/*` packages from the New Architecture compatibility check. ([#36175](https://github.com/expo/expo/pull/36175) by [@Simek](https://github.com/Simek))

## 0.24.2 — 2025-04-14

_This version does not introduce any user-facing changes._

## 0.24.1 — 2025-04-14

_This version does not introduce any user-facing changes._

## 0.24.0 — 2025-04-11

### 🎉 New features

- Output recommended versions in prebuild ([#35941](https://github.com/expo/expo/pull/35941) by [@jakex7](https://github.com/jakex7))

### 💡 Others

- Add a warning for users to upgrade their `eas-cli` when using `remoteBuildCache`. ([#36103](https://github.com/expo/expo/pull/36103) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.23.4 — 2025-04-11

### 💡 Others

- Mark `--https` as deprecated in favor of `--tunnel`. ([#36083](https://github.com/expo/expo/pull/36083) by [@EvanBacon](https://github.com/EvanBacon))
- Use `eas-cli fingerprint:generate` to generate fingerprints for remote builds cache. ([#36085](https://github.com/expo/expo/pull/36085) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.23.3 — 2025-04-10

### 🎉 New features

- Add support for using remote builds as cache ([#36029](https://github.com/expo/expo/pull/36029), [#36047](https://github.com/expo/expo/pull/36047) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.23.2 — 2025-04-09

### 🐛 Bug fixes

- Ensure fast resolver is enabled when react canary is enabled. ([#36053](https://github.com/expo/expo/pull/36053) by [@EvanBacon](https://github.com/EvanBacon))

## 0.23.1 — 2025-04-08

### 🎉 New features

- Upgrade React canary to 19.1 ([#36021](https://github.com/expo/expo/pull/36021) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Fix fusebox log formatting and silence migration warning. ([#35911](https://github.com/expo/expo/pull/35911) by [@EvanBacon](https://github.com/EvanBacon))
- Hide BRIDGE tags in webview logs. ([#35920](https://github.com/expo/expo/pull/35920) by [@EvanBacon](https://github.com/EvanBacon))
- Fixed React Native Devtools opening issue. ([#35935](https://github.com/expo/expo/pull/35935), [#35952](https://github.com/expo/expo/pull/35952) by [@kudo](https://github.com/kudo))

### 💡 Others

- Add backup stack trace ([#35913](https://github.com/expo/expo/pull/35913) by [@EvanBacon](https://github.com/EvanBacon))
- Add helpful recommendation to the standard "Xcode not installed" error message. ([#36024](https://github.com/expo/expo/pull/36024) by [@quantizor](https://github.com/quantizor)

## 0.23.0 — 2025-04-04)

### 🛠 Breaking changes

- upgrade RN to 0.78 ([#35050](https://github.com/expo/expo/pull/35050) by [@vonovak](https://github.com/vonovak))
- Force NODE_ENV during npx expo export and do not allow overwriting outside of `--dev` flag. ([#34533](https://github.com/expo/expo/pull/34533) by [@EvanBacon](https://github.com/EvanBacon))
- Removed react-devtools integration from CLI. ([#35741](https://github.com/expo/expo/pull/35741) by [@kudo](https://github.com/kudo))

### 🎉 New features

- Symbolicate React error stacks in terminal logs. ([#35866](https://github.com/expo/expo/pull/35866) by [@EvanBacon](https://github.com/EvanBacon))
- Add improved error message for missing optional imports. ([#35239](https://github.com/expo/expo/pull/35239) by [@EvanBacon](https://github.com/EvanBacon))
- Estimate Xcode binary path in minimal builds. ([#33415](https://github.com/expo/expo/pull/33415) by [@EvanBacon](https://github.com/EvanBacon))
- Support GitHub shorthand for templates ([#33383](https://github.com/expo/expo/pull/33383) by [@satya164](https://github.com/satya164))
- Create `keep.xml` to prevent resource shrinking on Android. ([#35465](https://github.com/expo/expo/pull/35465) by [@jakex7](https://github.com/jakex7))
- Bump version of React Navigation ([#35595](https://github.com/expo/expo/pull/35595) by [@marklawlor](https://github.com/marklawlor))
- Expo Router static redirects ([#34734](https://github.com/expo/expo/pull/34734) by [@marklawlor](https://github.com/marklawlor))
- Add flat config support to `npx expo lint`. ([#34029](https://github.com/expo/expo/pull/34371) by [@kadikraman](https://github.com/kadikraman))

### 🐛 Bug fixes

- Force react-navigation to resolve to the same condition each time.
- Silence missing favicon file error. ([#35357](https://github.com/expo/expo/pull/35357) by [@EvanBacon](https://github.com/EvanBacon))
- Fix importing `@radix-ui/colors` in CSS files. ([#35213](https://github.com/expo/expo/pull/35213) by [@EvanBacon](https://github.com/EvanBacon))
- Ensure HMR updates use the same serializer pass as initial bundles. ([#35110](https://github.com/expo/expo/pull/35110) by [@EvanBacon](https://github.com/EvanBacon))
- Fix async bundling. ([#34986](https://github.com/expo/expo/pull/34986) by [@EvanBacon](https://github.com/EvanBacon))
- Fix application identifier suggestion. ([#34843](https://github.com/expo/expo/pull/34843) by [@EvanBacon](https://github.com/EvanBacon))
- Fix `static` and `server` projects not starting up correctly when project path contains URI-unsafe characters like spaces. ([#34289](https://github.com/expo/expo/pull/34289) by [@kitten](https://github.com/kitten))
- Add fallback resolution strategy for dependencies and optional peer dependencies of `expo` and `expo-router` to prevent broken resolution for isolated dependencies and hoisting issues. ([#34286](https://github.com/expo/expo/pull/34286) by [@kitten](https://github.com/kitten))
- Preserve proxy leases on webcontainers ([#34831](https://github.com/expo/expo/pull/34831) by [@kitten](https://github.com))
- Add support for `isESMImport` in fast resolver and React Server resolution. ([#35520](https://github.com/expo/expo/pull/35520) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Remove ridiculous **NOBRIDGE** tag from logs. ([#35868](https://github.com/expo/expo/pull/35868) by [@EvanBacon](https://github.com/EvanBacon))
- Upgrade readiness status of React Server Components. ([#35467](https://github.com/expo/expo/pull/35467) by [@EvanBacon](https://github.com/EvanBacon))
- Add tests for `Worker` and `require.unstable_resolveWorker()`. ([#34938](https://github.com/expo/expo/pull/34938) by [@EvanBacon](https://github.com/EvanBacon))
- Replace cacache in fetch cache with lighter implementation. ([#34983](https://github.com/expo/expo/pull/34983) by [@EvanBacon](https://github.com/EvanBacon))
- Move getAccountUsername from `@expo/config` to CLI for internal usage ([#33249](https://github.com/expo/expo/pull/33249) by [@wschurman](https://github.com/wschurman))
- Add e2e tests for browser history and hash param ([#33524](https://github.com/expo/expo/pull/33524) by [@stephentuso](https://github.com/stephentuso))
- Removed creating the bridging header from the defaults plugin and added it to the template instead. ([#33539](https://github.com/expo/expo/pull/33539) by [@tsapeta](https://github.com/tsapeta))
- Exclude `@expo-google-fonts/*` packages from the New Architecture compatibility check. ([#34127](https://github.com/expo/expo/pull/34127) by [@Simek](https://github.com/Simek))
- Pin to `internal-ip@6.1.0` ([#34325](https://github.com/expo/expo/pull/34325) by [@kitten](https://github.com/kitten))
- Change suggested package name to not use app config owner field. ([#34209](https://github.com/expo/expo/pull/34209) by [@wschurman](https://github.com/wschurman))
- Update wording of "missing expo-router" message. ([#34717](https://github.com/expo/expo/pull/34717) by [@marklawlor](https://github.com/marklawlor))
- Bump `bplist-creator` to `0.1.0` (aligning with `simple-plist@1.3.1`). ([#35041](https://github.com/expo/expo/pull/35041) by [@kitten](https://github.com/kitten))
- Drop `is-wsl`, `is-docker`, and `lodash.debounce`. ([#35040](https://github.com/expo/expo/pull/35040) by [@kitten](https://github.com/kitten))
- Drop `form-data` dependency. ([#35048](https://github.com/expo/expo/pull/35048) by [@kitten](https://github.com/35048))
- Drop `fs-extra` in favor of `fs`. ([#35036](https://github.com/expo/expo/pull/35036) by [@kitten](https://github.com/kitten))
- Drop `fast-glob` in favor of `glob`. ([#35082](https://github.com/expo/expo/pull/35082) by [@kitten](https://github.com/kitten))
- Move Expo Atlas out of experimental phase by renaming environment variable to `EXPO_ATLAS`. ([#35260](https://github.com/expo/expo/pull/35260) by [@byCedric](https://github.com/byCedric))
- Phase out `@expo/rudder-sdk-node` usage in telemetry. ([#35271](https://github.com/expo/expo/pull/35271) by [@byCedric](https://github.com/byCedric))
- Fully remove `@expo/rudder-sdk-node` usage in telemetry. ([#35299](https://github.com/expo/expo/pull/35299) by [@byCedric](https://github.com/byCedric))
- Bump Metro typescript declarations to `0.81.3`. ([#35306](https://github.com/expo/expo/pull/35306) by [@byCedric](https://github.com/byCedric))
- Upgrade to `minimatch@9` ([#35313](https://github.com/expo/expo/pull/35313) by [@kitten](https://github.com/kitten))
- Upgrade to `tar@7` ([#35314](https://github.com/expo/expo/pull/35314) by [@kitten](https://github.com/kitten))
- Add requestId to API error ([#35442](https://github.com/expo/expo/pull/35442) by [@wschurman](https://github.com/wschurman))
- Bump Metro typescript declarations to `0.82.0`. ([#35522](https://github.com/expo/expo/pull/35522) by [@byCedric](https://github.com/byCedric))
- Bump `swc` for `@expo/cli` build output. ([#35584](https://github.com/expo/expo/pull/35584) by [@kitten](https://github.com/kitten))

## 0.22.23 - 2025-03-31

_This version does not introduce any user-facing changes._

## 0.22.22 - 2025-03-26

### 💡 Others

- Improve devtools plugins transport performance. ([#35581](https://github.com/expo/expo/pull/35581) by [@kudo](https://github.com/kudo))

## 0.22.21 - 2025-03-20

### 🐛 Bug fixes

- Use explicit user-provided port for `expo run ios --port` when running in headless mode. ([#35582](https://github.com/expo/expo/pull/35582) by [@byCedric](https://github.com/byCedric))

## 0.22.20 - 2025-03-14

### 🐛 Bug fixes

- export:embed should create tmp assets directory if needed. ([#35387](https://github.com/expo/expo/pull/35387) by [@douglowder](https://github.com/douglowder))

## 0.22.19 - 2025-03-11

### 🐛 Bug fixes

- Ensure `UsbmuxClient` can load binary plist pair record data from Apple devices. ([#35262](https://github.com/expo/expo/pull/35262) by [@byCedric](https://github.com/byCedric))
- Fixed DOM Components support for updates. ([#35280](https://github.com/expo/expo/pull/35280), [#35290](https://github.com/expo/expo/pull/35290) by [@kudo](https://github.com/kudo))

## 0.22.18 - 2025-02-20

### 🐛 Bug fixes

- Fixed EAS Update support for DOM Components. ([#35042](https://github.com/expo/expo/pull/35042) by [@kudo](https://github.com/kudo))

### 💡 Others

- fix tests for bun 1.2 (bun lockfile change) ([#34383](https://github.com/expo/expo/pull/34383) by [@vonovak](https://github.com/vonovak))

## 0.22.17 - 2025-02-19

### 🐛 Bug fixes

- Fixed mixed content error when serving DOM Component using tunnel. ([#34916](https://github.com/expo/expo/pull/34916) by [@kudo](https://github.com/kudo))

## 0.22.16 - 2025-02-14

_This version does not introduce any user-facing changes._

## 0.22.14 - 2025-02-12

_This version does not introduce any user-facing changes._

## 0.22.13 - 2025-02-06

_This version does not introduce any user-facing changes._

## 0.22.12 - 2025-02-04

_This version does not introduce any user-facing changes._

## 0.22.11 - 2025-01-27

### 🐛 Bug fixes

- Disable networking in webcontainers to improve compatibility. ([#34474](https://github.com/expo/expo/pull/34474) by [@EvanBacon](https://github.com/EvanBacon))

## 0.22.10 - 2025-01-19

### 🎉 New features

- Add basic support for API routes with React Server Components enabled. ([#34211](https://github.com/expo/expo/pull/34211) by [@EvanBacon](https://github.com/EvanBacon))
- Add placeholder HTML for web exports with React Server Components enabled. ([#34093](https://github.com/expo/expo/pull/34093) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for ESM package imports support and `import` condition in `react-server` resolution. ([#34091](https://github.com/expo/expo/pull/34091) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- fix: add SSR HMR for nested server actions ([#34216](https://github.com/expo/expo/pull/34216) by [@EvanBacon](https://github.com/EvanBacon))
- Fix copying public files to dist/client in RSC exports. ([#34129](https://github.com/expo/expo/pull/34129) by [@EvanBacon](https://github.com/EvanBacon))
- Fix compiler usage with RSC HMR. ([#34128](https://github.com/expo/expo/pull/34128) by [@EvanBacon](https://github.com/EvanBacon))
- Add temporary fix for HMR in RSC. ([#34168](https://github.com/expo/expo/pull/34168) by [@EvanBacon](https://github.com/EvanBacon))
- Ensure we hydrate env vars in the project when running `npx expo serve`. ([#34064](https://github.com/expo/expo/pull/34064) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Improve error when location polyfill is disabled. ([#34180](https://github.com/expo/expo/pull/34180) by [@EvanBacon](https://github.com/EvanBacon))
- Improve native publish linking with server from CI. ([#34070](https://github.com/expo/expo/pull/34070) by [@EvanBacon](https://github.com/EvanBacon))

## 0.22.9 - 2025-01-10

### 🐛 Bug fixes

- Catch system errors when determining local IP addresses. ([#34043](https://github.com/expo/expo/pull/34043) by [@kitten](https://github.com/kitten))

### 💡 Others

- Added `--bytecode` option to `export:embed`. ([#33906](https://github.com/expo/expo/pull/33906) by [@kudo](https://github.com/kudo))

## 0.22.8 - 2025-01-08

### 🎉 New features

- Support EAS Update when RSC is configured. ([#33975](https://github.com/expo/expo/pull/33975) by [@EvanBacon](https://github.com/EvanBacon))
- Add `--unstable-rebundle` flag to `npx expo run:ios`. ([#33980](https://github.com/expo/expo/pull/33980) by [@EvanBacon](https://github.com/EvanBacon))
- Add `+html` and `+native-intent` to `expo customize`. ([#33368](https://github.com/expo/expo/pull/33368) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for Bun's text-based lock file format `bun.lock` ([#33825](https://github.com/expo/expo/pull/33825) by [@tharakadesilva](https://github.com/tharakadesilva))
- Add `--dev` to `npx expo install` to avoid complexity around `npx expo install -- --(save-)dev`. ([#34029](https://github.com/expo/expo/pull/34029) by [@byCedric](https://github.com/byCedric))
- Add `EXPO_NO_DEPENDENCY_VALIDATION` flag to disable dependency validation for `npx expo install` and `npx expo start`. ([#34122](https://github.com/expo/expo/pull/34122) by [@byCedric](https://github.com/byCedric))
- Add support for webcontainer compatible proxy and enable by default once wecontainer is detected. ([#34588](https://github.com/expo/expo/pull/34588) by [@byCedric](https://github.com/byCedric))
- Support static API route redirects. ([#34734](https://github.com/expo/expo/pull/34734) by [@marklawlor](https://github.com/marklawlor))

### 🐛 Bug fixes

- Add e2e testing to server function errors ([#33971](https://github.com/expo/expo/pull/33971) by [@EvanBacon](https://github.com/EvanBacon))
- Recurse server action exports to collect all references. ([#33934](https://github.com/expo/expo/pull/33934) by [@EvanBacon](https://github.com/EvanBacon))
- Add minor fixes to nested server actions. ([#32925](https://github.com/expo/expo/pull/32925) by [@EvanBacon](https://github.com/EvanBacon))
- Fix a build error when running `expo run:ios` consecutively without closing the app. ([#33236](https://github.com/expo/expo/pull/33236) by [@alanjhughes](https://github.com/alanjhughes))
- Add `EAI_AGAIN` DNS service errors to offline detection. ([#34014](https://github.com/expo/expo/pull/34014) by [@byCedric](https://github.com/byCedric))
- Use POSIX path when converting route file name in API routes. ([#34307](https://github.com/expo/expo/pull/34307) by [@byCedric](https://github.com/byCedric))
- Bind debugging infrastructure to `localhost` instead of LAN ip. ([#34368](https://github.com/expo/expo/pull/34368) by [@byCedric](https://github.com/byCedric))

## 0.22.7 - 2024-12-19

### 🐛 Bug fixes

- Bump `@react-native/dev-middleware` to resolve ignored `node_module/*` entry points. ([#33656](https://github.com/expo/expo/pull/33656) by [@byCedric](https://github.com/byCedric))

## 0.22.6 - 2024-12-16

### 🐛 Bug fixes

- Load `.env` files in `expo start` before resolving options making these env vars available in dynamic app manifests. ([#33629](https://github.com/expo/expo/pull/33629) by [@byCedric](https://github.com/byCedric))

## 0.22.5 - 2024-12-10

_This version does not introduce any user-facing changes._

## 0.22.4 - 2024-12-10

### 🐛 Bug fixes

- Fix manifest url and API route exports on Windows. ([#33408](https://github.com/expo/expo/pull/33408) by [@byCedric](https://github.com/byCedric))
- Fix SSR manifest client boundaries module IDs format on Windows. ([#33541](https://github.com/expo/expo/pull/33541) by [@byCedric](https://github.com/byCedric))
- Fix corrupted filepaths with RSC SSR on Windows. ([#33543](https://github.com/expo/expo/pull/33543) by [@byCedric](https://github.com/byCedric))
- Fix Expo Router root path format in POSIX to avoid path modification issues in RSC. ([#33544](https://github.com/expo/expo/pull/33544) by [@byCedric](https://github.com/byCedric))

## 0.22.3 - 2024-12-05

_This version does not introduce any user-facing changes._

## 0.22.2 - 2024-12-05

### 💡 Others

- Add `User-Agent: expo-cli/<version>` to all CLI requests. ([#33471](https://github.com/expo/expo/pull/33471) by [@byCedric](https://github.com/byCedric))

## 0.22.1 - 2024-12-05

### 🎉 New features

- Use `ios.appleTeamId` when prompting users to select the Apple identity in `expo run ios`. ([#33330](https://github.com/expo/expo/pull/33330) by [@byCedric](https://github.com/byCedric))

## 0.22.0 - 2024-11-29

### 🎉 New features

- Support making templates for React Native macOS, and rename project name inside `contents.xcworkspacedata` files ([#30309](https://github.com/expo/expo/pull/30309) by [@shirakaba](https://github.com/shirakaba))

### 🐛 Bug fixes

- Fixed DOM Components support on Windows. ([#33114](https://github.com/expo/expo/pull/33114) by [@kudo](https://github.com/kudo))

## 0.21.8 — 2024-11-22

### 💡 Others

- Improve simulators labels when printing usage verbosely ([#30403](https://github.com/expo/expo/pull/30403) by [@germanolira](https://github.com/germanolira))

## 0.21.7 — 2024-11-20

### 🐛 Bug fixes

- Detect and enable offline mode after DNS is resolved, but network isn't accessible. ([#33084](https://github.com/expo/expo/pull/33084) by [@byCedric](https://github.com/byCedric))

## 0.21.6 — 2024-11-19

### 🐛 Bug fixes

- Exclude virtual network devices when determining local IP address ([#33082](https://github.com/expo/expo/pull/33082) by [@kitten](https://github.com/kitten))
- Install TypeScript as a dev dependency ([#33055](https://github.com/expo/expo/pull/33055) by [@kadikraman](https://github.com/kadikraman))

## 0.21.5 — 2024-11-14

### 💡 Others

- Bump minimum @expo/prebuild-config version.

## 0.21.4 — 2024-11-14

### 🐛 Bug fixes

- fix windows SSR. ([#32923](https://github.com/expo/expo/pull/32923) by [@EvanBacon](https://github.com/EvanBacon))

## 0.21.3 — 2024-11-14

_This version does not introduce any user-facing changes._

## 0.21.2 — 2024-11-13

### 🐛 Bug fixes

- Fix Expo Router root path on Windows. ([#32792](https://github.com/expo/expo/pull/32792) by [@marklawlor](https://github.com/marklawlor))
- Fix handling of prerelease versions in dependency version checks. ([#32875](https://github.com/expo/expo/pull/32875) by [@betomoedano](https://github.com/betomoedano))

### 💡 Others

- Upgrade Expo Atlas prerequisite to `0.4.0` for newer `@expo/server` version. ([#32831](https://github.com/expo/expo/pull/32831) by [@byCedric](https://github.com/byCedric))
- Upgrade send to `0.19.0`. ([#32852](https://github.com/expo/expo/pull/32852) by [@MWein](https://github.com/MWein))

## 0.21.1 — 2024-11-13

### 🎉 New features

- Add scoped module IDs for Metro SSR. ([#32737](https://github.com/expo/expo/pull/32737) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Fix RSC export with hooks. ([#32793](https://github.com/expo/expo/pull/32793) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Rename `experiments.reactServerActions` -> `experiments.reactServerFunctions` and other RSC flags. ([#32791](https://github.com/expo/expo/pull/32791) by [@EvanBacon](https://github.com/EvanBacon))
- Revert [#32160](https://github.com/expo/expo/pull/32160).

## 0.21.0 — 2024-11-12

### 🎉 New features

- Add `npx expo serve` command for hosting the release server locally. ([#32602](https://github.com/expo/expo/pull/32602) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Add iPad as usbmux platform to os type ([#32733](https://github.com/expo/expo/pull/32733) by [@moduval](https://github.com/moduval))
- Throw error when importing native module on web. ([#32790](https://github.com/expo/expo/pull/32790) by [@EvanBacon](https://github.com/EvanBacon))
- Move `react-native-web`-less to feature flag. ([#32785](https://github.com/expo/expo/pull/32785) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Improving linking to modules in E2E tests. ([#32769](https://github.com/expo/expo/pull/32769) by [@marklawlor](https://github.com/marklawlor))

## 0.20.6 — 2024-11-11

_This version does not introduce any user-facing changes._

## 0.20.5 — 2024-11-11

### 🐛 Bug fixes

- Add missing semver dep, handle missing router import ((#32762)[https://github.com/expo/expo/pull/32762] by [@brentvatne](https://github.com/brentvatne))
- Fix gitignore being modified on blank js project ((#32765)[https://github.com/expo/expo/pull/32765] by [@marklawlor](https://github.com/marklawlor))

## 0.20.4 — 2024-11-10

### 🎉 New features

- Add `expo-router` integration with `@expo/cli install` command. ([#32679](https://github.com/expo/expo/pull/32679) by [@marklawlor](https://github.com/marklawlor))

## 0.20.3 — 2024-11-07

### 💡 Others

- Catch `EMFILE` errors on macOS and clarify the next step. ([#32513](https://github.com/expo/expo/pull/32513) by [@byCedric](https://github.com/byCedric))

## 0.20.2 — 2024-11-07

### 🐛 Bug fixes

- Get runtime version from expo-updates for local manifest serving ([#32520](https://github.com/expo/expo/pull/32520) by [@wschurman](https://github.com/wschurman))

## 0.20.1 — 2024-11-06

_This version does not introduce any user-facing changes._

## 0.20.0 — 2024-11-05

### 🎉 New features

- Added DOM Components support to the `export` command. ([#32504](https://github.com/expo/expo/pull/32504) by [@kudo](https://github.com/kudo))

### 🐛 Bug fixes

- Improve export eager cache key. ([#32600](https://github.com/expo/expo/pull/32600) by [@EvanBacon](https://github.com/EvanBacon))
- Fix issue where renderer overwrote existing SSR modules. ([#32601](https://github.com/expo/expo/pull/32601) by [@EvanBacon](https://github.com/EvanBacon))
- Avoid using path mutations in glob patterns for Windows. ([#32617](https://github.com/expo/expo/pull/32617) by [@byCedric](https://github.com/byCedric))
- Remove message about running `npx expo install` again to install other package updates if no other packages or flags are specified. ([#32622](https://github.com/expo/expo/pull/32622) by [@keith-kurak](https://github.com/keith-kurak))

### 💡 Others

- Catch all exceptions from telemetry flush to prevent upgrade errors. ([#32544](https://github.com/expo/expo/pull/32544) by [@keith-kurak](https://github.com/keith-kurak))
- Added `process.env.EXPO_BASE_URL` support for DOM components in development mode. ([#32629](https://github.com/expo/expo/pull/32629) by [@kudo](https://github.com/kudo))

## 0.19.14 — 2024-11-04

### 🐛 Bug fixes

- Add fallback method for determining internal IP address. ([#32273](https://github.com/expo/expo/pull/32273) by [@kitten](https://github.com/kitten))

### 💡 Others

- Move server action env to `@expo/metro-runtime`. ([#32597](https://github.com/expo/expo/pull/32597) by [@EvanBacon](https://github.com/EvanBacon))
- Update `@urql/core` and related dependencies and remove `graphql` dependency. ([#32065](https://github.com/expo/expo/pull/32065) by [@kitten](https://github.com/kitten))
- Increase visibility in stuck `export:embed` processes. ([#32580](https://github.com/expo/expo/pull/32580) by [@byCedric](https://github.com/byCedric))

## 0.19.13 — 2024-10-31

_This version does not introduce any user-facing changes._

## 0.19.12 — 2024-10-31

_This version does not introduce any user-facing changes._

## 0.19.11 — 2024-10-31

### 🐛 Bug fixes

- Prevent changes to telemetry from crashing `expo` package upgrade ([#32490](https://github.com/expo/expo/pull/32490) by [@keith-kurak](https://github.com/keith-kurak))

## 0.19.10 — 2024-10-31

_This version does not introduce any user-facing changes._

## 0.19.9 — 2024-10-31

### 🐛 Bug fixes

- Don't assert `client-only` in SSR bundles. ([#32479](https://github.com/expo/expo/pull/32479) by [@EvanBacon](https://github.com/EvanBacon))
- Fix invalid project randomness when using Ngrok ([#32359](https://github.com/expo/expo/pull/32359) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.19.8 — 2024-10-30

### 🎉 New features

- Add server action-only mode. ([#32432](https://github.com/expo/expo/pull/32432) by [@EvanBacon](https://github.com/EvanBacon))

## 0.19.7 — 2024-10-29

### 🐛 Bug fixes

- Fix unresponsive terminal after opening React Native DevTools. ([#32451](https://github.com/expo/expo/pull/32451) by [@byCedric](https://github.com/byCedric))

## 0.19.6 — 2024-10-29

_This version does not introduce any user-facing changes._

## 0.19.5 — 2024-10-29

### 💡 Others

- Simplify automatically adding config plugins to app manifest through `expo install`. ([#32426](https://github.com/expo/expo/pull/32426) by [@byCedric](https://github.com/byCedric))

## 0.19.4 — 2024-10-28

_This version does not introduce any user-facing changes._

## 0.19.3 — 2024-10-25

### 🐛 Bug fixes

- fix async routes in web ssr ([#32331](https://github.com/expo/expo/pull/32331) by [@EvanBacon](https://github.com/EvanBacon))
- Avoid broadcasting binary data over messages websocket. ([#32400](https://github.com/expo/expo/pull/32400) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Skipped internal bundles from debugging targets. ([#32322](https://github.com/expo/expo/pull/32322) by [@kudo](https://github.com/kudo))

## 0.19.2 — 2024-10-24

_This version does not introduce any user-facing changes._

## 0.19.1 — 2024-10-24

_This version does not introduce any user-facing changes._

## 0.19.0 — 2024-10-22

### 🛠 Breaking changes

- Remove `debug.html` from `npx expo export --source-maps`. ([#31477](https://github.com/expo/expo/pull/31477) by [@EvanBacon](https://github.com/EvanBacon))
- Ignore /dist folder in the default eslint config ([#31532](https://github.com/expo/expo/pull/31532) by [@kadikraman](https://github.com/kadikraman))

### 🎉 New features

- Add `expo-router/rsc/headers` for accessing request headers in server components. ([#32099](https://github.com/expo/expo/pull/32099) by [@EvanBacon](https://github.com/EvanBacon))
- Add aliases for bridge modules in RSC. ([#32095](https://github.com/expo/expo/pull/32095) by [@EvanBacon](https://github.com/EvanBacon))
- Add experimental support for React Server Actions in Expo Router. ([#31959](https://github.com/expo/expo/pull/31959) by [@EvanBacon](https://github.com/EvanBacon))
- Throw clear error when importing `react-native/Libraries/Utilities/codegenNativeCommands` on web. ([#31791](https://github.com/expo/expo/pull/31791) by [@EvanBacon](https://github.com/EvanBacon))
- automatically deploy server from eager exports. ([#31707](https://github.com/expo/expo/pull/31707) by [@EvanBacon](https://github.com/EvanBacon))
- eagerly bundle JS during `npx expo run:ios` for faster production failures. ([#31670](https://github.com/expo/expo/pull/31670) by [@EvanBacon](https://github.com/EvanBacon))
- Add `npx expo export --no-ssg` to export web API routes without static rendering the pages. ([#31475](https://github.com/expo/expo/pull/31475) by [@EvanBacon](https://github.com/EvanBacon))
- disable export:embed cache reset when running in CI. ([#31663](https://github.com/expo/expo/pull/31663) by [@EvanBacon](https://github.com/EvanBacon))
- add support for css imports from other css files ([#31574](https://github.com/expo/expo/pull/31574) by [@EvanBacon](https://github.com/EvanBacon))
- server routing and static exports ([#31500](https://github.com/expo/expo/pull/31500) by [@EvanBacon](https://github.com/EvanBacon))
- Return error UI when an API route throws an error ([#31485](https://github.com/expo/expo/pull/31485) by [@EvanBacon](https://github.com/EvanBacon))
- Add log formatting for DOM components. ([#31265](https://github.com/expo/expo/pull/31265) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for CSS in server components. ([#31073](https://github.com/expo/expo/pull/31073) by [@EvanBacon](https://github.com/EvanBacon))
- Added production exports for experimental server renderer. ([#30850](https://github.com/expo/expo/pull/30850) by [@EvanBacon](https://github.com/EvanBacon))
- Add initial version of DOM Components and support for iOS production exports. ([#30938](https://github.com/expo/expo/pull/30938) by [@EvanBacon](https://github.com/EvanBacon))
- Added experimental server renderer in development. ([#30334](https://github.com/expo/expo/pull/30334) by [@EvanBacon](https://github.com/EvanBacon))
- Added experimental server renderer in development. ([#30334](https://github.com/expo/expo/pull/30334) by [@EvanBacon](https://github.com/EvanBacon))
- Added experimental support for tree shaking. ([#30111](https://github.com/expo/expo/pull/30111) by [@EvanBacon](https://github.com/EvanBacon))
- Add `--binary <path>` option to `expo run` commands for reusing builds. ([#30437](https://github.com/expo/expo/pull/30437) by [@EvanBacon](https://github.com/EvanBacon))
- Added experimental support for production graph optimizations. ([#30417](https://github.com/expo/expo/pull/30417) by [@EvanBacon](https://github.com/EvanBacon))
- Use `react` and `react-dom` 19 with `experiments.reactCanary`. ([#30335](https://github.com/expo/expo/pull/30335) by [@EvanBacon](https://github.com/EvanBacon))
- Added `EXPO_USE_METRO_REQUIRE` to enable stable string module IDs. ([#30176](https://github.com/expo/expo/pull/30176) by [@EvanBacon](https://github.com/EvanBacon))
- Print the selected app IDs in prebuild when they change. ([#30044](https://github.com/expo/expo/pull/30044) by [@EvanBacon](https://github.com/EvanBacon))
- Automatically write an `app.json` when attempting to modify a config and no file exists. ([#30026](https://github.com/expo/expo/pull/30026) by [@EvanBacon](https://github.com/EvanBacon))
- Automatically use valid default app identifiers in prebuild. ([#30023](https://github.com/expo/expo/pull/30023) by [@EvanBacon](https://github.com/EvanBacon))
- Add microsecond format for bundling. ([#29701](https://github.com/expo/expo/pull/29701) by [@EvanBacon](https://github.com/EvanBacon))
- Add `.eslintrc.js` to `expo customize`. ([#29570](https://github.com/expo/expo/pull/29570) by [@EvanBacon](https://github.com/EvanBacon))
- Support web imports of `react-native/Libraries/Image/resolveAssetSource` in Metro. ([#29685](https://github.com/expo/expo/pull/29685) by [@EvanBacon](https://github.com/EvanBacon))
- Unify Android device prompts with iOS prompts for `npx expo run:android -d`. ([#28622](https://github.com/expo/expo/pull/28622) by [@byCedric](https://github.com/byCedric))
- Enable `EXPO_USE_METRO_WORKSPACE_ROOT` by default and replace with `EXPO_NO_METRO_WORKSPACE_ROOT`. ([#30621](https://github.com/expo/expo/pull/30621) by [@byCedric](https://github.com/byCedric))
- Remove `node-fetch` in favor of `undici` for improved Node 22+ support. ([#29511](https://github.com/expo/expo/pull/29511) by [@byCedric](https://github.com/byCedric))
- Added support to download template from npm when running prebuild. ([#31195](https://github.com/expo/expo/pull/31195) by [@kudo](https://github.com/kudo))
- Add an optional New Architecture compatibility check for dependencies added via `install` command. ([#31222](https://github.com/expo/expo/pull/31222) by [@Simek](https://github.com/Simek))
- Add support in `expo run android` for product flavors with custom app ids. ([#31756](https://github.com/expo/expo/pull/31756) by [@byCedric](https://github.com/byCedric))
- Support Fusebox and React Native DevTools in Expo. ([#32029](https://github.com/expo/expo/pull/32029) by [@byCedric](https://github.com/byCedric))
- Enable `hydration` on Expo Web in development when `EXPO_WEB_DEV_HYDRATE` is set. ([#32047](https://github.com/expo/expo/pull/32047) by [@marklawlor](https://github.com/marklawlor)) & ([#32109](https://github.com/expo/expo/pull/32109) by [@marklawlor](https://github.com/marklawlor))

### 🐛 Bug fixes

- Improve server error stacks. ([#32098](https://github.com/expo/expo/pull/32098) by [@EvanBacon](https://github.com/EvanBacon))
- Fix experimental web exports for RSC. ([#32042](https://github.com/expo/expo/pull/32042) by [@EvanBacon](https://github.com/EvanBacon))
- Fix RSC after RN upgrade. ([#32028](https://github.com/expo/expo/pull/32028) by [@EvanBacon](https://github.com/EvanBacon))
- Fix search params in RSC. ([#31641](https://github.com/expo/expo/pull/31641) by [@EvanBacon](https://github.com/EvanBacon))
- Fix cache sharing across Expo Go and dev client. ([#31566](https://github.com/expo/expo/pull/31566) by [@EvanBacon](https://github.com/EvanBacon))
- Fix exporting index files for server hosting in Expo Router. ([#31543](https://github.com/expo/expo/pull/31543) by [@EvanBacon](https://github.com/EvanBacon))
- Fix API route bundling in development. ([#31491](https://github.com/expo/expo/pull/31491) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for `config.resolver.requireCycleIgnorePatterns` in SSR bundles. ([#31462](https://github.com/expo/expo/pull/31462) by [@EvanBacon](https://github.com/EvanBacon))
- Force DOM components to be minified in production exports. ([#31271](https://github.com/expo/expo/pull/31271) by [@EvanBacon](https://github.com/EvanBacon))
- Fix DOM component re-renders in dev. ([#31259](https://github.com/expo/expo/pull/31259) by [@EvanBacon](https://github.com/EvanBacon))
- Fix DOM component exports in CI. ([#31182](https://github.com/expo/expo/pull/31182) by [@EvanBacon](https://github.com/EvanBacon))
- prevent RSC errors from crashing server. ([#31019](https://github.com/expo/expo/pull/31019) by [@EvanBacon](https://github.com/EvanBacon))
- prevent exporting RSC endpoint by default. ([#31102](https://github.com/expo/expo/pull/31102) by [@EvanBacon](https://github.com/EvanBacon))
- Update source map URL when config mutates modules. ([#30980](https://github.com/expo/expo/pull/30980) by [@EvanBacon](https://github.com/EvanBacon))
- Use `react-server` resolution when experimental react canary support is enabled. ([#30747](https://github.com/expo/expo/pull/30747) by [@EvanBacon](https://github.com/EvanBacon))
- Fix resolver fields for SSR + native platforms. ([#29701](https://github.com/expo/expo/pull/29701) by [@EvanBacon](https://github.com/EvanBacon))
- Fix assetId for static web assets. ([#29686](https://github.com/expo/expo/pull/29686) by [@EvanBacon](https://github.com/EvanBacon))
- Upgrade minimum required Atlas version to `0.3.11` fixing HMR reloads. ([#30424](https://github.com/expo/expo/pull/30424) by [@byCedric](https://github.com/byCedric))
- Fixed the `CorsMiddleware` is a not registered since react-native 0.75. ([#30752](https://github.com/expo/expo/pull/30752) by [@kudo](https://github.com/kudo))
- Detect workspace root for monorepos using pnpm. ([#31124](https://github.com/expo/expo/pull/31124) by [@byCedric](https://github.com/byCedric))
- Detect network issues and enable offline mode with Undici errors. ([#31517](https://github.com/expo/expo/pull/31517) by [@byCedric](https://github.com/byCedric))
- Resolve dom components entry relative to workspace root instead of project root. ([#31433](https://github.com/expo/expo/pull/31433) by [@byCedric](https://github.com/byCedric))
- Use proper telemetry strategies for every command. ([#31281](https://github.com/expo/expo/pull/31281) by [@byCedric](https://github.com/byCedric))
- Only test project web support through `react-dom`. ([#32148](https://github.com/expo/expo/pull/32148) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Assert that only SPA rendering is enabled with RSC. ([#32188](https://github.com/expo/expo/pull/32188) by [@EvanBacon](https://github.com/EvanBacon))
- Use virtual module for consistent asset registry. ([#31980](https://github.com/expo/expo/pull/31980) by [@EvanBacon](https://github.com/EvanBacon))
- Bump `react-native-web` patch ([#32105](https://github.com/expo/expo/pull/32105) by [@EvanBacon](https://github.com/EvanBacon))
- Stop pinging dev session with updates. ([#31717](https://github.com/expo/expo/pull/31717) by [@EvanBacon](https://github.com/EvanBacon))
- improve export log format ([#31476](https://github.com/expo/expo/pull/31476) by [@EvanBacon](https://github.com/EvanBacon))
- Reduce scope of custom transform options in Metro cache. ([#31262](https://github.com/expo/expo/pull/31262) by [@EvanBacon](https://github.com/EvanBacon))
- Refactor web hydration to use `globalThis.__EXPO_ROUTER_HYDRATE__` instead of `process.env.EXPO_PUBLIC_USE_STATIC`. ([#31267](https://github.com/expo/expo/pull/31267) by [@EvanBacon](https://github.com/EvanBacon))
- Enable experimental features for RSC when `experiments.reactServerComponents` is enabled. ([#30967](https://github.com/expo/expo/pull/30967) by [@EvanBacon](https://github.com/EvanBacon))
- Only enable RSC when `experiments.reactServerComponents` is true. ([#30875](https://github.com/expo/expo/pull/30875) by [@EvanBacon](https://github.com/EvanBacon))
- Improve logging. ([#30354](https://github.com/expo/expo/pull/30354) by [@EvanBacon](https://github.com/EvanBacon))
- Decouple CLI from `@expo/metro-runtime`. ([#30300](https://github.com/expo/expo/pull/30300) by [@EvanBacon](https://github.com/EvanBacon))
- Add robot export e2e test. ([#30049](https://github.com/expo/expo/pull/30049) by [@EvanBacon](https://github.com/EvanBacon))
- Add internal externals to prevent bundling `source-map-support` in development. ([#29701](https://github.com/expo/expo/pull/29701) by [@EvanBacon](https://github.com/EvanBacon))
- Remove webpack dependency in repo. ([#29840](https://github.com/expo/expo/pull/29840) by [@EvanBacon](https://github.com/EvanBacon))
- Add "more tools" to terminal UI all the time. ([#29837](https://github.com/expo/expo/pull/29837) by [@EvanBacon](https://github.com/EvanBacon))
- Remove unused `serve.json` file from `expo customize`. ([#29571](https://github.com/expo/expo/pull/29571) by [@EvanBacon](https://github.com/EvanBacon))
- Reduce unused server code in exports. ([#29619](https://github.com/expo/expo/pull/29619) by [@EvanBacon](https://github.com/EvanBacon))
- Remove unused dependencies. ([#29177](https://github.com/expo/expo/pull/29177) by [@Simek](https://github.com/Simek))
- Update `tar` dependency. ([#29663](https://github.com/expo/expo/pull/29663) by [@Simek](https://github.com/Simek))
- Update `glob@7` to `glob@10`. ([#29898](https://github.com/expo/expo/pull/29898) by [@byCedric](https://github.com/byCedric))
- Add Router mastro test. ([#30285](https://github.com/expo/expo/pull/30285) by [@marklawlor](https://github.com/marklawlor))
- Improve Expo Router FastRefresh test. ([#29977](https://github.com/expo/expo/pull/29977) by [@marklawlor](https://github.com/marklawlor))
- Drop `tempy` in favor of equivalent code to avoid transitive, deprecated `rimraf` dependency. ([#30832](https://github.com/expo/expo/pull/30832) by [@kitten](https://github.com/kitten))
- Update `npm-package-arg@^7` to `npm-package-arg@^11`. ([#30842](https://github.com/expo/expo/pull/30842) by [@kitten](https://github.com/kitten))
- Fixed DOM components bundling issues for Android emulators and release builds. ([#30974](https://github.com/expo/expo/pull/30974) by [@kudo](https://github.com/kudo))
- Added public assets support for DOM components. ([#30975](https://github.com/expo/expo/pull/30975) by [@kudo](https://github.com/kudo))
- Drop usage of `@react-native-community/cli-server-api` in favor of our own Metro dev middleware. ([#31570](https://github.com/expo/expo/pull/31570) by [@byCedric](https://github.com/byCedric))
- Move location of assetPatternsToBeBundled config key ([#31584](https://github.com/expo/expo/pull/31584) by [@wschurman](https://github.com/wschurman))
- Throwing an error for DOM components if no webview installed. ([#31974](https://github.com/expo/expo/pull/31974) by [@kudo](https://github.com/kudo))
- Update Metro type definitions to `metro@0.80.12`. ([#32007](https://github.com/expo/expo/pull/32007) by [@byCedric](https://github.com/byCedric))
- Remove `json-schema-deref-sync` dependency. ([#32048](https://github.com/expo/expo/pull/32048) by [@kitten](https://github.com/kitten))
- Drop the legacy Chrome debugger in favor of React Native DevTools. ([#32266](https://github.com/expo/expo/pull/32266) by [@byCedric](https://github.com/byCedric))
- Add temporary `/inspector/network` websocket endpoint, working around Fusebox limitations. ([#32292](https://github.com/expo/expo/pull/32292) by [@byCedric](https://github.com/byCedric))

### ⚠️ Notices

- Added support for React Native 0.76.x. ([#31552](https://github.com/expo/expo/pull/31552) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.18.29 - 2024-08-14

### 💡 Others

- Added `/expo-dev-plugins/broadcast` WebSocket endpoint in dev server to support devtools plugins. ([#30934](https://github.com/expo/expo/pull/30934) by [@kudo](https://github.com/kudo))

## 0.18.28 - 2024-08-08

_This version does not introduce any user-facing changes._

## 0.18.27 - 2024-08-07

### 🎉 New features

- Allow developers to indicate some range of a package that they do not care about validating against with `expo.install.exclude: ["package@version]` ([#30611](https://github.com/expo/expo/pull/30611) by [@brentvatne](https://github.com/brentvatne))

### 🐛 Bug fixes

- Fix server closing in headless run commands. ([#30432](https://github.com/expo/expo/pull/30432) by [@EvanBacon](https://github.com/EvanBacon))

## 0.18.26 - 2024-07-29

### 💡 Others

- Add `--config-cmd` option to `export:embed` command. ([#30563](https://github.com/expo/expo/pull/30563) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- Add addition Expo Router e2e tests. ([#29990](https://github.com/expo/expo/pull/29990) by [@marklawlor](https://github.com/marklawlor))
- Removed <SDK51 type tests. ([#29612](https://github.com/expo/expo/pull/29612) by [@marklawlor](https://github.com/marklawlor))

## 0.18.25 - 2024-07-11

_This version does not introduce any user-facing changes._

## 0.18.24 - 2024-07-11

### 🐛 Bug fixes

- Resolve real locations of file paths when using `eas build --local`. ([#30340](https://github.com/expo/expo/pull/30340) by [@byCedric](https://github.com/byCedric))

## 0.18.23 - 2024-07-11

### 🐛 Bug fixes

- Fix app crashing when hitting debugger breakpoint through VSCode. ([#30287](https://github.com/expo/expo/pull/30287) by [@byCedric](https://github.com/byCedric))

## 0.18.22 - 2024-07-03

### 📚 3rd party library updates

- Update @react-native/dev-middleware to 0.74.85. ([#30139](https://github.com/expo/expo/pull/30139) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.18.21 - 2024-06-28

_This version does not introduce any user-facing changes._

## 0.18.20 - 2024-06-27

### 🐛 Bug fixes

- Resolve module specifiers to posix paths for Metro. ([#29696](https://github.com/expo/expo/pull/29696) by [@byCedric](https://github.com/byCedric))
- Ensure Metro dev server closes fully when clients are connected. ([#30067](https://github.com/expo/expo/pull/30067) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Add more tests for export:embed. ([#29811](https://github.com/expo/expo/pull/29811) by [@EvanBacon](https://github.com/EvanBacon))

## 0.18.19 - 2024-06-13

_This version does not introduce any user-facing changes._

## 0.18.18 - 2024-06-12

_This version does not introduce any user-facing changes._

## 0.18.17 - 2024-06-10

### 🎉 New features

- Add experimental React Compiler support. ([#29168](https://github.com/expo/expo/pull/29168) by [@EvanBacon](https://github.com/EvanBacon))
- Support passing `--port 0` to use any free port. ([#29466](https://github.com/expo/expo/pull/29466) by [@EvanBacon](https://github.com/EvanBacon))
- Deep link to simulators without prompting for permissions first. ([#29468](https://github.com/expo/expo/pull/29468) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Fix source map generation in development. ([#29463](https://github.com/expo/expo/pull/29463) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Reduce export code paths. ([#29218](https://github.com/expo/expo/pull/29218) by [@EvanBacon](https://github.com/EvanBacon))
- Drop outdated React Native resolver patch. ([#29214](https://github.com/expo/expo/pull/29214) by [@EvanBacon](https://github.com/EvanBacon))
- Use Metro instance directly for server rendering. ([#28552](https://github.com/expo/expo/pull/28552) by [@EvanBacon](https://github.com/EvanBacon))

## 0.18.16 - 2024-06-06

_This version does not introduce any user-facing changes._

- Remove unused dependencies. ([#29177](https://github.com/expo/expo/pull/29177) by [@Simek](https://github.com/Simek))
- Do not replace modified scripts on prebuild. ([#29490](https://github.com/expo/expo/pull/29490) by [@Simek](https://github.com/Simek))

## 0.18.15 — 2024-06-05

### 🐛 Bug fixes

- Fixed broken React DevTools since SDK 51. ([#29181](https://github.com/expo/expo/pull/29181) by [@kudo](https://github.com/kudo))

### 💡 Others

- Pin @react-native subpackage versions to 0.74.83. ([#29441](https://github.com/expo/expo/pull/29441) by [@kudo](https://github.com/kudo))

## 0.18.14 — 2024-05-29

_This version does not introduce any user-facing changes._

## 0.18.13 — 2024-05-16

### 🐛 Bug fixes

- Resolve real path of entry file for `expo export:embed`. ([#28926](https://github.com/expo/expo/pull/28926) by [@byCedric](https://github.com/byCedric))
- Parse full tarball object instead of quoted string with `npm view` for `npm@10.8.0+`. ([#28919](https://github.com/expo/expo/pull/28919) by [@byCedric](https://github.com/byCedric))

## 0.18.12 — 2024-05-14

_This version does not introduce any user-facing changes._

## 0.18.11 — 2024-05-10

### 🐛 Bug fixes

- Force exit the export command to prevent hanging processes. ([#28735](https://github.com/expo/expo/pull/28735) by [@EvanBacon](https://github.com/EvanBacon))
- Fix HTTPS tunneling for accounts with dots in their username. ([#28692](https://github.com/expo/expo/pull/28692) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- Avoid `<root>/node_modules` as extraneous `watchFolder`. ([#28778](https://github.com/expo/expo/pull/28778) by [@byCedric](https://github.com/byCedric))
- Fix `findUp` utilities for Windows by aborting when `path.dirname(cwd)` returns `cwd`. ([#28801](https://github.com/expo/expo/pull/28801) by [@byCedric](https://github.com/byCedric))
- Fix missing usbmux platform for platform to os conversion. ([#28802](https://github.com/expo/expo/pull/28802) by [@byCedric](https://github.com/byCedric))
- Prevent exit the export command until Atlas is ready. ([#28759](https://github.com/expo/expo/pull/28759) by [@byCedric](https://github.com/byCedric))

## 0.18.10 — 2024-05-07

### 🐛 Bug fixes

- Filter out unavailable connected devices when running `npx expo run:ios -d`. ([#28642](https://github.com/expo/expo/pull/28642) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.18.9 — 2024-05-06

### 💡 Others

- Bump `experiments.reactCanary` to React 19 beta [commit](https://github.com/facebook/react/commit/4508873393058e86bed308b56e49ec883ece59d1). ([#28592](https://github.com/expo/expo/pull/28592) by [@EvanBacon](https://github.com/EvanBacon))

## 0.18.8 — 2024-05-02

_This version does not introduce any user-facing changes._

## 0.18.7 — 2024-04-29

### 🐛 Bug fixes

- Prevent overwriting exported Atlas data when exporting web with static renderer. ([#28502](https://github.com/expo/expo/pull/28502) by [@byCedric](https://github.com/byCedric))
- Improve login info message for other login options. ([#28523](https://github.com/expo/expo/pull/28523) by [@wschurman](https://github.com/wschurman))
- Filter out invalid architectures before passing `-PreactNativeArchitectures` to `gradle`. ([#28548](https://github.com/expo/expo/pull/28548) by [@alanjhughes](https://github.com/alanjhughes))

## 0.18.6 — 2024-04-26

### 🐛 Bug fixes

- Prevent duplicate watchman warnings. ([#28461](https://github.com/expo/expo/pull/28461) by [@EvanBacon](https://github.com/EvanBacon))

## 0.18.5 — 2024-04-25

### 🐛 Bug fixes

- Fix launching web from run:ios. ([#28439](https://github.com/expo/expo/pull/28439) by [@EvanBacon](https://github.com/EvanBacon))
- Symbolicate React component stacks in SSR. ([#28443](https://github.com/expo/expo/pull/28443) by [@EvanBacon](https://github.com/EvanBacon))
- Remove export exit that breaks atlas writing. ([#28438](https://github.com/expo/expo/pull/28438) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Disable macos builds for now. ([#28441](https://github.com/expo/expo/pull/28441) by [@EvanBacon](https://github.com/EvanBacon))

## 0.18.4 — 2024-04-24

### 🎉 New features

- Support building for macOS devices and visionOS simulators with `npx expo run:ios -d`. ([#28430](https://github.com/expo/expo/pull/28430) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Fix issue with installing OTA on iOS devices. ([#28406](https://github.com/expo/expo/pull/28406) by [@EvanBacon](https://github.com/EvanBacon))

## 0.18.3 — 2024-04-24

### 🎉 New features

- Add ability to install apps on OTA Apple devices with `expo run:ios -d`. ([#28402](https://github.com/expo/expo/pull/28402) by [@EvanBacon](https://github.com/EvanBacon))
- Add Expo Atlas support for both `expo start` and `expo export`. ([#27895](https://github.com/expo/expo/pull/27895) by [@byCedric](https://github.com/byCedric))

## 0.18.2 — 2024-04-22

_This version does not introduce any user-facing changes._

## 0.18.1 — 2024-04-19

### 🐛 Bug fixes

- Fixed `TypeError: osascript(...) is not a function` when pressing "j" to open JS debugger. ([#28315](https://github.com/expo/expo/pull/28315) by [@kudo](https://github.com/kudo))
- Fix API routes in folders starting with `.` characters. ([#28366](https://github.com/expo/expo/pull/28366) by [@byCedric](https://github.com/byCedric))
- Allow platform extensions for layout and route files ([#27408](https://github.com/expo/expo/pull/27408) by [@marklawlor](https://github.com/marklawlor))

## 0.18.0 — 2024-04-18

### 🎉 New features

- Add source map outputs when exporting API route bundles. ([#27913](https://github.com/expo/expo/pull/27913) by [@kitten](https://github.com/kitten))
- Add experimental support for using a canary build of the React Native renderer. ([#27303](https://github.com/expo/expo/pull/27303) by [@EvanBacon](https://github.com/EvanBacon))
- Add basic `react-server` support. ([#27264](https://github.com/expo/expo/pull/27264) by [@EvanBacon](https://github.com/EvanBacon))
- Add warnings when URI schemes cannot be resolved for dev client launches. ([#27241](https://github.com/expo/expo/pull/27241) by [@EvanBacon](https://github.com/EvanBacon))
- Add total files bundled to the bundling finished message. ([#27215](https://github.com/expo/expo/pull/27215) by [@EvanBacon](https://github.com/EvanBacon))
- Add better API Route error messages. ([#27024](https://github.com/expo/expo/pull/27024) by [@EvanBacon](https://github.com/EvanBacon))
- Prevent bundling production react modules in development. ([#27041](https://github.com/expo/expo/pull/27041) by [@EvanBacon](https://github.com/EvanBacon))
- Added building only for connected CPU architectures on Android when using the new architecture. ([#26800](https://github.com/expo/expo/pull/26800) by [@alanjhughes](https://github.com/alanjhughes))
- Add `expo lint` command to configure and run ESLint. ([#28104](https://github.com/expo/expo/pull/28104) by [@kadikraman](https://github.com/kadikraman), [@byCedric](https://github.com/byCedric))

### 🐛 Bug fixes

- Fix package exports resolution for `react-server` bundles. ([#28238](https://github.com/expo/expo/pull/28238) by [@EvanBacon](https://github.com/EvanBacon))
- Fix resolver race condition with new internal virtual modules patch in Metro. ([#28061](https://github.com/expo/expo/pull/28061) by [@EvanBacon](https://github.com/EvanBacon))
- Add missing nested Node.js externals. ([#28092](https://github.com/expo/expo/pull/28092) by [@EvanBacon](https://github.com/EvanBacon))
- Fix issue with fast resolver. ([#27686](https://github.com/expo/expo/pull/27686) by [@EvanBacon](https://github.com/EvanBacon))
- Fix using array syntax `(a,b)` with server output. ([#27462](https://github.com/expo/expo/pull/27462) by [@EvanBacon](https://github.com/EvanBacon))
- Prevent `console.log` statements from colliding with Metro logs. ([#27217](https://github.com/expo/expo/pull/27217) by [@EvanBacon](https://github.com/EvanBacon))
- Fix using dev server URL in development. ([#27213](https://github.com/expo/expo/pull/27213) by [@EvanBacon](https://github.com/EvanBacon))
- Always reset production bundler cache in run command. ([#27114](https://github.com/expo/expo/pull/27114) by [@EvanBacon](https://github.com/EvanBacon))
- Fix expo router src log memo. ([#27013](https://github.com/expo/expo/pull/27013) by [@EvanBacon](https://github.com/EvanBacon))
- Prevent run commands from hanging when the process completes. ([#26960](https://github.com/expo/expo/pull/26960) by [@EvanBacon](https://github.com/EvanBacon))
- Keep typed routes in-sync with current Expo Router version ([#26578](https://github.com/expo/expo/pull/26578) by [@marklawlor](https://github.com/marklawlor))
- Fix development codesigning certificate validity checks. ([#27361](https://github.com/expo/expo/pull/27361) by [@wschurman](https://github.com/wschurman))
- Included groups in Expo Router typed routes generation ([#27690](https://github.com/expo/expo/pull/27690) by [@marklawlor](https://github.com/marklawlor))
- Filter ADB trace logs when resolving Android devices. ([#27473](https://github.com/expo/expo/pull/27473) by [@byCedric](https://github.com/byCedric))
- Use correct script src path when exporting web development builds. ([#27946](https://github.com/expo/expo/pull/27946) by [@byCedric](https://github.com/byCedric))
- Rename templates post-extraction avoiding corrupting binary files. ([#27212](https://github.com/expo/expo/pull/27212) by [@shirakaba](https://github.com/shirakaba))
- Fix non-standard `error.code` check for Deno support. ([#27822](https://github.com/expo/expo/pull/27822) by [@littledivy](https://github.com/littledivy))

### 💡 Others

- Add unstable environment variable to disable bundle splitting. ([#27932](https://github.com/expo/expo/pull/27932) by [@EvanBacon](https://github.com/EvanBacon))
- Rename `experiments.serverComponents` to `experiments.reactCanary`. ([#27303]( ([#27923](https://github.com/expo/expo/pull/27923) by [@EvanBacon](https://github.com/EvanBacon))
- Change server log tag. ([#26834](https://github.com/expo/expo/pull/26834) by [@EvanBacon](https://github.com/EvanBacon))
- Eagerly perform iOS system checks to speed up iOS simulator launches. ([#26746](https://github.com/expo/expo/pull/26746) by [@EvanBacon](https://github.com/EvanBacon))
- Enable lazy modules with swc when building `@expo/cli`. ([#27061](https://github.com/expo/expo/pull/27061) by [@byCedric](https://github.com/byCedric))
- Update to remove `ExpoRequest/ExpoResponse` imports from `@expo/server`. ([#27261](https://github.com/expo/expo/pull/27261) by [@kitten](https://github.com/kitten))
- Update the legacy inspector overrides to new device middleware API. ([#27425](https://github.com/expo/expo/pull/27425) by [@byCedric](https://github.com/byCedric))
- Add new telemetry API to replace legacy analytics. ([#27787](https://github.com/expo/expo/pull/27787) by [@byCedric](https://github.com/byCedric))
- Skip building and packing `__typetests__` files. ([#27089](https://github.com/expo/expo/pull/27089) by [@byCedric](https://github.com/byCedric))
- Update unversioned expo config types. ([#28220](https://github.com/expo/expo/pull/28220) by [@wschurman](https://github.com/wschurman))

### 📚 3rd party library updates

- update `semver` from 7.5.3 to 7.5.4. ([#26876](https://github.com/expo/expo/pull/26876) by [@GaelCO](https://github.com/GaelCO))
- update `cacache` from 15.3.0 to 18.0.2. ([#28322](https://github.com/expo/expo/pull/28322) by [@Simek](https://github.com/Simek))

## 0.17.8 - 2024-03-13

### 🐛 Bug fixes

- Filter extra avd info when listing emulators. ([#27497](https://github.com/expo/expo/pull/27497) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.17.7 - 2024-03-07

_This version does not introduce any user-facing changes._

## 0.17.6 - 2024-02-27

### 🎉 New features

- Add `--no-bytecode` flag to `expo export` to disable generating Hermes bytecode for use with debugging tools. ([#26985](https://github.com/expo/expo/pull/26985) by [@EvanBacon](https://github.com/EvanBacon))

## 0.17.5 - 2024-02-06

### 🎉 New features

- Add stack traces for warnings and errors that originate from API routes or server rendering. ([#26812](https://github.com/expo/expo/pull/26812) by [@EvanBacon](https://github.com/EvanBacon))
- Add HTTPS support for using tunnels with ngrok. ([#26838](https://github.com/expo/expo/pull/26838) by [@gabrieldonadel](https://github.com/gabrieldonadel))

### 🐛 Bug fixes

- Mark compressed `.gz` files as binary to avoid corruption when unpacking with `expo prebuild --template`. ([#26741](https://github.com/expo/expo/pull/26741) by [@shirakaba](https://github.com/shirakaba))

### 💡 Others

- Filter URL files out of stacks in Node logs. ([#26868](https://github.com/expo/expo/pull/26868) by [@EvanBacon](https://github.com/EvanBacon))

## 0.17.4 - 2024-02-01

### 🎉 New features

- Add better error when `metro.config.js` does not extend `expo/metro-config`. ([#26726](https://github.com/expo/expo/pull/26726) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Add better validation for Metro web when exporting production bundles. ([#26732](https://github.com/expo/expo/pull/26732) by [@EvanBacon](https://github.com/EvanBacon))
- Fix `tsconfig.json` resolution of `baseUrl` when `paths` is not defined. ([#26734](https://github.com/expo/expo/pull/26734) by [@EvanBacon](https://github.com/EvanBacon))
- Fix progress bar locking in at `100%` when bundling app. ([#26775](https://github.com/expo/expo/pull/26775) by [@byCedric](https://github.com/byCedric))

## 0.17.3 - 2024-01-26

### 🐛 Bug fixes

- [Android] correct drawable types in updates embedded manifest. ([#26676](https://github.com/expo/expo/pull/26676) by [@douglowder](https://github.com/douglowder))

## 0.17.2 - 2024-01-23

### 🎉 New features

- Add support for GitHub URLs in `expo prebuild --template`. ([#26631](https://github.com/expo/expo/pull/26631) by [@byCedric](https://github.com/byCedric))

### 🐛 Bug fixes

- Fix stack traces for Node.js errors. ([#26607](https://github.com/expo/expo/pull/26607) by [@EvanBacon](https://github.com/EvanBacon))
- Fixed crash when launching React DevTools. ([#26550](https://github.com/expo/expo/pull/26550) by [@kudo](https://github.com/kudo))
- Only show "Web is waiting" message after project is initialized with web. ([#26694](https://github.com/expo/expo/pull/26694) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Improve warning for favicon missing during web export. ([#26733](https://github.com/expo/expo/pull/26733) by [@EvanBacon](https://github.com/EvanBacon))

## 0.17.1 - 2024-01-18

_This version does not introduce any user-facing changes._

## 0.17.0 - 2024-01-18

### 🎉 New features

- Update `expo customize` to show `public` instead of `web` when Metro web is used. ([#26473](https://github.com/expo/expo/pull/26473) by [@EvanBacon](https://github.com/EvanBacon))
- Supported extra CORS requests to dev-server from the expo-router's `origin` and `headOrigin` settings. ([#26463](https://github.com/expo/expo/pull/26463) by [@kudo](https://github.com/kudo))

### 🐛 Bug fixes

- Default `web.bundler` to `metro` if missing and/or `@expo/webpack-config` is not installed ([#26452](https://github.com/expo/expo/pull/26452) by [@marklawlor](https://github.com/marklawlor))
- When repeated, later boolean arguments on `export:embed`, `run android`, and `run ios` should take precedence ([#26471](https://github.com/expo/expo/pull/26471) by [@kitten](https://github.com/kitten))

### 💡 Others

- Hide the deprecated `export:web` command from the general help output. ([#26480](https://github.com/expo/expo/pull/26480) by [@EvanBacon](https://github.com/EvanBacon))
- Move `@expo/server` to be a dependency of `expo-router`. ([#25937](https://github.com/expo/expo/pull/25937) by [@EvanBacon](https://github.com/EvanBacon))
- Remove classic updates SDK version. ([#26061](https://github.com/expo/expo/pull/26061) by [@wschurman](https://github.com/wschurman))
- Added `templateChecksum` for prebuild to check the current template version. ([#26414](https://github.com/expo/expo/pull/26414) by [@kudo](https://github.com/kudo))
- Clean up manual package install command ([#26457](https://github.com/expo/expo/pull/26457) by [@marklawlor](https://github.com/marklawlor))

## 0.16.8 - 2024-01-15

### 🐛 Bug fixes

- Add default user to Android adb install command. ([#26388](https://github.com/expo/expo/pull/26388) by [@EvanBacon](https://github.com/EvanBacon))

## 0.16.7 - 2024-01-10

### 💡 Others

- Fix metro asset call in expo-updates embedded manifest creation step. ([#26307](https://github.com/expo/expo/pull/26307) by [@wschurman](https://github.com/wschurman))

## 0.16.6 - 2024-01-05

### 🐛 Bug fixes

- Update import for type generation. ([#26145](https://github.com/expo/expo/pull/26145) by [@EvanBacon](https://github.com/EvanBacon))
- Handle locked iOS devices when launching app through devicectl. ([#26203](https://github.com/expo/expo/pull/26203) by [@byCedric](https://github.com/byCedric))

## 0.16.5 - 2023-12-21

### 🐛 Bug fixes

- Import `ExpoConfig` from direct dependency `@expo/config`. ([#25989](https://github.com/expo/expo/pull/25989) by [@byCedric](https://github.com/byCedric))

## 0.16.4 - 2023-12-19

### 🎉 New features

- Update `run:ios` build warning formatting for SDK 50. ([#25978](https://github.com/expo/expo/pull/25978) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Add missing `@expo/image-utils` dependency. ([#25990](https://github.com/expo/expo/pull/25990) by [@byCedric](https://github.com/byCedric))
- Add missing `find-yarn-workspace-root` dependency. ([#25991](https://github.com/expo/expo/pull/25991) by [@byCedric](https://github.com/byCedric))
- Add missing `lodash.debounce` dependency. ([#25990](https://github.com/expo/expo/pull/25990) by [@byCedric](https://github.com/byCedric))
- Add missing `@react-native/dev-middleware` dependency. ([#26000](https://github.com/expo/expo/pull/26000) by [@byCedric](https://github.com/byCedric))
- Warn users if they are using an incorrect `web.output` with API Routes. ([#25931](https://github.com/expo/expo/pull/25931) by [@marklawlor](https://github.com/marklawlor))

## 0.16.3 — 2023-12-15

### 🐛 Bug fixes

- Invalidate API Route cache whenever any file in the repo changes. ([#25936](https://github.com/expo/expo/pull/25936) by [@EvanBacon](https://github.com/EvanBacon))

## 0.16.2 — 2023-12-14

_This version does not introduce any user-facing changes._

## 0.16.1 — 2023-12-12

### 🐛 Bug fixes

- Add back legacy inspector js middleware for dev menu. ([#25881](https://github.com/expo/expo/pull/25881) by [@byCedric](https://github.com/byCedric))

## 0.16.0 — 2023-12-12

### 🛠 Breaking changes

- `tsconfig.json` attribute `baseUrl` will no longer default to enabled when `paths` are defined. ([#25510](https://github.com/expo/expo/pull/25510) by [@EvanBacon](https://github.com/EvanBacon))
- `tsconfig.json` attribute `baseUrl` will now be resolved _before_ node modules instead of after. ([#25510](https://github.com/expo/expo/pull/25510) by [@EvanBacon](https://github.com/EvanBacon))
- `tsconfig.json` attribute `baseUrl` will no longer be resolved if a group from `paths` are matched first. ([#25510](https://github.com/expo/expo/pull/25510) by [@EvanBacon](https://github.com/EvanBacon))
- Change default CSS reset in template HTML to align with `react-native-web@0.19.8`. ([#25429](https://github.com/expo/expo/pull/25429) by [@EvanBacon](https://github.com/EvanBacon))

### 🎉 New features

- Add bundle splitting to Expo Router for web platforms. ([#25627](https://github.com/expo/expo/pull/25627) by [@EvanBacon](https://github.com/EvanBacon))
- Add custom Expo Router root directory support with full cache invalidation on server reset. ([#25658](https://github.com/expo/expo/pull/25658) by [@EvanBacon](https://github.com/EvanBacon))
- Add filenames to metro logs when finished. ([#25575](https://github.com/expo/expo/pull/25575) by [@EvanBacon](https://github.com/EvanBacon))
- Alias `react-native-vector-icons` to `@expo/vector-icons` in the Metro resolver. ([#25512](https://github.com/expo/expo/pull/25512) by [@EvanBacon](https://github.com/EvanBacon))
- Ensure invalid production iOS builds fail more predictably. ([#25410](https://github.com/expo/expo/pull/25410) by [@EvanBacon](https://github.com/EvanBacon))
- Add first-class Xcode IDE hints for Metro bundling errors during production iOS builds from Xcode. ([#25410](https://github.com/expo/expo/pull/25410) by [@EvanBacon](https://github.com/EvanBacon))
- Added support for React Native 0.73.0. ([#24971](https://github.com/expo/expo/pull/24971), [#25453](https://github.com/expo/expo/pull/25453) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- Re-implement debugging tools with new React Native JS Inspector. ([#25649](https://github.com/expo/expo/pull/25649) by [@byCedric](https://github.com/byCedric))
- Add `expo run` command to select platform to run. ([#23514](https://github.com/expo/expo/pull/23514) by [@byCedric](https://github.com/byCedric))
- Add `EXPO_USE_UNSTABLE_DEBUGGER` to open new React Native JS Inspector. ([#25671](https://github.com/expo/expo/pull/25671) by [@byCedric](https://github.com/byCedric))

### 🐛 Bug fixes

- Remove extraneous metro config reads. ([#25861](https://github.com/expo/expo/pull/25861) by [@EvanBacon](https://github.com/EvanBacon))
- Fix common chunks with cyclic dependencies being linked in async routes. ([#25831](https://github.com/expo/expo/pull/25831) by [@EvanBacon](https://github.com/EvanBacon))
- Fix `--max-workers` flag in `npx expo export`. ([#25710](https://github.com/expo/expo/pull/25710) by [@EvanBacon](https://github.com/EvanBacon))
- Fix test resolver for SDK 50. ([#25473](https://github.com/expo/expo/pull/25473) by [@EvanBacon](https://github.com/EvanBacon))
- Prevent log-spew when running prebuild in debug mode. ([#25434](https://github.com/expo/expo/pull/25434) by [@EvanBacon](https://github.com/EvanBacon))
- Fix @react-native/dev-middleware types for react-native 0.73. ([#25513](https://github.com/expo/expo/pull/25513) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- Only use `bundledNativeModules.json` for dependencies validation when using canary versions. ([#25600](https://github.com/expo/expo/pull/25600) by [@byCedric](https://github.com/byCedric))
- Remove the 404 route from typed routes ([#24496](https://github.com/expo/expo/pull/24496) by [@marklawlor](https://github.com/marklawlor))
- Exclude `+not-found` and `*+api` routes from typed routes ([#24496](https://github.com/expo/expo/pull/24496) by [@marklawlor](https://github.com/marklawlor))
- Fix Expo Router typed routes error with external URLs ([#25591](https://github.com/expo/expo/pull/25591) by [@marklawlor](https://github.com/marklawlor))
- Fix permission issue when user doesn't have permission to view app. ([#25650](https://github.com/expo/expo/pull/25650) by [@wschurman](https://github.com/wschurman))

### 💡 Others

- Export generated expo router type. ([#24999](https://github.com/expo/expo/pull/24999) by [@hichemfantar](https://github.com/hichemfantar))
- Prevent showing log events for source maps in development. ([#25830](https://github.com/expo/expo/pull/25830) by [@EvanBacon](https://github.com/EvanBacon))
- Remove unused Metro `extraNodeModules` augmentation for web resolution in favor of standard aliases. ([#25506](https://github.com/expo/expo/pull/25506) by [@EvanBacon](https://github.com/EvanBacon))
- Consolidate logic for resolving Node.js built-in shims in browser environments. ([#25511](https://github.com/expo/expo/pull/25511) by [@EvanBacon](https://github.com/EvanBacon))
- Ensure we disable lazy bundling when exporting. ([#25436](https://github.com/expo/expo/pull/25436) by [@EvanBacon](https://github.com/EvanBacon))
- Split web server output into `server/` and `client/` subfolders when exporting. ([#25640](https://github.com/expo/expo/pull/25640) by [@kitten](https://github.com/kitten))
- asMock -> jest.mocked. ([#25685](https://github.com/expo/expo/pull/25685) by [@wschurman](https://github.com/wschurman))

## 0.10.16 — 2023-11-24

### 🐛 Bug fixes

- Prevent additional logs from showing in `expo config --json`. ([#24192](https://github.com/expo/expo/pull/24192) by [@EvanBacon](https://github.com/EvanBacon))

## 0.15.0 — 2023-11-14

### 🛠 Breaking changes

- `npx expo prebuild` will only install Node dependencies if the `dependencies` have changed. ([#25211](https://github.com/expo/expo/pull/25211) by [@EvanBacon](https://github.com/EvanBacon))
- `npx expo prebuild` will no longer modify `devDependencies` of the `package.json`. ([#25211](https://github.com/expo/expo/pull/25211) by [@EvanBacon](https://github.com/EvanBacon))

### 🎉 New features

- Use multi-bundle output serializer for all exports. ([#25369](https://github.com/expo/expo/pull/25369) by [@EvanBacon](https://github.com/EvanBacon))
- Rename `basePath` to `baseUrl` and expose to bundles with `process.env.EXPO_BASE_URL`. ([#25305](https://github.com/expo/expo/pull/25305) by [@EvanBacon](https://github.com/EvanBacon))
- Rename `--dump-sourcemap` to `--source-maps` with `-s` alias in `expo export`. ([#25303](https://github.com/expo/expo/pull/25303) by [@EvanBacon](https://github.com/EvanBacon))
- Bundle static websites +2x faster. ([#25312](https://github.com/expo/expo/pull/25312) by [@EvanBacon](https://github.com/EvanBacon))
- Add package exports, and blocklist support to fast resolver. ([#25260](https://github.com/expo/expo/pull/25260) by [@EvanBacon](https://github.com/EvanBacon))
- Move environment variables production inlining to `babel-preset-expo` to support source maps. ([#25239](https://github.com/expo/expo/pull/25239) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for chaining the Metro resolver locally. ([#25148](https://github.com/expo/expo/pull/25148) by [@EvanBacon](https://github.com/EvanBacon))
- Pass engine to transformer for production bundling. ([#25175](https://github.com/expo/expo/pull/25175) by [@EvanBacon](https://github.com/EvanBacon))
- Skip extraneous minification when exporting for hermes engine. ([#25132](https://github.com/expo/expo/pull/25132) by [@EvanBacon](https://github.com/EvanBacon))
- Enable package exports for server bundling. ([#24937](https://github.com/expo/expo/pull/24937) by [@EvanBacon](https://github.com/EvanBacon))
- Include static routes from `generateStaticParams` in server manifest. ([#25003](https://github.com/expo/expo/pull/25003) by [@EvanBacon](https://github.com/EvanBacon))
- Added Expo CLI devtools plugins support. ([#24650](https://github.com/expo/expo/pull/24650) by [@kudo](https://github.com/kudo))
- Optionally export only selected assets. ([#25065](https://github.com/expo/expo/pull/25065) by [@douglowder](https://github.com/douglowder))
- Added Brave Browser debugger support. ([#25109](https://github.com/expo/expo/pull/25109) by [@kapobajza](https://github.com/kapobajza))

### 🐛 Bug fixes

- Disable bundle splitting on native platforms. ([#25366](https://github.com/expo/expo/pull/25366) by [@EvanBacon](https://github.com/EvanBacon))
- Ensure cache can be cleared with static web exports. ([#25335](https://github.com/expo/expo/pull/25335) by [@EvanBacon](https://github.com/EvanBacon))
- Fix server-rendering errors. ([#25247](https://github.com/expo/expo/pull/25247) by [@EvanBacon](https://github.com/EvanBacon))
- Fix native polyfill import. ([#25203](https://github.com/expo/expo/pull/25203) by [@EvanBacon](https://github.com/EvanBacon))
- Fix API Routes not updating in `src/app` directory. ([#24968](https://github.com/expo/expo/pull/24968) by [@EvanBacon](https://github.com/EvanBacon))
- Prevent `npx expo export` and `npx expo export:embed` from hanging with file watchers. ([#24952](https://github.com/expo/expo/pull/24952) by [@EvanBacon](https://github.com/EvanBacon))
- Prevent `Runtime.callFunctionOn` messages from Vscode debugger to avoid Hermes crashes. ([#25270](https://github.com/expo/expo/pull/25270) by [@byCedric](https://github.com/byCedric))
- Handle command input errors better. ([#25329](https://github.com/expo/expo/pull/25329) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Add E2E Tailwind tests. ([#25339](https://github.com/expo/expo/pull/25339) by [@EvanBacon](https://github.com/EvanBacon))
- Collapse re-export of `react-native/Libraries/Image/AssetRegistry` to `@react-native/assets-registry/registry`. ([#25265](https://github.com/expo/expo/pull/25265) by [@EvanBacon](https://github.com/EvanBacon))
- Refactor html serializer. ([#25304](https://github.com/expo/expo/pull/25304) by [@EvanBacon](https://github.com/EvanBacon))
- Fix prebuild messages. ([#25279](https://github.com/expo/expo/pull/25279) by [@EvanBacon](https://github.com/EvanBacon))
- Pull in source for Metro asset persisting for iOS and Android. ([#25278](https://github.com/expo/expo/pull/25278) by [@EvanBacon](https://github.com/EvanBacon))
- Add more types. ([#25245](https://github.com/expo/expo/pull/25245) by [@EvanBacon](https://github.com/EvanBacon))
- Unify Metro config functions. ([#25257](https://github.com/expo/expo/pull/25257) by [@EvanBacon](https://github.com/EvanBacon))
- Fix tests running in CI. ([#25244](https://github.com/expo/expo/pull/25244) by [@EvanBacon](https://github.com/EvanBacon))
- Drop support for running arbitrary Metro packages. ([#25197](https://github.com/expo/expo/pull/25197) by [@EvanBacon](https://github.com/EvanBacon))
- Update tests. ([#25089](https://github.com/expo/expo/pull/25089) by [@EvanBacon](https://github.com/EvanBacon))
- Memoize notice log about `src/app` directory to prevent spam. ([#25000](https://github.com/expo/expo/pull/25000) by [@EvanBacon](https://github.com/EvanBacon))
- Link to [upgrading sdk docs](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/) instead of `expo-cli` when the `upgrade` subcommand is used. ([#25168](https://github.com/expo/expo/pull/25168) by [@alanjhughes](https://github.com/alanjhughes))
- Improve DevTools Plugins API. ([#25167](https://github.com/expo/expo/pull/25167) by [@kudo](https://github.com/kudo))

## 0.10.14 — 2023-10-20

### 💡 Others

- Add `expo customize tsconfig.json` command. ([#23642](https://github.com/expo/expo/pull/23642) by [@marklawlor](https://github.com/marklawlor))

## 0.14.0 — 2023-10-17

### 🛠 Breaking changes

- Enable `tsconfigPaths` by default flag ([#24490](https://github.com/expo/expo/pull/24490) by [@marklawlor](https://github.com/marklawlor))

### 🎉 New features

- Add `file` to server manifest to support mjs/cjs API Routes. ([#24739](https://github.com/expo/expo/pull/24739) by [@EvanBacon](https://github.com/EvanBacon))
- Add new `+not-found` convention for 404s. ([#24528](https://github.com/expo/expo/pull/24528) by [@EvanBacon](https://github.com/EvanBacon))
- Automatically optimize transformations based on Hermes usage. ([#24672](https://github.com/expo/expo/pull/24672) by [@EvanBacon](https://github.com/EvanBacon))
- Shim `react-native-web` BackHandler to remove excessive error message. ([#24726](https://github.com/expo/expo/pull/24726) by [@EvanBacon](https://github.com/EvanBacon))
- `npx expo install --check|fix` now checks for and fixes an out-of-date `expo` package patch release ([#24142](https://github.com/expo/expo/pull/24142) by [@keith-kurak](https://github.com/keith-kurak))

### 🐛 Bug fixes

- Fix app directory resolution. ([#24738](https://github.com/expo/expo/pull/24738) by [@EvanBacon](https://github.com/EvanBacon))
- Skip generating Hermes sourcemaps when `--dump-sourcemap` is not provided. ([#24689](https://github.com/expo/expo/pull/24689) by [@EvanBacon](https://github.com/EvanBacon))
- Resolve browser shims with mismatched extensions. ([#24671](https://github.com/expo/expo/pull/24671) by [@EvanBacon](https://github.com/EvanBacon))
- Ensure a unique static path is generated for each group during static extraction ([#24218](https://github.com/expo/expo/pull/24218) by [@marklawlor](https://github.com/marklawlor))
- Fallback to `xcrun devicectl` for iOS 17 to launch the app. ([#24635](https://github.com/expo/expo/pull/24635) by [@byCedric](https://github.com/byCedric))
- Support installing fixed versions of packages that have an SDK compatible version (apart from React and React Native). ([#24642](https://github.com/expo/expo/pull/24642) by [@kadikraman](https://github.com/kadikraman))

### 💡 Others

- Update doc blocks for Expo Router type generation. ([#24797](https://github.com/expo/expo/pull/24797) by [@EvanBacon](https://github.com/EvanBacon))
- Drop warning for tsconfigPaths. ([#24686](https://github.com/expo/expo/pull/24686) by [@EvanBacon](https://github.com/EvanBacon))
- Add tests for `baseUrl` with new resolver. ([#24673](https://github.com/expo/expo/pull/24673) by [@EvanBacon](https://github.com/EvanBacon))
- Transpile for Node 18 (LTS). ([#24471](https://github.com/expo/expo/pull/24471) by [@EvanBacon](https://github.com/EvanBacon))
- Improve truncated Metro Node.js errors. ([#24546](https://github.com/expo/expo/pull/24546) by [@EvanBacon](https://github.com/EvanBacon))
- Skip extraneous static HTML export in server mode. ([#24529](https://github.com/expo/expo/pull/24529) by [@EvanBacon](https://github.com/EvanBacon))
- Fully drop support for `expo.entryFile` in the `app.json`. ([#24688](https://github.com/expo/expo/pull/24688) by [@EvanBacon](https://github.com/EvanBacon))
- Remove `isCSSEnabled` flag from e2e tests ([#24489](https://github.com/expo/expo/pull/24489) by [@marklawlor](https://github.com/marklawlor))
- Use Metro and web TypeScript types from `expo` instead of `expo-router`. ([#24255](https://github.com/expo/expo/pull/24255) by [@marklawlor](https://github.com/marklawlor))
- Speed up Metro tests with new resolver. ([#24616](https://github.com/expo/expo/pull/24616) by [@EvanBacon](https://github.com/EvanBacon))
- Skip loading the telemetry client when disabled. ([#24841](https://github.com/expo/expo/pull/24841) by [@byCedric](https://github.com/byCedric))

## 0.10.13 — 2023-09-27

### 🐛 Bug fixes

- Fallback to `xcrun devicectl` for iOS 17 to launch the app. ([#24635](https://github.com/expo/expo/pull/24635) by [@byCedric](https://github.com/byCedric))

## 0.13.2 — 2023-09-18

### 🐛 Bug fixes

- Fix SPA web mode in Expo Router. ([#24472](https://github.com/expo/expo/pull/24472) by [@EvanBacon](https://github.com/EvanBacon))

## 0.13.1 — 2023-09-15

_This version does not introduce any user-facing changes._

## 0.13.0 — 2023-09-15

### 🛠 Breaking changes

- Drop `/logs` and remove `@expo/dev-server` package. ([#24272](https://github.com/expo/expo/pull/24272) by [@EvanBacon](https://github.com/EvanBacon))

### 🎉 New features

- Add experimental API Routes for Expo Router v3. ([#24429](https://github.com/expo/expo/pull/24429) by [@EvanBacon](https://github.com/EvanBacon))
- Support mocking Node.js externals for client-side bundles. ([#24453](https://github.com/expo/expo/pull/24453) by [@EvanBacon](https://github.com/EvanBacon))
- Add additional port check after build to ensure port is still available. ([#24315](https://github.com/expo/expo/pull/24315) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for bun as a package manager. ([#24344](https://github.com/expo/expo/pull/24344) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Upgrade `minipass@3.3.6` to use built-in types. ([#24402](https://github.com/expo/expo/pull/24402) by [@byCedric](https://github.com/byCedric))
- Pin `tar@6.1.13` to avoid `minipass` compatibility issues. ([#24402](https://github.com/expo/expo/pull/24402) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Move `process.env` polyfill strip to `expo/metro-config`. ([#24455](https://github.com/expo/expo/pull/24455) by [@EvanBacon](https://github.com/EvanBacon))
- Refactor e2e tests. ([#24385](https://github.com/expo/expo/pull/24385) by [@EvanBacon](https://github.com/EvanBacon))
- Forward the project root path to `getRuntimeVersionAsync` and `getRuntimeVersionNullableAsync`. ([#24126](https://github.com/expo/expo/pull/24126) by [@mccraveiro](https://github.com/mccraveiro))

## 0.10.12 — 2023-09-11

### 🎉 New features

- Add support for bun as a package manager. ([#24344](https://github.com/expo/expo/pull/24344) by [@EvanBacon](https://github.com/EvanBacon))
- Add additional port check after build to ensure port is still available. ([#24315](https://github.com/expo/expo/pull/24315) by [@EvanBacon](https://github.com/EvanBacon))

## 0.12.0 — 2023-09-04

### 🛠 Breaking changes

- Bump minimum required Xcode version. ([#24205](https://github.com/expo/expo/pull/24205) by [@EvanBacon](https://github.com/EvanBacon))
- Favor remote versions endpoint over bundled versions for version validation in `expo install`, `start`, `prebuild`. ([#24162](https://github.com/expo/expo/pull/24162) by [@EvanBacon](https://github.com/EvanBacon))
- Remove classic manifest types and classic updates. ([#24054](https://github.com/expo/expo/pull/24054), [#24066](https://github.com/expo/expo/pull/24066) by [@wschurman](https://github.com/wschurman))

### 🎉 New features

- Add `basePath` support for `npx expo export`. ([#23911](https://github.com/expo/expo/pull/23911) by [@EvanBacon](https://github.com/EvanBacon))
- Add source map support with static Metro web exports. ([#24213](https://github.com/expo/expo/pull/24213) by [@EvanBacon](https://github.com/EvanBacon))
- Validate android package name ahead of time. ([#24194](https://github.com/expo/expo/pull/24194) by [@EvanBacon](https://github.com/EvanBacon))
- Improve the Xcode setup instructions. ([#24191](https://github.com/expo/expo/pull/24191) by [@EvanBacon](https://github.com/EvanBacon))
- Add Ngrok status page to ngrok error message. ([#24188](https://github.com/expo/expo/pull/24188) by [@EvanBacon](https://github.com/EvanBacon))
- Support monorepo assets with `npx expo export:embed`. ([#24095](https://github.com/expo/expo/pull/24095) by [@EvanBacon](https://github.com/EvanBacon))
- Forward exact Metro server error during static rendering. ([#23909](https://github.com/expo/expo/pull/23909) by [@EvanBacon](https://github.com/EvanBacon))
- Add **Server** tag when bundling for server environments. ([#23987](https://github.com/expo/expo/pull/23987) by [@EvanBacon](https://github.com/EvanBacon))
- Support importing assets from out of the project root when working in monorepos on web. ([#24090](https://github.com/expo/expo/pull/24090) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Prevent additional logs from showing in `expo config --json`. ([#24192](https://github.com/expo/expo/pull/24192) by [@EvanBacon](https://github.com/EvanBacon))
- Patch `react-native-web` for static rendering with Expo Router. ([#24093](https://github.com/expo/expo/pull/24093) by [@EvanBacon](https://github.com/EvanBacon))
- Improve file formatting when `EXPO_USE_METRO_WORKSPACE_ROOT` is used. ([#23910](https://github.com/expo/expo/pull/23910) by [@EvanBacon](https://github.com/EvanBacon))
- Fix bug preventing non-standard xcode projects from running with `npx expo run:ios`. ([#23831](https://github.com/expo/expo/pull/23831) by [@EvanBacon](https://github.com/EvanBacon))
- Fix `EXPO_SKIP_MANIFEST_VALIDATION_TOKEN` usage. ([#23890](https://github.com/expo/expo/pull/23890) by [@EvanBacon](https://github.com/EvanBacon))
- Prohibit dev client URLs containing `_` in protocol. ([#23519](https://github.com/expo/expo/pull/23519) by [@byCedric](https://github.com/byCedric))
- Prevent writing unused bundles with static Metro web. ([#24092](https://github.com/expo/expo/pull/24092) by [@EvanBacon](https://github.com/EvanBacon))
- Add missing dependencies to `@expo/cli`. ([#22941](https://github.com/expo/expo/pull/24092) by [@byCedric](https://github.com/byCedric))
- Fix webpack dev server reload socket command. ([#24208](https://github.com/expo/expo/pull/24208) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Remove unused `md5-file` library. ([#24090](https://github.com/expo/expo/pull/24090) by [@EvanBacon](https://github.com/EvanBacon))
- Remove unused `--generate-static-view-configs` flag from `npx expo export:embed`. ([#24095](https://github.com/expo/expo/pull/24095) by [@EvanBacon](https://github.com/EvanBacon))
- Fix types and CI. ([#24051](https://github.com/expo/expo/pull/24051) by [@EvanBacon](https://github.com/EvanBacon))
- Update Expo Router tests. ([#23795](https://github.com/expo/expo/pull/23795) by [@EvanBacon](https://github.com/EvanBacon))
- The autogenerated TypeScript declarations for Expo Router now use trailing commas in generic type parameter lists, in alignment with Prettier v3 ([#23544](https://github.com/expo/expo/pull/23544) by [@ide](https://github.com/ide))
- Fix lint. ([#23960](https://github.com/expo/expo/pull/23960) by [@EvanBacon](https://github.com/EvanBacon))
- Enable static router tests. ([#23988](https://github.com/expo/expo/pull/23988) by [@EvanBacon](https://github.com/EvanBacon))
- Reduce Metro bundles during `expo export` for Metro static web. ([#23987](https://github.com/expo/expo/pull/23987) by [@EvanBacon](https://github.com/EvanBacon))
- Adjust build message when running prebuild to only output the directories that are actually being created. ([#24153](https://github.com/expo/expo/pull/24153) by [@alanhughes](https://github.com/alanjhughes))
- Extend `Android` package name validation to disallow the `Java` keyword `native`. ([#24155](https://github.com/expo/expo/pull/24155) by [@alanjhughes](https://github.com/alanjhughes))

## 0.11.1 — 2023-08-02

### 🛠 Breaking changes

- Drop support for sending `logUrl` in manifests (unimplemented feature from `expo-cli`). ([#18596](https://github.com/expo/expo/pull/18596) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for `.mjs` extensions in Expo Metro. ([#23528](https://github.com/expo/expo/pull/23528) by [@EvanBacon](https://github.com/EvanBacon))

### 🎉 New features

- Always apply custom Metro resolver in Expo CLI. ([#23784](https://github.com/expo/expo/pull/23784) by [@EvanBacon](https://github.com/EvanBacon))

## 0.11.0 — 2023-07-28

- Fixed typo in connection message when opening React DevTools ([#23672](https://github.com/expo/expo/pull/23672) by [@frankcalise](https://github.com/frankcalise))

### 🎉 New features

- Add inverse dependency stack to Metro resolution errors. ([#23551](https://github.com/expo/expo/pull/23551) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Fixed opening browser on Windows when debugging or opening Metro web. ([#23287](https://github.com/expo/expo/pull/23287) by [@byCedric](https://github.com/byCedric))
- Fixed JavaScript Inspector does not work on Windows. ([#23367](https://github.com/expo/expo/pull/23367) by [@kudo](https://github.com/kudo))
- Fixed route types generation on Windows not working. ([#23386](https://github.com/expo/expo/pull/23386) by [@gsporto](https://github.com/gsporto) and [@marklawlor](https://github.com/marklawlor))
- Added additional guard to prevent invalid route files type generation. ([#23694](https://github.com/expo/expo/pull/23694) by [@marklawlor](https://github.com/marklawlor))

### 💡 Others

- Fix Metro externals test. ([#23741](https://github.com/expo/expo/pull/23741) by [@EvanBacon](https://github.com/EvanBacon))

## 0.10.11 - 2023-07-21

### 🎉 New features

- Add support for SSO users. ([#22945](https://github.com/expo/expo/pull/22945) by [@lzkb](https://github.com/lzkb))
- Use node server default port selection for SSO login server. ([#23505](https://github.com/expo/expo/pull/23505) by [@wschurman](https://github.com/wschurman))
- Add styling to SSO auth redirect completion page. ([#23477](https://github.com/expo/expo/pull/23477) by [@wschurman](https://github.com/wschurman))
- Allow multiple `--platform` flags in `expo export`. ([#23621](https://github.com/expo/expo/pull/23621) by [@byCedric](https://github.com/byCedric))

### 🐛 Bug fixes

- Rework Expo Router types for HrefObject and SearchParams hooks. ([#23507](https://github.com/expo/expo/pull/23507) by [@marklawlor](https://github.com/marklawlor))
- Added improved error message for static metro when a package is missing. ([#23499](https://github.com/expo/expo/pull/23499) by [@EvanBacon](https://github.com/EvanBacon))
- Set `preferNativePlatform` to `false` for all web requests. ([#23527](https://github.com/expo/expo/pull/23527) by [@EvanBacon](https://github.com/EvanBacon))
- Fix Expo Router generating types for invalid route files. ([#23421](https://github.com/expo/expo/pull/23421) by [@marklawlor](https://github.com/marklawlor))
- Add missing `router` type, and `canGoBack` when typed routes are enabled. Preserve deprecation comment for `useSearchParams` hook. ([#23636](https://github.com/expo/expo/pull/23636) by [@EvanBacon](https://github.com/EvanBacon))
- Fix running typed routes without an app directory. ([#23661](https://github.com/expo/expo/pull/23661) by [@EvanBacon](https://github.com/EvanBacon))
- Fix Expo Router type generation for filenames with spaces. ([#23662](https://github.com/expo/expo/pull/23662) by [@marklawlor](https://github.com/marklawlor))
- Fix ensure `.expo/types` folder exists during type generation. ([#23664](https://github.com/expo/expo/pull/23664) by [@marklawlor](https://github.com/marklawlor))
- Disable lazy bundling if `@expo/metro-runtime` is not installed. ([#23675](https://github.com/expo/expo/pull/23675) by [@EvanBacon](https://github.com/EvanBacon))

## 0.10.10 - 2023-07-07

### 🐛 Bug fixes

- Fixed JavaScript Inspector does not work on Windows. ([#23367](https://github.com/expo/expo/pull/23367) by [@kudo](https://github.com/kudo))

## 0.10.9 - 2023-07-05

### 🐛 Bug fixes

- Fixed opening browser on Windows when debugging or opening Metro web. ([#23287](https://github.com/expo/expo/pull/23287) by [@byCedric](https://github.com/byCedric))

## 0.10.8 - 2023-07-04

_This version does not introduce any user-facing changes._

## 0.10.7 - 2023-06-30

### 🐛 Bug fixes

- Fixed JavaScript inspector broken when using Metro web with SSG. ([#23197](https://github.com/expo/expo/pull/23197) by [@kudo](https://github.com/kudo))
- Fixed prebuild dependency versions warning to only show when versions do not intersect. ([#23232](https://github.com/expo/expo/pull/23232) by [@byCedric](https://github.com/byCedric))
- Disable tsconfig watching in non-interactive shells. ([#23276](https://github.com/expo/expo/pull/23276) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Update E2E tests to expect `.hbc` bundles instead of `.js` bundles. ([#23241](https://github.com/expo/expo/pull/23241) by [@gabrieldonadel](https://github.com/gabrieldonadel))
- Disable inspector proxy inline source maps for vscode only. ([#23258](https://github.com/expo/expo/pull/23258) by [@byCedric](https://github.com/byCedric))
- Remove inspector proxy source fetching workaround for `metro@<0.75.1`. ([#23259](https://github.com/expo/expo/pull/23259) by [@byCedric](https://github.com/byCedric))

## 0.10.6 - 2023-06-30

_This version does not introduce any user-facing changes._

## 0.10.5 - 2023-06-29

### 🎉 New features

- Add error message for static rendering without Expo Router. ([#23170](https://github.com/expo/expo/pull/23170) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for `web.favicon` to Metro web. ([#23072](https://github.com/expo/expo/pull/23072) by [@EvanBacon](https://github.com/EvanBacon))

## 0.10.4 — 2023-06-28

### 🐛 Bug fixes

- Avoid changing required dependency versions when prebuilding. ([#23146](https://github.com/expo/expo/pull/23146) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Removed prebuild side effect that adding `--dev-client` to the npm start script. ([#23121](https://github.com/expo/expo/pull/23121) by [@kudo](https://github.com/kudo))

## 0.10.3 — 2023-06-27

### 🐛 Bug fixes

- Remove invalid `none` platform from manifest middleware. ([#23080](https://github.com/expo/expo/pull/23080) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Upgrade `semver` lib. ([#23113](https://github.com/expo/expo/pull/23113) by [@felipemillhouse](https://github.com/felipemillhouse))

## 0.10.2 — 2023-06-24

_This version does not introduce any user-facing changes._

## 0.10.1 — 2023-06-23

_This version does not introduce any user-facing changes._

## 0.10.0 — 2023-06-21

### 🛠 Breaking changes

- Changed the default dev server port from 19000 to 8081 for Expo Go. ([#22880](https://github.com/expo/expo/pull/22880) by [@kudo](https://github.com/kudo))

### 🎉 New features

- Add ability to switch modes while running. ([#22924](https://github.com/expo/expo/pull/22924) by [@EvanBacon](https://github.com/EvanBacon))
- Add `-g, --go` option to `expo start` to force using Expo Go by default. ([#22925](https://github.com/expo/expo/pull/22925) by [@EvanBacon](https://github.com/EvanBacon))
- Add `-d` as an alias to `--dev-client`. ([#22925](https://github.com/expo/expo/pull/22925) by [@EvanBacon](https://github.com/EvanBacon))
- Allow client-side device ids to reuse debugger sessions when restarting app. ([#22742](https://github.com/expo/expo/pull/22742) by [@byCedric](https://github.com/byCedric))
- Enable inspector proxy with network support by default. ([#22936](https://github.com/expo/expo/pull/22936) by [@byCedric](https://github.com/byCedric))
- Auto enable `--dev-client` in `expo start` if `--go` is not passed and `expo-dev-client` is in the `package.json`. ([#22926](https://github.com/expo/expo/pull/22926) by [@EvanBacon](https://github.com/EvanBacon))
- Add `EXPO_OFFLINE` environment variable to disable network requests across the entire CLI. ([#22961](https://github.com/expo/expo/pull/22961) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Prevent source map requests for context modules from reaching Metro. ([#22874](https://github.com/expo/expo/pull/22874) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Only show EAS signing log in debug. ([#22975](https://github.com/expo/expo/pull/22975) by [@EvanBacon](https://github.com/EvanBacon))

## 0.9.1 — 2023-06-13

### 🐛 Bug fixes

- Fix metro types. ([#22867](https://github.com/expo/expo/pull/22867) by [@EvanBacon](https://github.com/EvanBacon))

## 0.9.0 — 2023-06-13

- Exclude dependencies from check/fix operations in `expo install` when set in package.json `expo.install.exclude`. ([#22736](https://github.com/expo/expo/pull/22736) by [@keith-kurak](https://github.com/keith-kurak))

### 🛠 Breaking changes

- Remove entry file modification/index.js generation from `expo prebuild`. Arbitrary entry files in development only work when using `expo-dev-client` or `.expo/.virtual-metro-entry` (SDK +49). ([#22044](https://github.com/expo/expo/pull/22044) by [@EvanBacon](https://github.com/EvanBacon))
- Drop `metro.config.js` copy step in `expo prebuild` in favor of `expo export:embed` and the new Xcode start script using Expo CLI--this only works when using Expo CLI for all bundling (SDK +49). ([#22045](https://github.com/expo/expo/pull/22045) by [@EvanBacon](https://github.com/EvanBacon))
- Skip overwriting `react` and `react-native` dependencies during `expo prebuild`. ([#22624](https://github.com/expo/expo/pull/22624) by [@byCedric](https://github.com/byCedric))
- Replace `EXPO_USE_TYPED_ROUTES` with `experiments.typedRoutes` in the `app.json`. ([#22848](https://github.com/expo/expo/pull/22848) by [@EvanBacon](https://github.com/EvanBacon))

### 🎉 New features

- Add `npx expo add` as an alias to `npx expo install`. ([#22510](https://github.com/expo/expo/pull/22510) by [@EvanBacon](https://github.com/EvanBacon))
- Add `--reset-cache` flag to `expo start` and `expo export` for interop with the Metro docs. ([#22589](https://github.com/expo/expo/pull/22589) by [@EvanBacon](https://github.com/EvanBacon))
- Add `--no-minify` flag to `npx expo export` to prevent minifying output JavaScript. ([#22544](https://github.com/expo/expo/pull/22544) by [@EvanBacon](https://github.com/EvanBacon))
- Show `o` option by default in Terminal UI. ([#22738](https://github.com/expo/expo/pull/22738) by [@EvanBacon](https://github.com/EvanBacon))
- Add `lazy` query parameter for Metro requests and `EXPO_NO_METRO_LAZY` to disable the feature. ([#22724](https://github.com/expo/expo/pull/22724) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for the `src/app` directory in Expo Router. ([#22748](https://github.com/expo/expo/pull/22748) by [@EvanBacon](https://github.com/EvanBacon))
- Added support for React Native 0.72. ([#22588](https://github.com/expo/expo/pull/22588) by [@kudo](https://github.com/kudo))
- Add generated types for Expo Router `useSegment` ([#22629](https://github.com/expo/expo/pull/22629) by [@marklawlor](https://github.com/marklawlor))

### 🐛 Bug fixes

- Import `fetch` from `node-fetch` to support older Node.js versions. ([#22480](https://github.com/expo/expo/pull/22480) by [@EvanBacon](https://github.com/EvanBacon))
- Fix modern manifest serving for dev client without expo-updates. ([#22470](https://github.com/expo/expo/pull/22470) by [@wschurman](https://github.com/wschurman))
- Fix static export for consecutive groups. ([#22504](https://github.com/expo/expo/pull/22504) by [@EvanBacon](https://github.com/EvanBacon))
- Fix externals for Metro Node.js rendering. ([#22695](https://github.com/expo/expo/pull/22695) by [@EvanBacon](https://github.com/EvanBacon))
- Enable verbose package manager logs on CI. ([#22361](https://github.com/expo/expo/pull/22361) by [@byCedric](https://github.com/byCedric))
- Fix static rendering when side effects are used. ([#22713](https://github.com/expo/expo/pull/22713) by [@EvanBacon](https://github.com/EvanBacon))
- Fix message shown when port is in use but running process cannot be identified. ([#22814](https://github.com/expo/expo/pull/22814) by [@loganrosen](https://github.com/loganrosen))

### 💡 Others

- Mark fixture `package.json` files as private. ([#22417](https://github.com/expo/expo/pull/22417) by [@EvanBacon](https://github.com/EvanBacon))

## 0.8.0 — 2023-05-08

### 🛠 Breaking changes

- Set `NODE_ENV` and `BABEL_ENV` environment variables to `development` or `production` in `start`, `export`, `customize`, `install`, `run:ios`, `run:android`, `config`, `prebuild` commands based on the input mode. ([#21337](https://github.com/expo/expo/pull/21337) by [@EvanBacon](https://github.com/EvanBacon))
- Export Hermes bytecode with `.hbc` extension. ([#22098](https://github.com/expo/expo/pull/22098) by [@EvanBacon](https://github.com/EvanBacon))
- Default to expo go modern manifest format. ([#22168](https://github.com/expo/expo/pull/22168) by [@wschurman](https://github.com/wschurman))

### 🎉 New features

- Support static CSS extraction in development for Metro web. ([#22325](https://github.com/expo/expo/pull/22325) by [@EvanBacon](https://github.com/EvanBacon))
- Add internal `expo export:embed` command to replace `npx react-native bundle` in production builds. ([#21396](https://github.com/expo/expo/pull/21396) by [@EvanBacon](https://github.com/EvanBacon))
- Automatically install TypeScript dependencies when TypeScript files are added during `expo start`. ([#21475](https://github.com/expo/expo/pull/21475) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for `compilerOptions.baseUrl` from `tsconfig.json` and `jsconfig.json` files to Metro. ([#21262](https://github.com/expo/expo/pull/21262) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for `compilerOptions.paths` aliases from `tsconfig.json` and `jsconfig.json` files to Metro. ([#21262](https://github.com/expo/expo/pull/21262) by [@EvanBacon](https://github.com/EvanBacon))
- Reduce install prompt. ([#21264](https://github.com/expo/expo/pull/21264) by [@EvanBacon](https://github.com/EvanBacon))
- Improve multi-target iOS scheme resolution for `expo run:ios`. ([#21240](https://github.com/expo/expo/pull/21240) by [@EvanBacon](https://github.com/EvanBacon))
- Add experimental static rendering for Metro web in Expo Router. ([#21572](https://github.com/expo/expo/pull/21572) by [@EvanBacon](https://github.com/EvanBacon))
- Set node env for metro config in `expo export:embed`. ([#21644](https://github.com/expo/expo/pull/21644) by [@EvanBacon](https://github.com/EvanBacon))
- Add EXPO_ROUTER_TYPED_ROUTES flag to enable experimental support for type generation ([#21560](https://github.com/expo/expo/pull/21651) by [@marklawlor](https://github.com/marklawlor))
- Add Node.js rendering to Metro bundler and Node.js external imports. ([#21886](https://github.com/expo/expo/pull/21886) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for inlining environment variables using the `EXPO_PUBLIC_` prefix. ([#21983](https://github.com/expo/expo/pull/21983) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for loading environment variables from `.env` files. ([#21983](https://github.com/expo/expo/pull/21983) by [@EvanBacon](https://github.com/EvanBacon))
- Add support for emitting static CSS files when exporting web projects with `expo export`. ([#21941](https://github.com/expo/expo/pull/21941) by [@EvanBacon](https://github.com/EvanBacon))
- Remove legacy manifest signing and fall back to unsigned when insufficient account permission to sign. ([#21989](https://github.com/expo/expo/pull/21989) by [@wschurman](https://github.com/wschurman))
- Expose environment variables to Node.js processes. ([#22076](https://github.com/expo/expo/pull/22076) by [@EvanBacon](https://github.com/EvanBacon))
- Use LogBox for static Metro errors. ([#22118](https://github.com/expo/expo/pull/22118) by [@EvanBacon](https://github.com/EvanBacon))
- Generate experimental expo-env.d.ts when EXPO_ROUTER_TYPED_ROUTES=true ([#22096](https://github.com/expo/expo/pull/22096) by [@marklawlor](https://github.com/marklawlor))
- Add pretty errors for static exports. ([#22142](https://github.com/expo/expo/pull/22142) by [@EvanBacon](https://github.com/EvanBacon))
- Improve prebuild for arbitrary template platforms. ([#22201](https://github.com/expo/expo/pull/22201) by [@byCedric](https://github.com/byCedric))
- Further improve prebuild for arbitrary template platforms. ([#22209](https://github.com/expo/expo/pull/22209) by [@EvanBacon](https://github.com/EvanBacon))
- Add SearchParams export type for Expo Router. ([#22380](https://github.com/expo/expo/pull/22380) by [@marklawlor](https://github.com/marklawlor))

### 🐛 Bug fixes

- Fix main field resolution for metro web. ([#21939](https://github.com/expo/expo/pull/21939) by [@EvanBacon](https://github.com/EvanBacon))
- Fix cached code signing development certificate offline behavior. ([#21989](https://github.com/expo/expo/pull/21989) by [@wschurman](https://github.com/wschurman))
- Remove invalid array group syntax from Expo Router type generation. ([#22185](https://github.com/expo/expo/pull/22185) by [@marklawlor](https://github.com/marklawlor))
- Skip verifying arbitrary platforms when prebuilding. ([#22228](https://github.com/expo/expo/pull/22228) by [@byCedric](https://github.com/byCedric))
- Fix prebuild `--template` flag on Windows for local tarballs. ([#22232](https://github.com/expo/expo/pull/22232) by [@byCedric](https://github.com/byCedric))
- Fixed Activity does not start on Android 13 devices. ([#22286](https://github.com/expo/expo/pull/22286) by [@kudo](https://github.com/kudo))
- Fix duplicate enpo-env.d.ts entries being added to the gitignore. ([#22127](https://github.com/expo/expo/pull/22127) by [@marklawlor](https://github.com/marklawlor))
- Fix type error in downloadExpoGoAsync. ([#22398](https://github.com/expo/expo/pull/22398) by [@0618](https://github.com/0618))

### 💡 Others

- Switch `EXPO_USE_PATH_ALIASES` to `expo.experiments.tsconfigPaths`. ([#21897](https://github.com/expo/expo/pull/21897) by [@EvanBacon](https://github.com/EvanBacon))
- Fallback on latest `@expo/metro-config` when local version isn't available (effects testing locally). ([#21643](https://github.com/expo/expo/pull/21643) by [@EvanBacon](https://github.com/EvanBacon))
- Update fixtures. ([#21397](https://github.com/expo/expo/pull/21397) by [@EvanBacon](https://github.com/EvanBacon))
- Upgrade e2e tests to SDK 47. ([#21335](https://github.com/expo/expo/pull/21335) by [@EvanBacon](https://github.com/EvanBacon))
- Update `metro.config.js` template file to match new template. ([#21898](https://github.com/expo/expo/pull/21898) by [@EvanBacon](https://github.com/EvanBacon))
- Fix node rendering. ([#21902](https://github.com/expo/expo/pull/21902) by [@EvanBacon](https://github.com/EvanBacon))
- Update migration map to suggest standalone npx expo doctor instead of expo-cli doctor. ([#21931](https://github.com/expo/expo/pull/21931) by [@keith-kurak](https://github.com/keith-kurak))
- Add graphql-codegen. ([#21980](https://github.com/expo/expo/pull/21980) by [@wschurman](https://github.com/wschurman))
- Add graphql generated file to eslintignore. ([#22001](https://github.com/expo/expo/pull/22001) by [@gabrieldonadel](https://github.com/gabrieldonadel))

## 0.7.1 - 2023-04-26

_This version does not introduce any user-facing changes._

## 0.7.0 - 2023-04-13

### 🎉 New features

- Added experimental react-devtools integration. ([#21462](https://github.com/expo/expo/pull/21462) by [@kudo](https://github.com/kudo))
- Add experimental inspector proxy to handle more CDP requests. ([#21449](https://github.com/expo/expo/pull/21449) by [@byCedric](https://github.com/byCedric))
- Add inspector proxy workarounds for known issues with vscode debugger and Hermes CDP messages. ([#21560](https://github.com/expo/expo/pull/21560) by [@byCedric](https://github.com/byCedric))
- Add inspector support for `Page.reload` CDP message. ([#21827](https://github.com/expo/expo/pull/21827) by [@byCedric](https://github.com/byCedric))

### 🐛 Bug fixes

- Respond to `Debugger.getScriptSource` CDP messages when using lan or tunnel. ([#21825](https://github.com/expo/expo/pull/21825) by [@byCedric](https://github.com/byCedric))
- Fix legacy accept signature parsing. ([#21970](https://github.com/expo/expo/pull/21970) by [@wschurman](https://github.com/wschurman))

## 0.6.2 - 2023-02-21

_This version does not introduce any user-facing changes._

## 0.6.1 — 2023-02-15

_This version does not introduce any user-facing changes._

## 0.6.0 — 2023-02-14

### 🎉 New features

- Implement new package manager API in CLI. ([#19343](https://github.com/expo/expo/pull/19343) by [@byCedric](https://github.com/byCedric))
- Add `EXPO_USE_METRO_WORKSPACE_ROOT` to enable using the workspace root for serving files. ([#21088](https://github.com/expo/expo/pull/21088) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Close config file watchers to ensure process can exit. ([#21199](https://github.com/expo/expo/pull/21199) by [@EvanBacon](https://github.com/EvanBacon))
- Fix log format when modifying `tsconfig.json`. ([#21166](https://github.com/expo/expo/pull/21166) by [@EvanBacon](https://github.com/EvanBacon))
- Fix `devDependencies` when running `npx expo install --fix`. ([#19344](https://github.com/expo/expo/pull/19344) by [@byCedric](https://github.com/byCedric))

## 0.5.1 — 2023-02-09

### 💡 Others

- Add telemetry for experimental Metro config options. ([#20885](https://github.com/expo/expo/pull/20885) by [@byCedric](https://github.com/byCedric))

## 0.5.0 — 2023-02-03

### 🛠 Breaking changes

- Remove `EXPO_NO_DEFAULT_PORT` to skip extraneous tunnel port. ([#18475](https://github.com/expo/expo/pull/18475) by [@EvanBacon](https://github.com/EvanBacon))

### 🎉 New features

- Support Hermes debugger on native when Metro web is running. ([#21068](https://github.com/expo/expo/pull/21068) by [@EvanBacon](https://github.com/EvanBacon))
- Skip uninstalling Expo Go when running in UNVERSIONED (internal). ([#20754](https://github.com/expo/expo/pull/20754) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Add react-native-web alias for metro web that doesn't rely on Babel. ([#20828](https://github.com/expo/expo/pull/20828) by [@EvanBacon](https://github.com/EvanBacon))
- Allow chained Metro resolvers to resolve when the predecessor resolver throws a Metro resolution error. ([#20704](https://github.com/expo/expo/pull/20704) by [@EvanBacon](https://github.com/EvanBacon))
- Escape ampersands in URLs sent to adb. ([#20398](https://github.com/expo/expo/pull/20398) by [@EvanBacon](https://github.com/EvanBacon))
- Fix web assets not loading in Metro for web on Windows. ([#19935](https://github.com/expo/expo/pull/19935) by [@EvanBacon](https://github.com/EvanBacon))
- Fix getting UDID for network connected iOS devices. ([#20279](https://github.com/expo/expo/pull/20279) by [@Simek](https://github.com/Simek))
- Send Exponent-Server header as JSON string for classic manifests. ([#20409](https://github.com/expo/expo/pull/20409) by [@byCedric](https://github.com/byCedric))
- Use known Expo schemes when starting with dev clients. ([#20888](https://github.com/expo/expo/pull/20888) by [@byCedric](https://github.com/byCedric))
- Fix sourcemap generation errors when exporting Hermes bundle. ([#21022](https://github.com/expo/expo/pull/21022) by [@kudo](https://github.com/kudo))
- Avoid fixing secure Apple device socket connections to a single TLS method. ([#21169](https://github.com/expo/expo/pull/21169) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Bump `@expo/json-file`, `@expo/plist`. ([#20720](https://github.com/expo/expo/pull/20720) by [@EvanBacon](https://github.com/EvanBacon))
- Fix ngrok error message format. ([#19822](https://github.com/expo/expo/pull/19822) by [@EvanBacon](https://github.com/EvanBacon))
- Tweak warning about metro config. ([#20066](https://github.com/expo/expo/pull/20066) by [@kbrandwijk](https://github.com/kbrandwijk))
- Remove `uuid` dependency. ([#20479](https://github.com/expo/expo/pull/20479) by [@LinusU](https://github.com/LinusU))
- Do not show `error.stack` for `ConfigError`s. ([#19248](https://github.com/expo/expo/pull/19248) by [@Simek](https://github.com/Simek))
- Fix tests. ([#20510](https://github.com/expo/expo/pull/20510) by [@EvanBacon](https://github.com/EvanBacon))
- Simplify the Xcode warnings. ([#20512](https://github.com/expo/expo/pull/20512) by [@EvanBacon](https://github.com/EvanBacon))
- Simply Metro watch mode detection to `CI=true`, and log when disabled. ([#20939](https://github.com/expo/expo/pull/20939) by [@byCedric](https://github.com/byCedric))

## 0.4.10 - 2022-11-22

### 🐛 Bug fixes

- Upgrade @expo/code-signing-certificates dependency. ([#20078](https://github.com/expo/expo/pull/20078) by [@wschurman](https://github.com/wschurman))

## 0.4.9 - 2022-11-14

_This version does not introduce any user-facing changes._

## 0.4.8 - 2022-11-08

### 🐛 Bug fixes

- Fix Hermes debugger `TypeError: Only HTTP(S) protocols are supported` error when starting server with `--dev-client` parameter. ([#19919](https://github.com/expo/expo/pull/19919) by [@kudo](https://github.com/kudo))

## 0.4.7 - 2022-11-07

### 🐛 Bug fixes

- Fix Expo Go download loading bar. ([#19817](https://github.com/expo/expo/pull/19817) by [@EvanBacon](https://github.com/EvanBacon))
- Fix Hermes debugger errors on Windows and Linux. ([#19872](https://github.com/expo/expo/pull/19872) by [@kudo](https://github.com/kudo))

## 0.4.6 — 2022-11-02

### 🎉 New features

- Display the debug option more prominently in the UI. ([#19793](https://github.com/expo/expo/pull/19793) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Resolve `metadata.json` file path absolutely for `npx expo export`. ([#19802](https://github.com/expo/expo/pull/19802) by [@EvanBacon](https://github.com/EvanBacon))

## 0.4.5 — 2022-10-30

_This version does not introduce any user-facing changes._

## 0.4.4 — 2022-10-30

_This version does not introduce any user-facing changes._

## 0.4.3 — 2022-10-28

_This version does not introduce any user-facing changes._

## 0.4.2 — 2022-10-28

### 🛠 Breaking changes

- Revert [#18381](https://github.com/expo/expo/pull/18381) (custom entry support).

### 🎉 New features

- Add `-p` to `npx expo export`. ([#19715](https://github.com/expo/expo/pull/19715) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Prevent extraneous `Found multiple AppDelegate file paths` warnings when using CLI commands with a multi-target iOS app. ([#18890](https://github.com/expo/expo/pull/18890) by [@EvanBacon](https://github.com/EvanBacon))

## 0.4.1 — 2022-10-27

### 🐛 Bug fixes

- Don't print source map size in `npx expo export` when the source maps are not written. ([#19710](https://github.com/expo/expo/pull/19710) by [@EvanBacon](https://github.com/EvanBacon))

## 0.4.0 — 2022-10-25

### 🛠 Breaking changes

- Drop support for copying `index.js` and removing `main` field in `package.json` during `expo prebuild` in favor of native build scripts which resolve the user-defined entry file. ([#18381](https://github.com/expo/expo/pull/18381) by [@EvanBacon](https://github.com/EvanBacon))

### 🎉 New features

- Add proxy support across all Expo CLI commands. ([#19592](https://github.com/expo/expo/pull/19592) by [@EvanBacon](https://github.com/EvanBacon))
- Added ability to open tunnel URLs with Metro web. ([#19504](https://github.com/expo/expo/pull/19504) by [@EvanBacon](https://github.com/EvanBacon))
- Added prompt for signing simulator builds that use entitlements that work on simulator builds like associated domains. ([#19505](https://github.com/expo/expo/pull/19505) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Skip ADB reverse when Android SDK is missing (allowing `npx expo start --tunnel`). ([#19593](https://github.com/expo/expo/pull/19593) by [@EvanBacon](https://github.com/EvanBacon))
- Make Expo Metro config for web resolve projects using same `package.json` main fields as Expo Webpack. Behavior can be disabled with `EXPO_METRO_NO_MAIN_FIELD_OVERRIDE`. ([#19529](https://github.com/expo/expo/pull/19529) by [@EvanBacon](https://github.com/EvanBacon))
- Add web support check to metro web in `expo start`. ([#18428](https://github.com/expo/expo/pull/18428) by [@EvanBacon](https://github.com/EvanBacon))
- Drop support for experimental Webpack native symbolication. ([#18439](https://github.com/expo/expo/pull/18439) by [@EvanBacon](https://github.com/EvanBacon))
- Implement getApplicationIdFromBundle fixing iOS app launch issue with SDK 46. ([#18537](https://github.com/expo/expo/pull/18537) by [@Anthony Mittaz](https://github.com/Anthony Mittaz))
- Change `UNAUTHORIZED_ERROR` to `UNAUTHORIZED` to handle unauthorized errors. ([#18751](https://github.com/expo/expo/pull/18751) by [@EvanBacon](https://github.com/EvanBacon))
- Catch error thrown when trying to launch redirect page without an application ID defined in `app.json`. ([#19312](https://github.com/expo/expo/pull/19312) by [@esamelson](https://github.com/esamelson))
- Present intended variadic argument when asserting flags in `npx expo install`. ([#19396](https://github.com/expo/expo/pull/19396) by [@bycedric](https://github.com/bycedric))
- Add "none" platform when running `--dev-client`. ([#19319](https://github.com/expo/expo/pull/19319) by [@jonsamp](https://github.com/jonsamp))
- Fix development code signing for dev client. ([#19557](https://github.com/expo/expo/pull/19557) by [@wschurman](https://github.com/wschurman))

### 💡 Others

- Change asset registry redirect for Metro web to point to the shared alias in `react-native`. ([#19234](https://github.com/expo/expo/pull/19234) by [@EvanBacon](https://github.com/EvanBacon))
- Update the README file. ([#18663](https://github.com/expo/expo/pull/18663) by [@EvanBacon](https://github.com/EvanBacon))
- Fix `prebuild` e2e tests. ([#18612](https://github.com/expo/expo/pull/18612) by [@EvanBacon](https://github.com/EvanBacon))
- [Interstitial page] Capture missing analytics event when user opens development build. ([#18792](https://github.com/expo/expo/pull/18792) by [@esamelson](https://github.com/esamelson))

## 0.3.2 - 2022-10-13

### 🎉 New features

- Handle all development session errors. ([#18499](https://github.com/expo/expo/pull/18499) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Disable API interaction when running in offline mode. ([#19418](https://github.com/expo/expo/pull/19418) by [@byCedric](https://github.com/byCedric))

### 💡 Others

- Hide server rate limiting warning during `npx expo start`. ([#19038](https://github.com/expo/expo/pull/19038) by [@EvanBacon](https://github.com/EvanBacon))

## 0.3.1 - 2022-09-26

_This version does not introduce any user-facing changes._

## 0.3.0 - 2022-09-26

### 🎉 New features

- Added middleware for creating files. ([#19231](https://github.com/expo/expo/pull/19231) by [@EvanBacon](https://github.com/EvanBacon))
- Enable `require.context` by default. ([#19257](https://github.com/expo/expo/pull/19257) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Resolve bundle identifier / package from native project and then fallback to `app.json` when launching redirect page. ([#19260](https://github.com/expo/expo/pull/19260) by [@brentvatne](https://github.com/brentvatne))

## 0.2.11 - 2022-08-22

### 🐛 Bug fixes

- Resolve bundle identifier from `app.json` correctly when using `npx expo start --dev-client --ios` with no local `ios` directory. ([#18747](https://github.com/expo/expo/pull/18747) by [@EvanBacon](https://github.com/EvanBacon))

## 0.2.10 - 2022-08-18

_This version does not introduce any user-facing changes._

## 0.2.8 - 2022-08-12

_This version does not introduce any user-facing changes._

## 0.2.7 - 2022-08-10

### 🎉 New features

- Add `EXPO_NO_DEFAULT_PORT` to skip proxy port. ([#18464](https://github.com/expo/expo/pull/18464) by [@EvanBacon](https://github.com/EvanBacon))
- Disable interactive prompts in non TTY processes. ([#18300](https://github.com/expo/expo/pull/18300) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Prevent development session bad gateway from ending long running `expo start` processes. ([#18451](https://github.com/expo/expo/pull/18451) by [@EvanBacon](https://github.com/EvanBacon))
- Speed up native device opening for iOS and Android. ([#18385](https://github.com/expo/expo/pull/18385) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Add warning about malformed project when running prebuild in non-interactive mode. ([#18436](https://github.com/expo/expo/pull/18436) by [@wkozyra95](https://github.com/wkozyra95))
- [Interstitial page] Ensure that the development build is installed when opening the interstitial page. ([#18836](https://github.com/expo/expo/pull/18836) by [@esamelson](https://github.com/esamelson))
- [Interstitial page] Point QR code to interstitial page when enabled. ([#18838](https://github.com/expo/expo/pull/18838) by [@esamelson](https://github.com/esamelson))
- [Interstitial page] Minor improvements to page; try to detect if deep link succeeded. ([#18839](https://github.com/expo/expo/pull/18839) by [@esamelson](https://github.com/esamelson))
- [Interstitial page] Flip value and change name of env flag to EXPO_NO_REDIRECT_PAGE. ([#18840](https://github.com/expo/expo/pull/18840) by [@esamelson](https://github.com/esamelson))

## 0.2.6 — 2022-07-25

### 🎉 New features

- Add telemetry event tracking a command run. ([#17948](https://github.com/expo/expo/pull/17948) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Ensure `expo build:web` recommends running `expo export:web` in the migration warning. ([#18312](https://github.com/expo/expo/pull/18312) by [@EvanBacon](https://github.com/EvanBacon))

## 0.2.5 — 2022-07-19

_This version does not introduce any user-facing changes._

## 0.2.4 — 2022-07-19

### 🐛 Bug fixes

- Add mock `--non-interactive` flag to hide `eas update` errors. ([#18299](https://github.com/expo/expo/pull/18299) by [@EvanBacon](https://github.com/EvanBacon))

## 0.2.3 — 2022-07-19

### 🎉 New features

- Add `EXPO_EDITOR` environment variable for overriding the `EDITOR` variable. This is used in the `expo start` Terminal UI when pressing `o`. ([#18285](https://github.com/expo/expo/pull/18285) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Fix bug preventing the installation of beta clients. ([#18298](https://github.com/expo/expo/pull/18298) by [@EvanBacon](https://github.com/EvanBacon))

## 0.2.2 — 2022-07-18

_This version does not introduce any user-facing changes._

## 0.2.1 — 2022-07-11

### 💡 Others

- Drop hardcoded web package versions in prerequisite. ([#18172](https://github.com/expo/expo/pull/18172) by [@EvanBacon](https://github.com/EvanBacon))

## 0.2.0 — 2022-07-07

### 🛠 Breaking changes

- Change `expo` to `expo-internal` (DO NOT USE) for `@expo/cli`. ([#17468](https://github.com/expo/expo/pull/17468) by [@EvanBacon](https://github.com/EvanBacon))

### 🎉 New features

- Validate Android SDK configuration before using ([#17259](https://github.com/expo/expo/pull/17259) by [@byCedric](https://github.com/byCedric))
- Add CI context to telemetry to help determine support on used CI providers ([#17284](https://github.com/expo/expo/pull/17284) by [@byCedric](https://github.com/byCedric))
- add `--pnpm` option to `install` command. ([#17366](https://github.com/expo/expo/pull/17366) by [@EvanBacon](https://github.com/EvanBacon))
- Added `export:web` command. ([#17363](https://github.com/expo/expo/pull/17363) by [@EvanBacon](https://github.com/EvanBacon))
- Bail out on missing web dependencies. ([#17448](https://github.com/expo/expo/pull/17448) by [@EvanBacon](https://github.com/EvanBacon))
- Add info about using the `--clear` flag when the `babel.config.js` file changes during `expo start`. ([#17560](https://github.com/expo/expo/pull/17560) by [@EvanBacon](https://github.com/EvanBacon))
- Automatically enable `DEBUG` when `EXPO_DEBUG` is enabled. ([#17856](https://github.com/expo/expo/pull/17856) by [@EvanBacon](https://github.com/EvanBacon))
- add migration warning for old commands. ([#17882](https://github.com/expo/expo/pull/17882) by [@EvanBacon](https://github.com/EvanBacon))
- Add web support for Metro bundler. ([#17927](https://github.com/expo/expo/pull/17927) by [@EvanBacon](https://github.com/EvanBacon))
- Add multi-platform bundle logging during `expo export`. ([#17992](https://github.com/expo/expo/pull/17992) by [@EvanBacon](https://github.com/EvanBacon))
- Upgrade react-native to 0.69. ([#18006](https://github.com/expo/expo/pull/18006) by [@kudo](https://github.com/kudo))

### 🐛 Bug fixes

- Remove hanging `emulator` process on exit. ([#17273](https://github.com/expo/expo/pull/17273) by [@EvanBacon](https://github.com/EvanBacon))
- Fix bug where autocomplete prompts crash when escape characters are used. ([#17271](https://github.com/expo/expo/pull/17271) by [@EvanBacon](https://github.com/EvanBacon))
- add missing `--platform` flag to `export` command. ([#17338](https://github.com/expo/expo/pull/17338) by [@EvanBacon](https://github.com/EvanBacon))
- Fix ADB device name filtering for windows. ([#17286](https://github.com/expo/expo/pull/17286) by [@byCedric](https://github.com/byCedric))
- Fix `export` bug failing when no assets are included. ([#17414](https://github.com/expo/expo/pull/17414) by [@EvanBacon](https://github.com/EvanBacon))
- Add correct packages (`expo-splash-screen`) and drop incorrect required packages (`react-native-unimodules`, `expo-updates`) in prebuild. ([#17447](https://github.com/expo/expo/pull/17447) by [@EvanBacon](https://github.com/EvanBacon))
- Fix tunnel on web breaking native. ([#17666](https://github.com/expo/expo/pull/17666) by [@EvanBacon](https://github.com/EvanBacon))
- Add no-op `--experimental-bundle` flag to `expo export`. ([#17886](https://github.com/expo/expo/pull/17886) by [@EvanBacon](https://github.com/EvanBacon))
- Fix auto TypeScript version check. ([#17911](https://github.com/expo/expo/pull/17911) by [@EvanBacon](https://github.com/EvanBacon))
- Fix ignored existing plugins on expo install. ([#17936](https://github.com/expo/expo/pull/17936) by [@kbrandwijk](https://github.com/kbrandwijk))

### 💡 Others

- Bump `@expo/xcpretty` to link to the troubleshooting guide. ([#17576](https://github.com/expo/expo/pull/17576) by [@EvanBacon](https://github.com/EvanBacon))
- deduplicate asMock helper function. ([#17294](https://github.com/expo/expo/pull/17294) by [@wschurman](https://github.com/wschurman))
- Use `nxp expo install` for recommended missing dependency check. ([#17665](https://github.com/expo/expo/pull/17665) by [@EvanBacon](https://github.com/EvanBacon))
- Make bundler implementation more bundler agnostic. ([#17575](https://github.com/expo/expo/pull/17575) by [@EvanBacon](https://github.com/EvanBacon))
- Add debug log about unversioned packages. ([#17664](https://github.com/expo/expo/pull/17664) by [@EvanBacon](https://github.com/EvanBacon))
- Update test fixtures to SDK 45. ([#17934](https://github.com/expo/expo/pull/17934) by [@EvanBacon](https://github.com/EvanBacon))
- Bump `@expo/xcpretty` with support for `react-native@0.69` build errors. ([#17986](https://github.com/expo/expo/pull/17986) by [@EvanBacon](https://github.com/EvanBacon))

## 0.1.3 — 2022-04-28

### 🐛 Bug fixes

- add missing `pretty-bytes` dependency. ([#17235](https://github.com/expo/expo/pull/17235) by [@EvanBacon](https://github.com/EvanBacon))

## 0.1.2 — 2022-04-27

_This version does not introduce any user-facing changes._

## 0.1.1 — 2022-04-27

### 🎉 New features

- Unify help prompts. ([#17223](https://github.com/expo/expo/pull/17223) by [@EvanBacon](https://github.com/EvanBacon))
- Added `expo run:android` command. ([#17187](https://github.com/expo/expo/pull/17187) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Add support for `react-native@0.68` dev server API. ([#17189](https://github.com/expo/expo/pull/17189) by [@EvanBacon](https://github.com/EvanBacon))

### 💡 Others

- Downgrade `fs-extra` to `8.1.0`. ([#17234](https://github.com/expo/expo/pull/17234) by [@EvanBacon](https://github.com/EvanBacon))

## 0.1.0 — 2022-04-25

### 🎉 New features

- [cli] Added modules for interacting with Apple and Android platforms. ([#16516](https://github.com/expo/expo/pull/16516) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added middleware for showing the interstitial page and redirecting users to dev clients. ([#16560](https://github.com/expo/expo/pull/16560) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added middleware for dev servers to host Expo manifests. ([#16559](https://github.com/expo/expo/pull/16559) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added module for starting host tunnels with Ngrok. ([#16556](https://github.com/expo/expo/pull/16556) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added module for updating the "development session" API. ([#16555](https://github.com/expo/expo/pull/16555) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added modules for creating dev server URLs, akin to `UrlUtils` in `xdl`. ([#16557](https://github.com/expo/expo/pull/16557) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added shim for `expo start` command and option resolvers. ([#16587](https://github.com/expo/expo/pull/16587) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added module for interacting with Metro bundler. ([#16631](https://github.com/expo/expo/pull/16631) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added Terminal UI to `expo start`. ([#16518](https://github.com/expo/expo/pull/16518) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added a custom terminal logger for Metro dev server. ([#16658](https://github.com/expo/expo/pull/16658) by [@EvanBacon](https://github.com/EvanBacon))
- [cli] Added module for interacting with Webpack bundler. ([#16659](https://github.com/expo/expo/pull/16659) by [@EvanBacon](https://github.com/EvanBacon))
- Added `expo run:ios` command. ([#16662](https://github.com/expo/expo/pull/16662) by [@EvanBacon](https://github.com/EvanBacon))
- Fixed type errors. ([#16724](https://github.com/expo/expo/pull/16724) by [@EvanBacon](https://github.com/EvanBacon))
- Disable watch mode in CI. ([#16730](https://github.com/expo/expo/pull/16730) by [@EvanBacon](https://github.com/EvanBacon))
- Added `install` command. ([#16756](https://github.com/expo/expo/pull/16756) by [@EvanBacon](https://github.com/EvanBacon))
- Serve modern manifests in multipart format. ([#16804](https://github.com/expo/expo/pull/16804) by [@wschurman](https://github.com/wschurman))
- Add development code signing. ([#16845](https://github.com/expo/expo/pull/16845) by [@wschurman](https://github.com/wschurman))
- Added `export` command. ([#17034](https://github.com/expo/expo/pull/17034) by [@EvanBacon](https://github.com/EvanBacon))
- Add `--fix` and `--check` arguments to `install` command. ([#17048](https://github.com/expo/expo/pull/17048) by [@EvanBacon](https://github.com/EvanBacon))
- Added `customize` command. ([#17186](https://github.com/expo/expo/pull/17186) by [@EvanBacon](https://github.com/EvanBacon))

### 🐛 Bug fixes

- Fix process memory leak warning in `expo start`. ([#16753](https://github.com/expo/expo/pull/16753) by [@EvanBacon](https://github.com/EvanBacon))
- Fix build watcher. ([#16754](https://github.com/expo/expo/pull/16754) by [@EvanBacon](https://github.com/EvanBacon))
- Allow bailing out of Terminal UI during long processes. ([#16818](https://github.com/expo/expo/pull/16818) by [@EvanBacon](https://github.com/EvanBacon))
- Fix web imports and dependency resolution. ([#16820](https://github.com/expo/expo/pull/16820) by [@EvanBacon](https://github.com/EvanBacon))
- [test] Update login error message to reflect server change. ([#16932](https://github.com/expo/expo/pull/16932) by [@EvanBacon](https://github.com/EvanBacon))
- Fix webpack imports and server timeouts. ([#17006](https://github.com/expo/expo/pull/17006) by [@EvanBacon](https://github.com/EvanBacon))
- Skip font parsing on prebuild. ([#17184](https://github.com/expo/expo/pull/17184) by [@EvanBacon](https://github.com/EvanBacon))
- [ci] Fix `typecheck`. ([#17145](https://github.com/expo/expo/pull/17145) by [@EvanBacon](https://github.com/EvanBacon))
- Close development session when CLI is stopped ([#17170](https://github.com/expo/expo/pull/17170) by [@FiberJW](https://github.com/FiberJW))

### 💡 Others

- Improve contributing. ([#16917](https://github.com/expo/expo/pull/16917) by [@EvanBacon](https://github.com/EvanBacon))
- Reduce mock clearing and add `Log` import/export. ([#17046](https://github.com/expo/expo/pull/17046) by [@EvanBacon](https://github.com/EvanBacon))
- Migrate to using `DEBUG=expo:*` instead of `EXPO_DEBUG`. ([#17084](https://github.com/expo/expo/pull/17084) by [@EvanBacon](https://github.com/EvanBacon))
- Lazily evaluate all environment variables. ([#17082](https://github.com/expo/expo/pull/17082) by [@EvanBacon](https://github.com/EvanBacon))
