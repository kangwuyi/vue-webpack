
import IndexMain from "@/index/Main.vue";
import InfoMain from "@/info/Main.vue";
import ListMain from "@/list/Main.vue";

axios.defaults.baseURL='http://'+axios_host+':3000';
// axios.defaults.baseURL='http://localhost:3000';

export default new VueRouter({
    routes: [
        {
            path: "/",
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