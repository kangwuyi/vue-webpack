import Vue from 'vue';
import ElementUI from 'element-ui';

import App from '@/index/app.vue';
import router from '../js/router/index.js'

Vue.use(ElementUI);


new Vue({
    el: '#app',
    data:function(){
        return {
        }
    },
    render: c => c(App),
    router,
    template:'<App></App>',
    methods: {},
    components: {
        App
    },
})