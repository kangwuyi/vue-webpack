module.exports = {
    proxy: {
        '/v2': {    //将www.exaple.com印射为/apis
            target: 'http://apiv2.chujingyi.cn/',  // 接口域名
            secure: false,  // 如果是https接口，需要配置这个参数
            changeOrigin: true,  //是否跨域
            pathRewrite: {
                '^/v2': ''   //需要rewrite的,
            }
        }
    }
}