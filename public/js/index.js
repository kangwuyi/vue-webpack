import Vue from 'vue';

import App from '../../view/index/app.vue';
import router from './router'
import ELEMENT from 'element-ui'

Vue.use(ELEMENT)

//安装插件

new Vue({
    el: '#indexPage',
    data: function () {
        return {
            inputSearch: '',
            activeIndex: '1'
        }
    },
    //让vue知道我们的路由规则
    router,//可以简写为router
    render: h => h(App),
    components: {App},
    template: "<App/>"
    /*render: function (createElements) {
        return createElements(NavMenu) // 将自组件中容器内容替换掉
    }*/
})