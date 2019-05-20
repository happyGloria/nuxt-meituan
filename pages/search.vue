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
  /* async mounted () { // //该方法是前端渲染页面
    let res = await axios.get('city/list')
    console.log(res)
    if (res.status === 200) {
      this.list = res.data
    }
  } */
  async asyncData () { // 在render之前，获取异步数据，是服务端渲染页面
    let {
      status,
      data
    } = await axios.get('http://localhost:3000/city/list') // 由于是服务端渲染，需写全路径
    console.log('list:', data.list) // 在服务端出现
    if (status === 200) {
      return {
        cities: data.list // return 返回data同名数据
      }
    }
  }
}
</script>

<style scoped>
</style>
