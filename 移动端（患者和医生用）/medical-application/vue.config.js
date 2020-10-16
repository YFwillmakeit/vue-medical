module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.16.6.115:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
