<template>
  <div id="error">
  	<h1>404</h1>
  	<p><strong>找不到该网页</strong></p>
  	<p>你访问的网页已经被删除或者已经移动，您可以访问其它网页或者回到<a href="/">首页</a></p>
  </div>
</template>

<script>
  export default {
  	name: 'error'
  }
</script>

<style scoped>
  #error {
  	margin: 200px auto;
  	max-width: 600px;
  	/*text-align: center;*/
  }
  #error h1 {
  	font-size: 4em;
  	font-weight: 500;
  	text-align: center;
  }
  #error p {
  	margin: 10px;
  }
  #error a {
  	color: #007fff;
  }
</style>