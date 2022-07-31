<template>
  <div class="index">
    
    <div class="left" v-for="item in List" :key="item.content">
           <el-timeline>
              <el-timeline-item placement="bottom" :color="item.color" >
                <el-card>
                  <h4>{{item.content}}</h4>
                  <el-progress :text-inside="true" :percentage="item.score" :status="item.type" :stroke-width="15"></el-progress>
                </el-card>
              </el-timeline-item>
          </el-timeline>
    </div>

  </div>

</template>

<script>
export default {
    name:'About',
    data() {
      return {
        List: [
        {
          content: 'Java',
          color: '#0bbd87',
          score:'50',
          type:'format'
        }, 
        {
          content: 'Python',
          color: '#FFA500',
          score:'30',
          type:'exception'
        }, 
        {
          content: 'Vue.js',
          color: '#FF4364',
          score:'20',
          type:'success'
        }, 
        {
          content: 'LayUi',
          color: '#036564',
          score:'30',
          type:'warning'
        }, 
        {
          content: 'SpringBoot',
          color: '#FF4364',
          score:'40',
          type:'exception'
        }, 
        {
          content: 'SQL',
          color: '#036564',
          score:'40',
          type:'exception'
        }, 
        {
          content: 'Spring MVC',
          color: '#FF4364',
          score:'40',
          type:'success'
        },
        {
          content: '开发经验',
          color: '#0bbd87',
          score:'60',
          type:'format'
        }, 
        {
          content: '数据结构',
          color: '#036564',
          score:'30',
          type:'warning'
        }, 
        {
          content: 'C# 开发',
          color: '#FFA500',
          score:'30',
          type:'exception'
        }, 
        {
          content: '编写文档',
          color: '#FF4364',
          score:'70',
          type:'success'
        },
        {
          content: 'Linux',
          color: '#0bbd87',
          score:'30',
          type:'format'
        }
        ]
      };
    },
     methods: {
      
    }
}
</script>


<style>
    .index{
      margin-top: 50px;
    }

    .left{
       margin-top: 20px;
      width: 30%;
      display: inline-block;
    }
   
    .el-card{
      width: 300px;
      height: 100px;
    }
</style>