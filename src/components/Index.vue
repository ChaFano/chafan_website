<template>
    <div class="contain">
        <br>
        <br>
        <span class="title">RANDOM USER GENERATOR</span>
        <br>
        <br>
        <span class="font1">A free, open-source API for generating random user data. Like Lorem Ipsum, but for people.</span>

        <div class="box_me">
            <div class="avator"></div>
             <span class="font2">My address is</span>
             <br>
             <br>
             <span class="font3">www.chafan.qq@com</span>
             <br>
             <div>
                 <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="" name=""></el-tab-pane>
                    <el-tab-pane label="" name=""></el-tab-pane>
                    <el-tab-pane label="" name=""></el-tab-pane>
                    <el-tab-pane label="" name=""></el-tab-pane>
                    <el-tab-pane label="" name=""></el-tab-pane>
                    <el-tab-pane label="同性交友" name="first"><span class="font3">GitHub ChaFano</span></el-tab-pane>
                    <el-tab-pane label="博客" name="second"><span class="font3">csdn 茶凡_Matrix</span></el-tab-pane>
                    <el-tab-pane label="哔哩哔哩" name="three"><span class="font3"> 茶凡_Matrix make frends</span></el-tab-pane>
                </el-tabs>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name:'Index',
    data(){
        return{
            tablist:[
                {icon:'el-icon-message',content:'www.chafan.qq@com'},
                {icon:'el-icon-position',content:'csdn 茶凡_Matrix'},
                {icon:'el-icon-lollipop',content:'BiliBili making frends'}
            ],
            activeName: 'second',

        }
    }
}
</script>

<style>

   .contain{
    height: 400px;
    width: 100%;
    background-color: #2C2E31;
    position:absolute;
    margin-top: 35px;
    right:0;
    left:0;
     
   }

    .title{
        font-size: 60px;
        font-weight: 150;
        color: white;
        font-family:'Courier New', Courier, monospace;
    }

    .font1{
        font-size: 20px;
        color: white;
    }

    .font2{
        font-size: 20px;
        color: #C1C1C1;
    }

    .font3{
        font-size: 30px;
        color: #0a0a0a;
        
    }

    .box_me{
        height: 400px;
        width: 600px;
        background-color: #FFFFFF;
        border: 2px solid #F7F9F8;
        position: absolute;
        top: 500px;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 5px;
        

    }

    .avator {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        display: block;
        margin: 10px auto;
        background-size: 100% 100% !important;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("https://randomuser.me/api/portraits/men/42.jpg");
        border: 2px solid #aaa8a8;
    }




   
</style>