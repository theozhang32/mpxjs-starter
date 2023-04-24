import { defineConfig } from 'windicss/helpers'
export default defineConfig({
  preflight: false,
  prefixer: false,
  extract: {
    // 将 .mpx 文件纳入范围（其余 Webpack 类小程序根据项目本身的文件后缀酌情设置）
    include: ['src/**/*.{css,html,mpx}'],
    // 忽略部分文件夹
    exclude: ['node_modules', '.git', 'dist']
  },
  corePlugins: {
    // 禁用掉在小程序环境中不可能用到的 plugins
    container: false
  },
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        'black-pure': '#000',
        black: '#333'
      },
      width: {
        fit: 'fit-content',
        max: 'max-content',
        min: 'min-content'
      }
    }
  }
})
