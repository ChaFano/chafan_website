<template>
  <div>
        <el-container >
        
                <el-header >
                    <el-menu
                      :default-active="activeIndex"
                      mode="horizontal"
                      @select="handleSelect"
                      background-color="#222222"
                      text-color="#fff"
                      router
                    >
                        <el-menu-item
                          v-for="(item, i) in navList"
                          :key="i"
                          :index="item.name"
                        >
                          <template slot="title">
                            <i :class="item.icon"></i>
                              <span> {{ item.navItem }}</span>
                          </template>
                        </el-menu-item>
                    </el-menu>
              </el-header>

          <el-main>
            <router-view></router-view>
          </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    name:'Navigate',
     data() {
    return {
      navList: [
            { name: "/Index", navItem: "Home",icon:'el-icon-discount' },
            { name: "/Link", navItem: "Link" ,icon:'el-icon-position'},
            { name: "/About", navItem: "About",icon:'el-icon-reading'},
            { name: "/Login", navItem: "login",icon:'el-icon-coordinate'},
            { name: "/Blog", navItem: "Blog",icon:'el-icon-edit'},
        ],
        clientHeight:'',
    };

    }
}
</script>

<style>

    span{
        font-family: 'Courier New', Courier, monospace;
        font-size: 15px;
        font-weight: bold;
    }

    .div_header{
      width: 100%;
      height: 100px;
      background-color:"#222222";
    }

/* 导航栏固定 */
    .el-header{
    width: 1757px;
    margin-left: -30px;
    position: fixed;
    top: 0;
    z-index:9999;
    
    }

    
</style>