/*
 * @Author: 张天昊
 * @Date: 2023-07-12 17:56:23
 * @LastEditTime: 2023-07-13 15:38:12
 * @LastEditors: 张天昊
 * @Description:
 * @FilePath: /mpxjs-starter/src/app.config.js
 */
module.exports = {
  pages: [
    './pages/index/index',
    './pages/setup/index',
    './pages/class-and-style/index',
    './pages/component-hoisting/index',
    './pages/wxml-and-wxs/index',
    './pages/event/index',
    './pages/mpxuse/index',
    './pages/props/index'
  ],
  packages: ['./packages/sub/app.mpx?root=pkgSub'],
  window: {
    navigationBarBackgroundColor: '#fff',
    navigationBarTextStyle: 'black'
  },
  usingComponents: {
    NavigationBar: '@/components/NavigationBar'
  }
}
