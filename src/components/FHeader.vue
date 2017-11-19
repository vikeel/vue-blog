<template>
  <header class="header header-fixed-top">
    <h1 class="logo"><router-link to='/'>{{ logoName }}</router-link></h1>
    <nav class="navbar container">
      <ul class="nav">
        <li>
          <router-link to='/'>首页</router-link>
        </li>
        <li>
          <router-link to='/about'>关于本站</router-link>
        </li>
      </ul>
      <div class="search">
        <input type="text" @keyup.enter="goSearch" v-model="keyword" :placeholder="msg"/>
        <a type="button" @click="goSearch">搜</a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header',
  data(){
    return {
      keyword: '',
      msg: 'Search...'
    }
  },
  computed: {
    logoName: function() {
      return this.$store.state.logoName
    }
  },
  mounted: function() {
    return this.webInfo()
  },
  methods: {
    goSearch: function() {
      var key = this.keyword || ''  //后期安全探索
      if(key == '') {
        this.msg = '请输入关键词...'
      }else {
        // 清除本地存储的serKey
        localStorage.removeItem('serKey')
        // 设置新的本地存储serKey
        localStorage.setItem('serKey', key)
        this.$router.push({path: '/search'})
        // 此处保证在search页搜索时将key传输给执行函数
        this.$emit('transmitKey', key)
        // this.$store.commit('searchKeyword', key)
      }
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
  }
  .logo a {
    display: inline-block;
    padding: .4em .5em;
    font-size: .85em;
    font-weight: 500;
    color: #007fff;
  }
  .nav {
    float: left;
  }
  .nav li {
    display: inline-block;
  }
  .nav a {
    display: inline-block;
    padding: .95em .8em;
    font-size: 1.1em;
    line-height: 1.1em;
  }
  .nav a:hover {
    color: #007fff;
  }
  .nav a:focus {
    color: #007fff;
  }
  @media screen and (max-width: 600px) {
    .logo {
      margin-left: 0;
    }
  }
  .search {
    float: right;
    padding-top: 18px;
    border-bottom: 1px solid #eee;
  }
  .search > input {
    width: 160px;
    padding: .2em .6em;
    border: 0;
    font-size: .9em;
    outline: none;
    transition: .6s;
  }
  .search > input:focus {
    width: 200px;
  }
  .search > a {
    padding: 0 .5em;
    font-size: .9em;
    font-style: italic;
    line-height: 16px;
    color: #007fff;
    cursor: pointer;
    outline: none;
  }
</style>
