<template>
  <div id="index">
    <f-header></f-header>
    <div class="main">
      <section class="container detail">
        <h2>{{ article.title }}</h2>
        <div class="article-info">
          <div class="head">清</div>
          <div class="auth">
            <span>{{ article.author }}&nbsp;</span>
            <small>发布于：{{ article.createTime | moment("YYYY.MM.DD") }}</small>
          </div>
          <div class="tools">
            <small>标签：{{ article.label }}</small>
          </div>
        </div>
        <mavon-editor class="content" v-html="compileMk"></mavon-editor>
      </section>
      <f-footer></f-footer>
    </div>
  </div>
</template>

<script>
import FHeader from './FHeader'
import FFooter from './FFooter'
import axios from 'axios'
import marked from 'marked'
import {mavonEditor} from 'mavon-editor'

export default {
  name: 'index',
  data () {
    return {
      article: {},
      content: ''
    }
  },
  components: {
    FHeader,
    FFooter,
    mavonEditor
  },
  computed: {
    compileMk: function() {
      var content = this.content
      return marked(content, {gfm:true,sanitize:false})
    }
  },
  mounted: function() {
  	this.findById()
  },
  methods: {
  	findById() {
      var id = this.$route.params.id
  	  axios.get('/api/' + id)
        .then((result) => {
          let res = result.data
    	  	this.article = res.result
          this.content = res.result.content
  	  })
  	}
  }
}
</script>

<style scoped>
  span, small {
    line-height: 1em;
  }
  small {
    color: #a0a0a0;
  }
  .detail {
    padding: 12px 18px 50px 18px;
    box-shadow: 0 0 3px #ddd;
    background-color: #fefefe;
  }
  .detail h2 {
    font-size: 2em;
    font-weight: 500;
    color: #464646;
  }
  .article-info {
    margin-bottom: 42px;
  }
  .head {
    float: left;
    padding: .8em;
    border: 1px solid #b2d6f9;
    border-radius: 1.6em;
    font-size: 1.2em;
    line-height: 1em;
  }
  .auth {
    margin-left: 68px;
    padding: 5px 2px;
  }
  .auth > span {
    font-size: 1.1rem;
    color: #42b983;
  }
  .tools {
    margin-left: 68px;
  }
  .v-note-wrapper {
    background: inherit;
  }
  .content {
    letter-spacing: 1px;
    line-height: 1.8em;
  }

</style>