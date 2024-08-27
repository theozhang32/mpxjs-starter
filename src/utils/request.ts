/*
 * @Author: 张天昊
 * @Date: 2024-08-27 15:54:18
 * @LastEditTime: 2024-08-27 15:57:59
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /mpx-template/src/utils/request.ts
 */
import axios from 'axios'
import mpAdapter from 'axios-miniprogram-adapter'
axios.defaults.adapter = mpAdapter

export const request = axios.create({})

export default request
