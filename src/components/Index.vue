<template>
  <div id="index">
    <f-header></f-header>
    <div class="main">
      <section class="container">
        <aside class="aside">
          <ul class="tag">
            <div class="loading" v-if="isLoading">
            </div>
            <li v-for="tag in tags">
              <a>{{ tag }}</a>
            </li>
          </ul>
        </aside>
        <article-list></article-list>
      </section>
      <f-footer></f-footer>
    </div>
  </div>
</template>

<script>
import FHeader from './FHeader'
import FFooter from './FFooter'
import ArticleList from './ArticleList'
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      isLoading: false,
      tags: [],
      keyword: ''
    }
  },
  components: {
    FHeader,
    FFooter,
    ArticleList
  },
  mounted: function() {
    this.getTags()
  },
  methods: {
    getTags() {
      this.isLoading = true
      axios.get('/api').then((response) => {
        this.isLoading = false
        var res = response.data
        var tagArr = []
        if(res.status == '0') {
          res.result.forEach((tagItem) => {
            tagArr.push(tagItem.label)
          })
          //此处用es6的set为数组重法
          this.tags = [...new Set(tagArr)]
        }
      })
    }
  }
}
</script>

<style scoped>
.aside {
  /*position: absolute;*/
  float: left;
  width: 180px;
  padding: 12px;
  box-shadow: 1px 1px 2px #ddd;
  background-color: #fff;
}
.tag > li {
  display: inline;
}
.tag a{
  display: inline-block;
  margin: 3px;
  padding: .15em .5em;
  border-radius: 16px;
  font-size: .85em;
  line-height: 16px;
  color: #aaa;
  background-color: #f9f9f9;
  cursor: pointer;
}
.tag a:hover {
  color: #fff;
  background-color: #a2d4ff;
}
@media screen and (max-width: 600px) {
  .aside {
    display: none;
  }
}
.article-list {
  margin-left: 200px;
}
@media screen and (max-width: 600px) {
  .article-list {
    margin-left: 0;
  }
}

</style>
