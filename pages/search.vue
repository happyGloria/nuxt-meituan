<template>
  <div class="page">
    <ul>
      <li v-for="(city, idx) in cities"
          :key="idx">{{city}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'search',
  data () {
    return {
      cities: []
    }
  },
  // 注意mounted生命周期，在服务端是不会被执行的。只有created阶段在服务端执行。
  /* async mounted () { // 之前的方式是用该方法是前端渲染页面
    let { status, data: { list } } = await axios.get('/city/list')
    if (status === 200) {
      this.list = list
    }
    // 注意：函数中使用了await，所以函数外部需要使用async
  } */
  async asyncData () {
    // 使用asyncData()函数，表示在render之前，获取异步数据，是服务端渲染页面
    // 另外在此函数中不能写this, 返回数据直接写 return {} // 返回data同名数据

    // 此处将async() 替换为 fetch() 是否可以？
    // 不可以，fetch是用来处理vuex数据，asyncData是用来处理组件数据
    let {
      status,
      data: {
        list
      }
    } = await axios.get('http://localhost:3000/city/list') // 由于是服务端渲染，需写全路径
    console.log('list:', list) // 在服务端出现
    if (status === 200) {
      return {
        cities: list // return 返回data同名数据
      }
    }
  }
}
</script>

<style scoped>
</style>
