<template>
  <div id="app">
  
      <!-- <div>
        <router-link to="/Home">首页</router-link>
      </div> -->
       <div >
      <router-view></router-view> 
      </div>
  </div>
   
</template>

<script>


export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* 页面铺满全屏 */
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  
}
</style>
