<template>
  <div id="home">
    <s-header></s-header>
    <div class="main">
      <section class='container add-article'>
        <label>作者：</label><input type="text" v-model="author"><br>
        <label>标题：</label><input type="text" v-model="title"><br>
        <label>正文：</label><mavon-editor v-model="content" class="me"></mavon-editor>
        <label>标签：</label><input type="text" v-model="label"><br>
        <button class="btn" type="button" @click="addArticle">发布</button>
        <p>{{ msg }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import SHeader from './SHeader'
import axios from 'axios'
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  name: 'addarticle',
  components: {
    SHeader,
    mavonEditor
  },
  data() {
  	return {
  	  author: '',
  	  title: '',
  	  label: '',
  	  content: '',
      msg: ''
  	}
  },
  mounted() {
    this.checkLogin('/per_system/addarticle', 5)
  },
  methods: {
  	addArticle() {
  	  axios.post('/api/editArticle', {
  	  	"author": this.author,
  	  	"title": this.title,
  	  	"label": this.label,
  	  	"content": this.content
  	  }).then((response) => {
  	  	let res = response.data
        if(res.status == '0') {
          this.msg = 'Success!'
        }else {
          this.msg = 'Fail!'
        }
  	  })
  	}
  }
}
</script>

<style>
  
</style>
