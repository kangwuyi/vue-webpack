import Vue from 'vue'
import Router from 'vue-router'

import NavMenu from "../../../view/index/NavMenu.vue";

//注册全局头部、底部组件
//Vue.component('NavMenuVue', NavMenu);
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Index,
            children: [{
                path: '',
                component: NavMenu,
                meta: ['NavMenu'],
            }]
        }
    ]
})