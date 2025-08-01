import { NativeModule } from 'expo-modules-core';
import type { Directory, File, DownloadOptions } from './ExpoFileSystem.types';
declare class ExpoFileSystemModule extends NativeModule {
    FileSystemDirectory: typeof Directory;
    FileSystemFile: typeof File;
    downloadFileAsync(url: string, destination: File | Directory, options?: DownloadOptions): Promise<string>;
    totalDiskSpace: number;
    availableDiskSpace: number;
}
declare const _default: ExpoFileSystemModule;
export default _default;
//# sourceMappingURL=ExpoFileSystem.d.ts.map