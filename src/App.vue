<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  box-sizing: border-box;
}
body, ul {
  margin: 0;
}
ul {
  padding: 0;
}
ul{
  list-style: none;
}
a {
  text-decoration: none;
}
h1 {
  margin: 0;
}
h2 {
  margin-top: 0;
}
html {
  font-size: 16px;
}
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #333;
  background-color: #f6f8fa;
}
header, main, section {
  display: block;
}
header:before, .container:before {
  content: ' ';
  display: table;
}
header:after, .container:after {
  content: ' ';
  display: table;
  clear: both;
}

.container {
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width: 600px) {
  .container {
    max-width: 680px;
  }
}
/* main */
.main {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
}
@media screen and (max-width: 600px) {
  .logo {
    margin-left: 0;
  }
}

@media screen and (min-width: 1200px) {
  
}

section {
  /*margin-top: 60px;*/
}
@media screen and (min-width: 768px) {
  
}
@media screen and (min-width: 1024px) {
  
}
@media screen and (min-width: 1200px) {
  
}
.btn {
  float: right;
  margin-top: 10px;
  padding: 8px 38px;
}
.router-link-active {
  color: #007fff;
}
/* login page style */
.login-form {
    width: 380px;
    margin: 180px auto;
    padding-bottom: 20px;
    text-align: center;
    background-color: #fff;
    outline: 8px solid rgba(122,189,214,.9);
  }
  p {
    margin: 28px 0;  /* 此处有margin重叠 */
  }
  .login-form h3 {
    margin-top: 0;
    padding: 5px;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
    background-color: #f5f5f5;
  }
  .login-form input {
    padding: 5px 8px;
    border: 1px solid #ccc;
    box-shadow: 0 0 3px #f5f5f5;
    font-size: 16px;
    outline: 5px solid rgba(122,189,214,.2);
  }
  .login-form button {
    padding: 5px 25px;
    border: 0;
    font-size: 16px;
    box-shadow: 0 0 2px #888;
    background-color: inherit;
  }
  .msg {
    padding: 5px 12px;
    font-size: 14px;
    line-height: 14px;
    background-color: #ffbf70;
  }
  /*** admin addarticle page style ***/
  .add-article {
    padding: 25px 22px;
    background-color: #fefefe;
  }
  .add-article label {
    float: left;
    padding-right: 10px;
  }
  .add-article input {
    width: 300px;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 0 4px #bbb;
    margin-bottom: 18px;
    padding: 8px 5px;
    outline: none;
  }
  .me {
    margin-bottom: 18px;
  }
  .add-article p {
    color: green;
  }
  .loading {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    box-shadow: 0 3px 4px #bbb;
    margin: 20px auto;
    -webkit-animation: loading .6s infinite linear;
  }
  @-webkit-keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
</style>