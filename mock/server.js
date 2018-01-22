var app = require('koa')()
var router = require('koa-router')()

var homeAdData = require('./home/ad')
router.get('/api/homead', function *(next) {
    console.log('首页-广告')

    this.body = homeAdData
})

var homeListData = require('./home/list')
router.get('/api/homelist/:city/:page', function *(next) {
    console.log('首页-猜你喜欢')

    //const params = this.param
    //const paramsCity = params.city
    //const paramsPage = params.page
    //
    //console.log('当前城市：' + paramsCity)
    //console.log('当前页数：' + paramsPage)
    this.body = homeListData
})


app.use(router.routes())
    .use(router.allowedMethods())
app.listen(3000)