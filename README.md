# nuxt-meituan

> Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install*[see note below]

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

*Note: Due to a bug in yarn's engine version detection code if you are
using a prerelease version of Node (i.e. v7.6.0-rc.1) you will need to either:
  1. Use `npm install`
  2. Run `yarn` with a standard release of Node and then switch back

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## 目录说明

```
├── nuxt-美团
|   ├── assets  // 静态资源目录（css, js）
|   ├── build // 编译后目录
|   ├── components // 组件
|   ├── layout // 模板布局
|   ├── pages // 页面组件，nuxt会根据文件自动生成对应的路由代码
|   ├── plugin // 插件（swiper、qs、axios）
|   ├── server // koa相关程序
|   ├── static # 静态文件目录, 会映射到应用的根目录下
|   ├── store # vuex状态管理目录，如果有此目录，认为启用了vuex
|   ├── nuxt.config.js # nuxt配置文件
|   ├── backpack.config.js  # 后端编译脚本
```