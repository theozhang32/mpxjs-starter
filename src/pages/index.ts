/*
 * @Author: 张天昊
 * @Date: 2024-08-27 15:30:09
 * @LastEditTime: 2024-08-27 15:58:06
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /mpx-template/src/pages/index.ts
 */
import { createPage, onLoad } from '@mpxjs/core'
import { storeToRefs } from '@mpxjs/pinia'
import { useSetupStore } from '@/stores/setup'
import { request } from '@/utils/request'

createPage({
  setup() {
    const setupStore = useSetupStore()

    onLoad((options) => {
      console.log(options)
    })

    return {
      ...storeToRefs(setupStore),
      onIncrementClick: setupStore.increment
    }
  }
})
