<template>
  <div class="page">
    <ul>
      <li v-for="(city, idx) in $store.state.navbar.navbar"
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
  async asyncData () {
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
