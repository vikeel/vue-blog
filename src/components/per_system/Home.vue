<template>
  <div id="home">
    <s-header></s-header>
    <div class="main">
      <section class="container">
        <art-list></art-list>
      </section>
    </div>
  </div>
</template>

<script>
import SHeader from './SHeader'
import ArtList from './ArtList'
import axios from 'axios'
export default {
  name: 'home',
  
  components: {
    SHeader,
    ArtList
  },
  mounted() {
    this.checkLogin('/per_system', 5)
  }
}
</script>

<style>
  table {
    width:100%;
    text-align: center;
  }
  th {

    padding: 10px 0;
  }
  tr td {
    padding: 8px 0;
  }
  .btn {
    cursor: pointer;
  }
</style>