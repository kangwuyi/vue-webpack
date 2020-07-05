exports.security = {
    csrf: {
        enable: false,
        ignoreJSON: true,
    },
    domainWhiteList: ['http://apiv2.chujingyi.cn']
}
exports.config = {
    cors: {
        origin: '*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
}