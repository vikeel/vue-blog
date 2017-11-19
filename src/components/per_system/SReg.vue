<template>
  <article class="modal">
    <div class="login-form">
      <h3>注册</h3>
      <p><input type="text" v-model="username" placeholder="请输入用户名"></p>
      <p><input type="password" v-model="password" placeholder="请输入密码"></p>
      <p><input type="password" v-model="repassword" placeholder="请再次输入密码"></p>
  	  <p><span class="msg" v-if="isShow">{{ msg }}</span></p>
  	  <button type="button" :disabled="isReg" @click="reg">注册</button>
    </div>
  </article>
</template>

<script>
  import axios from 'axios'
  export default {
  	name: 'Home',
  	data() {
  	  return {
  	  	username: '',
  	  	password: '',
  	  	repassword: '',
  	  	msg: '',
        isShow: false,
  	  }
  	},
    computed: {
      isReg: function() {
        return this.$store.state.isReg
      }
    },
    mounted: function() {
      return this.webInfo()
    },
  	methods: {
  	  reg: function() {
        if(this.username == '' || this.password == '' || this.repassword == '') {
          this.isShow = true
          this.msg = '请输入正确的字段！'
        }else {
    	  	axios.post('/api/reg', {
    	  	  "username": this.username,
    	  	  "password": this.password,
    	  	  "repassword": this.repassword
    	  	}).then((response) => {
    	  		var res = response.data
    	  		if(res.status == '0') {
    	  		  this.msg = '注册成功'
    	  		  this.$router.push({path: '/per_system'})
    	  		  this.$store.commit('updateUserInfo', res.result.name)
    	  		}else {
              this.isShow = true
    	  		  this.msg = '用户名已存在'
    	  		}
    	  	})
        }
  	  }
  	}
  }
</script>

<style>
  
</style>