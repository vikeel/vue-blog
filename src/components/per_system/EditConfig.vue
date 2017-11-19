<template>
  <div class="config">
    <s-header></s-header>
    <div class="main">
      <section class='container add-article'>
        <input type="hidden" v-model="id">
        <label>网站名称：</label><input type="text" v-model="title"><br/>
        <label>关键词语：</label><input type="text" v-model="keywords"><br/>
        <label>网站简介：</label><input type="text" v-model="description"><br/>
        <label>关于本站：</label><mavon-editor class="mav" v-model="about"></mavon-editor><br/>
        <label>开放注册：</label><input type="checkbox" class="tool-btn" v-model="isReg"><span>{{isReg}}<small>-[true表示禁止，false表示开放]</small></span><br/>
        <button type="button" class="btn" @click="editWebinfo">提交</button>
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
  	name: 'config',
  	components: {
  	  SHeader,
      mavonEditor
  	},
  	mounted: function() {
      this.checkLogin('/per_system/editconfig', 5)
      this.getWebinfo()
  	},
  	data() {
  	  return {
  	  	id: '',
  	  	title: '',
  	  	keywords: '',
  	  	description: '',
  	  	about: '',
  	  	isReg: true,
  	  	msg: '',
  	  }
  	},
  	methods: {
  	  getWebinfo() {
  	  	axios.get('/webinfo').then((response) => {
  	  	  var res = response.data
  	  	  if(res.status == '0') {
  	  	  	var res = res.result
            res.forEach((info, res) => {
              this.id = info._id
              this.title = info.title
              this.keywords = info.keywords
              this.description = info.description
              this.about = info.about
              this.isReg = info.isReg
            })
  	  	  }
  	  	})
  	  },
  	  editWebinfo: function() {
  	  	axios.post('/api/editConfig', {
  	  	  "id": this.id,
  	  	  "title": this.title,
  	  	  "keywords": this.keywords,
  	  	  "description": this.description,
  	  	  "about": this.about,
  	  	  "isReg": this.isReg
  	  	}).then((response) => {
  	  	  var res = response.data
  	  	  if(res.status == '0') {
  	  	  	this.msg = '编辑成功！'
  	  	  }
  	  	})
  	  }
  	}
  }
</script>

<style>
  .mav {
    margin-left: 10px;
    margin-right: 10px;
  }
  .tool-btn {
    border-radius: 0;
    box-shadow: 0;
  }
</style>