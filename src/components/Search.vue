<template>

<div>
  <img src="../assets/logo.png" height="52" width="132" class="logo">
  <div class="search-box">
    <input type="text" class="input-value" 
      v-model="keyword" 
      @focus="onFocus" 
      @blur="onBlur" 
      @keyup="get()"
      @keydown.enter="search()">
    <input type="submit" class="submit" @click="search()">
  </div>
  <transition name="fade">
    <div class="focus-box" v-if="showFocusBox"></div>
  </transition>
</div>
  
</template>


<script>

import jsonp from 'jsonp'

export default  {
  name : 'search',
  data(){
    return{
      msg : 'testMsg',
      keyword : '',
      showFocusBox : false,
      searchSrc: 'http://cn.bing.com/search?q=',
      Datas : []
    }
  },
  methods : {
    get(){
      var that = this
      jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8',null, function(err,data){
        that.Datas = data.s;
        console.log(that.Datas)
      })
      
    },
    onFocus(){
      this.showFocusBox = true;
    },
    onBlur(){
      this.showFocusBox = false;
    },
    search(){
      if(this.keyword.length == 0){
        window.open(this.searchSrc + '时间');
      }
      window.open(this.searchSrc + this.keyword);
      this.keyword = '';
    }
  }
}

</script>


<style>
  .logo, .search-box{
    float: left;
    z-index: 99;
    position: relative;
  }
  .search-box{ 
    margin-left: 30px; 
    background: white;
    border: 1px solid #ccc;
  }
  .search-box .input-value{
    height: 46px;
    width: 550px;
    font-size: 20px;
    padding-left: 10px;
    outline: none;
    border: none;
  }

  .submit{ 
    width: 45px; 
    height: 48px; 
    background: url(../assets/search-btn.png)no-repeat 0 0; 
    border: none;
    text-indent: -999px;
    cursor: pointer;
    padding: 0;
  }
  .focus-box{
    width: 9999px;
    height: 9999px;
    background: black;
    position: fixed;
    opacity: .55;
    left: 0;
    top: 0;
    z-index: 3;
  }
  .fade-enter-active, .fade-leave-active{
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>