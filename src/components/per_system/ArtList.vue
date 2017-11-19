<template>
  <article class="add-article">
    <table>
      <thead>
      	<tr>
      	  <th>作者</th>
      	  <th>标题</th>
      	  <th>标签</th>
      	  <th>时间</th>
      	  <th>编辑</th>
      	  <th>删除</th>
      	</tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" >
      	  <td>vikeel</td>
      	  <td><router-link :to="{name: 'detail',params: {id: article._id}}">{{ article.title }}</router-link></td>
      	  <td>{{ article.label }}</td>
      	  <td>{{ article.createTime | moment('YYYY.MM.DD')}}</td>
      	  <td><router-link :to="{name: 'editarticle', params: {id: article._id}}">&#10010;</router-link></td>
      	  <td><a @click="del(article)" class="btn">&#10008;</a></td>
      	</tr>
      </tbody>
    </table>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  name: 'artlist',
  data () {
    return {
      articles: []
    }
  },
  mounted: function() {
  	this.getArticles()
  },
  methods: {
  	getArticles() {
  	  axios.get("/api").then((response) => {
  	  	var res = response.data
  	  	this.articles = res.result
  	  })
  	},
    del(article) {
      const id = article._id;
      axios.delete('/api/del/' + id).then((response) => {
        let res = response.data
        if(res.status == '0') {
          // 用splice移除DOM
          this.articles.splice(this.articles.indexOf(article), 1)
        }
      })
    }
  }
}
</script>

<style scoped>
  
</style>