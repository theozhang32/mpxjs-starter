import mpx, { ref, computed, unref } from '@mpxjs/core'
import { defineStore } from '@mpxjs/pinia'
import { ENV } from '@/types'

export const useEnvStore = defineStore('env', () => {
  const env = ref<ENV>(__wxConfig.envVersion === 'release' ? 'prod' : 'test')
  const toggleEnv = (e: ENV) => {
    env.value = e
  }

  return {
    env,
    toggleEnv
  }
})

export const useSystemInfo = defineStore('systemInfo', () => {
  const safeArea = ref<WechatMiniprogram.SafeArea>()
  const fontSizeSetting = ref(0)
  const safeAreaBottom = ref(0)
  const statusBarHeight = ref(0)
  const menuButtonTop = ref(0)
  const menuButtonHeight = ref(0)

  const navBarHeight = computed(() => {
    if (unref(statusBarHeight) > 0) {
      const space = unref(menuButtonTop) - unref(statusBarHeight)
      return unref(menuButtonHeight) + space * 2
    }
    return 0
  })

  const navTotalHeight = computed(() => {
    return unref(navBarHeight) + unref(statusBarHeight)
  })

  const tabBarHeightRpx = computed(() => {
    const paddingBottom = unref(safeAreaBottom)
      ? `${unref(safeAreaBottom)}px`
      : `${10 * 2}rpx`
    return `calc(${55 * 2}rpx + ${paddingBottom})`
  })

  const getSystemInfo = () => {
    mpx.getSystemInfoAsync({
      success: (res) => {
        console.log(res)
        safeArea.value = res.safeArea
        safeAreaBottom.value = res.screenHeight - res.safeArea.bottom
        fontSizeSetting.value = res.fontSizeSetting
        statusBarHeight.value = res.statusBarHeight
      }
    })
    const res = mpx.getMenuButtonBoundingClientRect()
    menuButtonHeight.value = res.height
    menuButtonTop.value = res.top
  }

  const safeAreaBottomCompare = (value: number) =>
    value > unref(safeAreaBottom) ? value : unref(safeAreaBottom)

  return {
    safeArea,
    safeAreaBottom,
    fontSizeSetting,
    statusBarHeight,
    /** 仅导航栏高度 */
    navBarHeight,
    /** 带状态栏的顶部高度 */
    navTotalHeight,
    tabBarHeightRpx,
    getSystemInfo,
    safeAreaBottomCompare
  }
})
