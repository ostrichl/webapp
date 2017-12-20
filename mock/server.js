var app = require('koa')()
var router = require('koa-router')()

var homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    console.log('首页-广告')

    this.body = homeAdData
})

app.use(router.routes())
    .use(router.allowedMethods())
app.listen(3000)