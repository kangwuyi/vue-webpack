import "@babel/polyfill";
import Vue from 'vue';
import ElementUI from 'element-ui';

import App from '@/router/app.vue';
import router from '@/router/index.js'

Vue.use(ElementUI);


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