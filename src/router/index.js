import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Detail from '@/components/ArticleDetail'
import Index from '@/components/Index'
import Search from '@/components/SearchCom'
import SLogin from '@/components/per_system/SLogin'
import SReg from '@/components/per_system/SReg'
import Home from '@/components/per_system/Home'
import EditConfig from '@/components/per_system/EditConfig'
import AddArticle from '@/components/per_system/AddArticle'
import ArticleUpdate from '@/components/per_system/ArticleUpdate'
import Error from '@/components/404'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },

    {
      path: '/per_system',
      name: 'home',
      // need login
      meta: { requireAuth: true },
      component: Home
    },
    {
      path: '/per_system/editconfig',
      name: 'editconfig',
      component: EditConfig
    },
    {
      path: '/per_system/login',
      name: 'login',
      component: SLogin
    },
    {
      path: '/per_system/reg',
      name: 'reg',
      component: SReg
    },
    {
      path: '/per_system/addarticle',
      name: 'addarticle',
      // need login
      meta: { requireAuth: true },
      component: AddArticle
    },
    {
      path: '/per_system/editarticle',
      name: 'editarticle',
      // need login
      meta: { requireAuth: true },
      component: ArticleUpdate
    },
    {
      path: '/404',
      name: 'error',
      component: Error
    }
  ]
})
