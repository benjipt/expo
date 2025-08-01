package expo.interfaces.devmenu

import android.app.Activity
import android.view.KeyEvent
import android.view.MotionEvent
import kotlinx.coroutines.CoroutineScope

interface DevMenuManagerInterface {
  /**
   * Opens the dev menu in provided [activity]
   */
  fun openMenu(activity: Activity, screen: String? = null)

  /**
   * Closes the dev menu.
   * This method will trigger the js code, which should smoothly hide the menu.
   */
  fun closeMenu()

  /**
   * Hides the dev menu.
   * This method will destroyed the current dev menu [Activity].
   */
  fun hideMenu()

  /**
   * Toggles the dev menu in provided [activity]
   */
  fun toggleMenu(activity: Activity)

  /**
   * Handles `onKeyEvent`. It's active only if [DevMenuPreferencesInterface.keyCommandsEnabled] is true.
   */
  fun onKeyEvent(keyCode: Int, event: KeyEvent): Boolean

  /**
   * Handles `onTouchEvent`. It's active only if [DevMenuPreferencesInterface.touchGestureEnabled] is true.
   */
  fun onTouchEvent(ev: MotionEvent?)

  /**
   * Initializes the dev menu manager to work with provided delegate.
   */
  fun setDelegate(newDelegate: DevMenuDelegateInterface)

  /**
   * Initializes the dev menu manager to work with react host.
   */
  fun initializeWithReactHost(reactHost: ReactHostWrapper)

  /**
   * @return a instance of [DevMenuPreferencesInterface] that keeps all settings for current dev menu delegate,
   * or `null` if delegate wasn't provided.
   */
  fun getSettings(): DevMenuPreferencesInterface?

  /**
   * Synchronizes [ReactInstanceManager] from delegate with one saved in [DevMenuManger].
   */
  fun synchronizeDelegate()

  /**
   * Sends an event to the delegate's bridge if exists.
   */
  fun sendEventToDelegateBridge(eventName: String, eventData: Any?)

  /**
   * Whether delegate was initialized
   */
  fun isInitialized(): Boolean

  /**
   * Whether to automatically show the dev menu on app load. Defaults to true if not set.
   */
  fun setCanLaunchDevMenuOnStart(shouldAutoLaunch: Boolean)

  val coroutineScope: CoroutineScope
}
