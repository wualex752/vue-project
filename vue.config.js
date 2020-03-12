module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-project/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/style/_mixin.scss";`
      }
    }
  }
}