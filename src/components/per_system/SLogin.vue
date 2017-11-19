<template>
  <article class="modal">
    <div class="login-form">
      <h3>登录</h3>
      <p><input type="text" v-model="name" placeholder="用户名"></p>
      <p><input type="password" v-model="pwd" placeholder="密码"></p>
      <p><span class="msg" v-if="isShow">{{ msg }}</span></p>
      <button type="button" @click="login">登录</button>
      <router-link to="/per_system/reg">注册</router-link>
    </div>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data() {
  	return {
  	  name: '',
  	  pwd: '',
      userName: '',
      msg: '',
      isShow: false
  	}
  },
  methods: {
  	login() {
  	  axios.post('/api/login', {
  	  	"name": this.name,
  	  	"pwd": this.pwd
  	  }).then((response) => {
  	  	let res = response.data
        if(res.status == "0") {
          this.$router.push({path: '/per_system'})
          this.$store.commit('updateUserInfo', res.result.name)
        }else {
          this.isShow = true
          this.msg = '用户名或密码错误！'
        }
  	  })
  	}
  }
}
</script>

<style>
  /*.modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background-color: #007ddd;
    filter: alpha(opacity=80);
    opacity: 0.8;
  }*/
  
</style>