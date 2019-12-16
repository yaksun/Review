import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/todo',
      name: 'Todo',
      component:()=>import('../views/Todo')
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
