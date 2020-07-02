import Vue from 'vue'
import Router from 'vue-router'

import Index from "@/index/Index.vue";
import NavMenu from "@/index/NavMenu.vue";

const routerPush = Router.prototype.push
/*Router.prototype.push = function push (location) {
    return routerPush.call(this, location).catch(error => error)
}*/
Vue.use(Router)

export default new Router({
    routes: [
        /*{ path: "/",
            redirect: "/index",
            hidden: true,
            children: []
        },*/
        {
            path: "/index",
            iconCls: "test", // 图标样式class
            name: "index",
            component: Index,
            children: []
        },
        {
            path: "/navmenu",
            iconCls: "test", // 图标样式class
            name: "navmenu",
            component: NavMenu,
            children: []
        },
    ]
})