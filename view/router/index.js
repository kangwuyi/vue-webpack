import Vue from 'vue'
import Router from 'vue-router'

import IndexMain from "@/index/Main.vue";
import InfoMain from "@/info/Main.vue";
import ListMain from "@/list/Main.vue";

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
        {
            path: "/info",
            components: {info_main: InfoMain},
        },
        {
            path: "/list",
            components: {list_main: ListMain},
        },
        {
            path: "/404",
            components: {default: IndexMain},
        },
    ]
})