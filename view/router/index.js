import Vue from 'vue'
import Router from 'vue-router'

import IndexMain from "@/index/Main.vue";
import NavMenu from "@/index/NavMenu.vue";

const routerPush = Router.prototype.push
/*Router.prototype.push = function push (location) {
    return routerPush.call(this, location).catch(error => error)
}*/
Vue.use(Router)

export default new Router({
    routes: [
        { path: "/",
            redirect: "/index",
            hidden: true,
            children: []
        },
        {
            path: "/index",
            components: {index_main: IndexMain},
        },
    ]
})