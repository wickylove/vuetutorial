import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HardenDown from '@/components/HardenDown'
import HardenDown1 from '@/components/HardenDown.1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/down',
      name: 'HardenDown',
      component: HardenDown
    },
    {
      path: '/down1',
      name: 'HardenDown1',
      component: HardenDown1
    }
  ]
})
