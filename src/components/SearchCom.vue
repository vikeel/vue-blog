<template>
  <div class="search">
    <f-header @transmitKey="searchArticles"></f-header>
    <div class="main">
      <section class="container">
        <ul class="search-list">
          <li v-for="article in articles">
            <h2 class='h2'><router-link :to="'/detail/' + article._id">{{ article.title }}</router-link></h2>
            <small class='small'>
              <span class="label-col">{{ article.label }}</span>
              <span class="auth-col">{{ article.author }} &middot; {{ article.createTime | moment("YYYY.MM.DD") }}</span>
            </small>
          </li>
          <span>{{ message }}</span>
          <!-- <a class="page" v-if="page" @click="sartchArticles(num += 1)">{{ page }}</a> -->
        </ul>
      </section>
      <f-footer></f-footer>
    </div>
  </div>
</template>

<script>
  import FHeader from './FHeader'
  import FFooter from './FFooter'
  import axios from 'axios'
  export default {
  	name: 'search',
  	data() {
      return {
        articles: [],
        msg: 'Search...',
        message: ''
      }
    },
    watch: {

    },
    components: {
      FHeader,
      FFooter
    },
    // computed: {
    //   keyword : function() {
    //     return this.$store.state.searchKeyword
    //   }
    // },
    mounted: function() {
      this.searchArticles()
    },
    methods: {
      searchArticles: function(key) {
        var key = localStorage.getItem('serKey')
        if(key) {
          axios.get('/api/search?k=' + key).then((response) => {
            var res = response.data
            if(res.status == '0'){
              var articles = res.result
              if(articles.length > 0) {
                this.articles = articles
                this.msg = 'Search...'
              }else {
                this.msg = '没有结果...'
              }
            }
          })
        }else {
          this.message = '请输入关键词搜索结果～'
        }
      }
    }
  }
</script>

<style scoped>
  .search-list > li {
  padding: 1em 1.2em;
  margin-bottom: 1em;
  border-bottom: 1px solid #f3f3f3;
  background-color: #fff;
  }
  .search-list > li:hover {
    background-color: #fafbfc;
  }
  .search-list > li:hover a {
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
</style>