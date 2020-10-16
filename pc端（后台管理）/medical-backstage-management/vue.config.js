module.exports = {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://172.16.5.175:8080',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': './'
                    }
                }
            }
        }
    }