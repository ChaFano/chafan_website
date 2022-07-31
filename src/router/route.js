import Vue from 'vue'
import Router from 'vue-router'
import Navigate from '@/components/Navigate.vue'
import About from '@/components/About.vue'
import Link from '@/components/Link.vue'
import Index from '@/components/Index.vue'
import Login from '@/components/Login.vue'
import Blog from '@/components/Blog.vue'
Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
      {
        path: '/',
        name: 'Navigate',
        component: Navigate,
        children:[
          {
            path: 'About',
            name: 'About',
            component: About
          }, 
          {
            path: 'Link',
            name: 'Link',
            component: Link
          }, 
          {
            path: 'Index',
            name: 'Index',
            component: Index
          }, 
          {
            path: 'Login',
            name: 'Login',
            component: Login
          }, 
          {
            path: 'Blog',
            name: 'Blog',
            component: Blog
          }, 
        ],
      },
      
      
    ]
  })