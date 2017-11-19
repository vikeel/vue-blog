// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(require('vue-moment'))

var store = new Vuex.Store({
  state: {
  	userName: '',
    articles: '',
    // searchKeyword: '',
    isReg: false,
    logoName: '',
    perMsg: ''
  },
  mutations: {
  	updateUserInfo(state, userName) {
  	  state.userName = userName
  	},
    // searchKeyword(state, keyword) {
    //   state.searchKeyword = keyword
    // },
    isReg(state, isReg) {
      state.isReg = isReg
    },
    logoName(state, title) {
      state.logoName = title
    },
    perMsg(state, message) {
      state.perMsg = message
    }
  }
})

Vue.prototype.checkLogin = function(currentRoute, permission) {
  axios.get('/checklogin').then((response) => {
    let res = response.data
    if(res.status == '0') {  //login == '0'
      if(res.result.permission > permission) {
        this.$router.push(currentRoute)
        this.$store.commit('updateUserInfo', res.result.name)
      }else {
        this.$router.push({path: '/404'})
      }
    }else {
      this.$router.push({path: '/per_system/login'})
    }
  })
}
Vue.prototype.webInfo = function() {
  axios.get("/webinfo").then((response) => {
    var res = response.data
    if(res.status == '0') {
      var res = res.result
      res.forEach((info, res) => {
        this.$store.commit('logoName', info.title)
        this.$store.commit('isReg', info.isReg)
        // this.id = info._id
      })
      // this.title = res.result.title,
      // this.keywords = res.result.keywords,
      // this.description = res.result.description,
      // this.about = res.result.about,
    }
  })
},

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) { 
      next()
  }
  next()
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})


