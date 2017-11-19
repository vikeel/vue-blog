<template>
  <div id="about">
    <f-header></f-header>
    <div class="main">
      <section class="container about">
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
  name: 'about',
  data () {
    return {
      about: ''
    }
  },
  components: {
    FHeader,
    FFooter,
    mavonEditor
  },
  computed: {
    compileMk: function() {
      var content = this.about
      return marked(content, {gfm:true,sanitize:false})
    }
  },
  mounted: function() {
    return this.webAbout()
  },
  methods: {
    webAbout: function() {
        axios.get('/webinfo').then((response) => {
          var res = response.data
          if(res.status == '0') {
            var res = res.result
            res.forEach((info, res) => {
              this.about = info.about
            })
          }
        })
      },
  }
}
</script>

<style scoped>
.about {
    padding: 12px 26px;
    background-color: #fff;
  }
</style>
