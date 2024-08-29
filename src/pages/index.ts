/*
 * @Author: 张天昊
 * @Date: 2024-08-27 15:30:09
 * @LastEditTime: 2024-08-29 10:11:50
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /mpx-template/src/pages/index.ts
 */
import mpx, { createPage, onLoad, ref } from '@mpxjs/core'
import { storeToRefs } from '@mpxjs/pinia'
import Toast from '@vant/weapp/toast/toast'
import { useSetupStore } from '@/stores/setup'
import { request } from '@/utils/request'

createPage({
  setup() {
    const setupStore = useSetupStore()

    const columns = ['杭州', '宁波', '温州', '嘉兴', '湖州']

    const show = ref(false)

    onLoad((options) => {
      console.log(options)
    })

    const indexValue = ref(0)
    function onChange(event: WechatMiniprogram.CustomEvent) {
      const { value } = event.detail
      Toast(`当前值：${value}`)
    }

    function showPopup() {
      show.value = true
    }

    function onClose() {
      show.value = false
    }

    async function onIncrementClick() {
      const { data } = await request({
        url: 'https://yesno.wtf/api',
        method: 'GET'
      })
      setupStore.increment()
      mpx.showToast({
        icon: 'none',
        title: data.answer
      })
    }

    return {
      ...storeToRefs(setupStore),
      show,
      indexValue,
      columns,
      onIncrementClick,
      onChange,
      showPopup,
      onClose
    }
  }
})
