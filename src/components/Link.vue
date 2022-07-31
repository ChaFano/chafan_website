<template>

  <div class="index">
    
    <div class="title">
        <h3> FUNING WEBSITE</h3>
        <h6>学习有趣的东西 Enrich Your Soul</h6> 
    </div>
    <br>
    <br>
    <br>
    <div v-for="item in linkList" :key="item.url" class="rang">
          <div class="link_me" :style="{backgroundColor:item.b_color}">
            <el-link :href="item.url">{{item.websit}}</el-link>
            <br>
            <br>
          <span>{{item.introduction}}</span>
    </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Link",
  data() {
    return {
      linkList:[
        {
          url:"https://element.eleme.io",
          introduction:"网站快速成型工具,Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库,开箱即用！",
          b_color:'orange',
          websit:"Element UI"
        },
        {
          url:"https://vuejs.org/",
          introduction:"渐进式JavaScript 框架 An approachable, performant and versatile framework for building web user interfaces.",
          b_color:'black',
          websit:"VUE.js"
        },
        {
          url:"https://randomuser.me/",
          introduction:"A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.",
          b_color:'#033649',
          websit:"Random User"
        },
        {
          url:"https://developer.mozilla.org/zh-CN/",
          introduction:"层叠是 CSS 的一个基本特征，它是一个定义了如何合并来自多个源的属性值的算法。它在 CSS 处于核心地位，CSS 的全称层叠样式表正是强调了这一点",
          b_color:'#036564',
          websit:"How CSS works"
        },
        {
          url:"https://gitee.com/mirrors/nanoid",
          introduction:"一个小巧、安全、URL友好、唯一的 JavaScript 字符串ID生成器。一个惊人的无意义的完美主义水平, 这简直让人无法不敬佩。",
          b_color:'#FF4364',
          websit:"Nano ID"
        },
        {
          url:"https://codepen.io/",
          introduction:"CodePen About Blog Podcast Advertising Documentation Support Shop For Teams Education Privacy Embeds Asset Hosting",
          b_color:'#2C303A',
          websit:"CodePen"
        },
         
      ]
     
    };
  },
};
</script>


<style scoped>

.index{
  margin-top: 50px;
}

.title{
  height: 200px;
  margin-top: 50px;
  color: #2C303A;
  
}
.link_me{
   padding: 10px 10px 10px 10px;
   width: 400px;
   height: 100px;
   border: 1px solid rgb(235, 235, 225);
   border-radius: 5px;
   margin: 20px 20px 0 0;

}
.rang{
    display: inline-block;
}
.el-link{
  color: #41B883;
}

span{
  color: aliceblue;
}
</style>
