<template>
  <div class="article-list">
  	<ul class="article-list">
  	  <div class="loading" v-if="isLoading">
  	  </div>
      <li v-for="article in articles">
        <h2 class='h2'><router-link :to="{name: 'detail',params: {id: article._id}}">{{ article.title }}</router-link></h2>
        <small class='small'>
          <span class="label-col">{{ article.label }}</span>
          <span class="auth-col">{{ article.author }} &middot; {{article.createTime | moment("YYYY.MM.DD")}}</span>
        </small>
      </li>
      <a class="page" @click="getArticles(num += 1)">{{ page }}</a>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
  	name: 'articlelist',
  	data: function() {
  	  return {
  	  	isLoading: false,
  	  	num: 0,  //每次点击加一页
        page: '',
  	  	articles: []
  	  }
  	},
  	mounted: function() {
  	  this.getArticles()
  	},
  	methods: {
	  getArticles(num) {
	  	this.isLoading = true
	    var index = num || 0
	    var t = 7  //每页显示数量
	    axios.get('/api?p=' + index + '&t=' + t).then((response) => {
	      this.isLoading = false
	      var res = response.data
	      if(res.status == '0') {
	        var articles = res.result
	        this.articles = articles
	        if(articles.length < t) {
	          this.isShow = false
	          this.page = '么有了，去～'
	          //返回条目为0或<每页数量返回首页
	          this.num = -1
	        }else {
	          // this.articles = articles
	          this.page = '下一页'
	        }
	      }
	    })
	  }
  	}
  }
</script>

<style>
  .article-list > li {
	  padding: 1em 1.2em;
	  margin-bottom: 1em;
	  border-bottom: 1px solid #f3f3f3;
	  box-shadow: 1px 1px 2px #ddd;
	  background-color: #fff;
	}
	.article-list > li:hover {
	  background-color: #fafbfc;
	}
	.article-list > li:hover a {
	  color: #007ddd;
	}
	.h2 {
	  margin-bottom: .6em;
	  font-size: 1.2em;
	  font-weight: 500;
	}
	.h2 > a {
	  color: #333;
	}
	@media screen and (min-width: 768px) {
	  
	}
	.small {
	  font-size: .8em;
	}
	.small > span {
	  border-radius: 14px;
	  margin-right: .5em;
	  padding: .1em .5em;
	}
	.label-col {
	  color: #007fff;
	}
	.auth-col {
	  color: #a1a1a1;
	}

	/* page */
	.page {
	  display: block;
	  margin-top: 28px;
	  margin-bottom: 20px;
	  padding: 10px 20px;
	  text-align: center;
	  font-size: 1.1em;
	  color: #007ddd;
	  cursor: pointer;
	  background-color: #f6f8fa;
	}
</style>