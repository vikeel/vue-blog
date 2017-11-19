<template>
  <header class="header header-fixed-top">
    <h1 class="logo"><router-link to='/per_system'>管理中心</router-link></h1>
    <nav class="nav">
      <ul>
        <li>
        <router-link to='/per_system/editconfig'>+ 配置网站</router-link>
        </li>
        <li>
          <router-link to='/per_system'>L 文章列表</router-link>
        </li>
        <li>
          <router-link to='/per_system/addarticle'>+ 添加文章</router-link>
        </li>
      </ul>
    </nav>
    <div class="logout">
      <span>{{ userName }} &nbsp;</span>
      <a href="#" @click="logout">登出</a>
      <router-link to='/'>&crarr; 前台</router-link>
    </div>
  </header> 
</template>

<script>
import SLogin from './SLogin'
import axios from 'axios'
export default {
  name: 'SHeader',
  data() {
    return {
      name: ''
    }
  },
  components: {
    SLogin
  },
  computed: {
    userName() {
      return this.$store.state.userName
    }
  },
  methods: {
    logout() {
      axios.post('/api/logout').then((response) => {
        let res = response.data
        if(res.status=="0") {
          this.$router.push({path: '/per_system/login'})
        }
      })
    }
  }
  
}
</script>

<style scoped>
  .header {
    border-bottom: 1px solid #eee;
    box-shadow: 0 1px 3px #eee;
    background-color: #fff;
  }
  .header-fixed-top {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }
  .logo {
    float: left;
    margin-left: 2.5em;
    margin-right: 120px;
  }
  .logo a {
    display: inline-block;
    padding: .3em .5em;
    font-size: .8em;
    font-weight: 500;
    color: #007fff;
  }
  .nav {
    float: left;
  }
  nav li {
    display: inline-block;
  }
  nav a {
    display: inline-block;
    padding: .95em .8em;
    font-size: 1.1em;
    line-height: 1.1em;
  }
  nav a:hover {
    color: #007fff;
  }
  .logout {
    float: right;
    padding: .92em .8em;
    text-align: center;
    background-color: #f6f8fa;
  }
</style>