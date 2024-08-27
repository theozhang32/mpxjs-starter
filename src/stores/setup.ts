/*
 * @Author: 张天昊
 * @Date: 2024-08-27 15:39:35
 * @LastEditTime: 2024-08-27 15:40:05
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /mpx-template/src/stores/setup.ts
 */
import { defineStore } from '@mpxjs/pinia'
import { ref, computed } from '@mpxjs/core'

export const useSetupStore = defineStore('setup', () => {
  const count = ref(0)
  const name = ref('pinia')
  const myName = computed(() => {
    return name.value
  })
  function increment() {
    count.value++
  }
  return { count, name, myName, increment }
})
