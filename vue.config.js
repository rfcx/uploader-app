const builderOptions = require('./electron-builder')
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions,
      mainProcessFile: isDev ? 'src/electron/mainDev.js' : 'src/electron/main.js',
      preload: 'src/electron/preload.js',
      nodeIntegration: true
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'RFCx Uploader',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    bg: {
      entry: 'src/electron/backgroundWindow/main.js',
      template: 'public/bg.html',
      filename: 'bg.html',
      title: 'Background',
      chunks: ['chunk-vendors', 'chunk-common', 'bg']
    }
  }
}