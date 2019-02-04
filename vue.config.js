// webpack configuration via vuecli3
// use vue inspect to debug

'use strict'
const path = require('path')

// see .env files for additional variables available at runtime
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@atoms', path.resolve(__dirname, 'src/components/atoms'))
      .set('@elements', path.resolve(__dirname, 'src/components/elements'))
      .set('@icons', path.resolve(__dirname, 'src/components/icons'))
      .set('@layout', path.resolve(__dirname, 'src/components/layout'))
      .set('@templates', path.resolve(__dirname, 'src/components/templates'))
      .set('@data', path.resolve(__dirname, 'src/data'))
      .set('@root', path.resolve(__dirname, 'src'))
      .set('@', path.resolve(__dirname, 'src'))
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      // patterns: [path.resolve(__dirname, 'src/styles/abstracts/*.styl')],
      patterns: [
        path.resolve(__dirname, 'src/assets/styles/00-settings/__settings.scss'),
        path.resolve(__dirname, 'src/assets/styles/01-tools/__tools.scss'),
      ],
    },
  },
}
