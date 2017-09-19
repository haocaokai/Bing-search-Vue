<template>
  <!-- 所有组件写在一个父容器里 -->
  <div>
    <h1>{{msg}}</h1>
    <ul>
      <li 
        v-for="(item, index) in tabs"
        v-bind:class='{active:index == num}'
        v-on:click="tab(index)">
        {{item}}
      </li>
    </ul>

    <div class="tabCon">
      <div 
        v-for="(itemCon, index) in tabCons"
        v-if="index == num">
        {{itemCon}}
      </div>
    </div>
  </div>
  
</template>


<script>
export default  {
  name : 'tab',
  data(){
    return {
      msg : 'tab',
      tabs : [1, 2, 3],
      tabCons : ['1111','2222','3333'],
      num : 0
    }
  },
  methods : {
    tab(index){
      this.num = index;
    }
  }
}

</script>


<style>
  ul{width: 120px;margin: 0 auto;padding-left: 0;}
  li{ list-style: none; cursor: pointer; width: 38px; background:pink; border: 1px solid #ccc;}
  li{ display: inline-block; }
  .tabCon{ width: 200px; height: 150px; margin: 0 auto; background: #4AC291;}
</style>