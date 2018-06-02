import Vue from 'vue'
import Router from 'vue-router'
import heroesList from '@/view/heros/list'
import wuqiList from '@/view/wuqi/list'
import zbList from '@/view/zhuangbei/list'
import heroesAdd from '@/view/heros/add'
import heroesEdit from '@/view/heros/edit'
Vue.use(Router)

export default new Router({
  routes: [
    {name: 'home', path: '/', redirect: {name: 'heroes'}},
    {name: 'heroes', path: '/heroes', component: heroesList},
    {name: 'wuqi', path: '/wuqi', component: wuqiList},
    {name: 'zhuangbei', path: '/zhuangbei', component: zbList},
    {name: 'heroadd', path: '/heroes/add', component: heroesAdd},
    {name: 'heroedit', path: '/heroes/edit/:id', component: heroesEdit}
  ]
})
