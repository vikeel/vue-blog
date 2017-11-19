<template>
  <div id="add-article">
    <s-header></s-header>
    <div class="main">
      <section class='container add-article'>
        <input type="hidden" v-model="id">
        <label>作者：</label><input type="text" v-model="author"><br>
        <label>标题：</label><input type="text" v-model="title"><br>
        <label>正文：</label><mavon-editor v-model="content"></mavon-editor><br>
        <label>标签：</label><input type="text" v-model="label"><br>
        <button type="button" class="btn" @click="EditArticle">发布</button>
        <p>{{ msg }}</p>
      </section>
    </div>
  </div>
</template>

<script>
import SHeader from './SHeader'
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import axios from 'axios'
export default {
  name: 'addarticle',
  components: {
  	SHeader,
    mavonEditor
  },
  data() {
  	return {
      id: '',
      author: '',
      title: '',
      label: '',
      content: '',
      msg: ''
  	}
  },
  mounted: function() {
    this.checkLogin('/per_system/editarticle', 5)
    this.findById()
  },
  methods: {
  	findById() {
      var id = this.$route.params.id
      if(id == null) {
        return
      }else {
    	  axios.get('/api/' + id)
          .then((response) => {
            let res = response.data.result
      	  	this.id = res._id
            this.author = res.author
            this.title = res.title
            this.label = res.label
            this.content = res.content
    	  })
      }
  	},
  	EditArticle() {
  	  axios.post('/api/editArticle', {
        "id": this.id,
  	  	"author": this.author,
  	  	"title": this.title,
  	  	"label": this.label,
  	  	"content": this.content
  	  }).then((result) => {
  	  	let res = result.data
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