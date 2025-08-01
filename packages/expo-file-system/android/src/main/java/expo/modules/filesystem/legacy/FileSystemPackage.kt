package expo.modules.filesystem.legacy

import android.content.Context
import expo.modules.core.BasePackage
import expo.modules.core.interfaces.InternalModule

class FileSystemPackage : BasePackage() {
  override fun createInternalModules(context: Context): List<InternalModule> =
    listOf(FilePermissionModule(), AppDirectoriesModule(context))
}
