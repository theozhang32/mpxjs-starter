const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { DefinePlugin } = require('webpack')
const MiniProgramTailwindWebpackPlugin = require('@dcasia/mini-program-tailwind-webpack-plugin')
const projectConfig = require('./static/wx/project.config.json')

module.exports = defineConfig({
  pluginOptions: {
    mpx: {
      srcMode: 'wx',
      plugin: {
        hackResolveBuildDependencies: ({ files, resolveDependencies }) => {
          const path = require('path')
          const packageJSONPath = path.resolve('package.json')
          if (files.has(packageJSONPath)) files.delete(packageJSONPath)
          if (resolveDependencies.files.has(packageJSONPath)) {
            resolveDependencies.files.delete(packageJSONPath)
          }
        }
      },
      loader: {}
    }
  },
  /**
   * 如果希望node_modules下的文件时对应的缓存可以失效，
   * 可以将configureWebpack.snap.managedPaths修改为 []
   */
  configureWebpack(config) {
    config.resolve = {
      ...config.resolve,
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }

    config.plugins = [
      ...config.plugins,
      new MiniProgramTailwindWebpackPlugin({
        designWidth: 375
      }),
      new DefinePlugin({
        __APP_ID__: JSON.stringify(projectConfig.appid)
      })
    ]
  }
})
