import "@babel/polyfill";

import App from '@/router/app.vue';
import router from '@/router/index.js'
axios.defaults.baseURL='http://localhost:3000';
new Vue({
    el: '#app',
    data:function(){
        return {
            inputSearch: '',
            activeIndex: '1'
        }
    },
    render: c => c(App),
    router,
    template: "<App/>",
    methods: {},
    components: {
        App
    },
})