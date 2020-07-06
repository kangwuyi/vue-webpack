<template>
    <div class="pull-right list-about">
        <div class="title-lists">
            <h2 class="clearfix">
                <strong class="sq"></strong>
                <span>服务项目</span>
            </h2>
            <ul class="service-list clearfix">
                <li><a href="#" target="_blank">出国就医</a></li>
                <li><a href="#" target="_blank">精密体验</a></li>
                <li><a href="#" target="_blank">海外生殖</a></li>
                <li><a href="#" target="_blank">出国就医</a></li>
                <li><a href="#" target="_blank">海外生殖</a></li>
                <li><a href="#" target="_blank">出国就医</a></li>
            </ul>
        </div>
        <div class="title-lists">
            <h2 class="clearfix">
                <strong class="sq"></strong>
                <span>前沿资讯</span>
                <a href="#" target="_blank">More>></a>
            </h2>
            <ul>
                <li v-for="item in ArticleList">
                    <a v-bind:href="item.category.url" target="_blank" class="fs12">
                        <span>></span> {{item.title}}
                    </a>
                </li>
            </ul>
        </div>
        <div class="title-lists">
            <h2 class="clearfix">
                <strong class="sq"></strong>
                <span>新药速递</span>
                <a href="#" target="_blank">More>></a>
            </h2>
            <ul>
                <li><a href="#" target="_blank" class="fs12"><span>></span> 六盘水市人民医院诚聘各层次医疗人才。</a></li>
                <li><a href="#" target="_blank" class="fs12"><span>></span> 六盘水市人民医院诚聘各层次医疗人才。</a></li>
                <li><a href="#" target="_blank" class="fs12"><span>></span> 六盘水市人民医院诚聘各层次医疗人才。</a></li>
                <li><a href="#" target="_blank" class="fs12"><span>></span> 六盘水市人民医院诚聘各层次医疗人才。</a></li>
                <li><a href="#" target="_blank" class="fs12"><span>></span> 六盘水市人民医院诚聘各层次医疗人才。</a></li>
                <li><a href="#" target="_blank" class="fs12"><span>></span> 六盘水市人民医院诚聘各层次医疗人才。</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ly-latest-news",
        data: function () {
            return {
                ArticleList: {},
                CasesList: {},
            }
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {
            this.renderData();
        },

        methods: {
            renderData() {
                let _self = this;
                axios.all([
                    axios.get('/article/list?page_size=5'),
                    axios.get('/cases/list?page_size=5'),
                ]).then(axios.spread(function (
                    ArticleList,
                    CasesList,
                ) {
                    _self.ArticleList = ArticleList.data.data;
                    _self.CasesList = CasesList.data.data.list;
                }));
                return console.log('get data end');
            }

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>