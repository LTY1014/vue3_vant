const { defineConfig } = require('@vue/cli-service')

const port = process.env.VUE_APP_PORT
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: port,
    host: '127.0.0.1',
    https: false,
    open: true,
    // proxy: {
    //   '/api': {
    //     target: `http://127.0.0.1:8098`, //接口域名
    //     changOrigin: true, //是否跨域
    //     ws: true, //是否代理websockets
    //   },
    // },
  },
})
