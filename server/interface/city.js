import Router from 'koa-router'
const router = new Router({
  prefix: '/city'
})

router.get('/list', async (ctx) => {
  ctx.body = {
    list: ['北京', '天津', '上海', '重庆']
  }
})
export default router
