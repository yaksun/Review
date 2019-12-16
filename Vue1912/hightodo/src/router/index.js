import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import News from '../components/News'
import NewsDetail from '../components/NewsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'Todo',
      component:()=>import('../views/Todo')
    },
    {
      path: '/search',
      name: 'Search',
      component:()=>import('../views/Search')
    },
    {
      path: '/show',
      name: 'Show',
      component: () => import('../views/Show'),
      children:[
        {
          path: '/show/home',
          name: 'Home',
          component:Home
        },
        {
          path: '/show/news',
          name: 'News',
          component:News,
          children:[
            {
              // 动态路由传值
              path:'detail/:id',
              name:'NewsDetail',
              component:NewsDetail
            }
          ]
        },

      ]
    },

    {
      path: '/error',
      name: 'error',
      component: () => import('../views/error')
    },
    {
      path:'',
      redirect:'/error'
    }

  ]
})
