module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    require('postcss-import'),
    require('postcss-px2units')({
      targetUnits: 'upx'
    }),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5'
    }),
    require('@dcloudio/vue-cli-plugin-uni/packages/postcss')
  ]
}
