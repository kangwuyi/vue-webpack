<template>
    <div class="box clearfix">
        <div class="list title-lists" id="CuttingedgeinformationOne">
            <h2 class="clearfix">
                <strong class="sq"></strong>
                <span>前沿资讯</span>
                <a target="_blank">More>></a>
            </h2>
            <div>
                <img v-bind:src="ArticleList[0].image" width="223" height="280"/>
                <ul>
                    <li v-for="item in ArticleList">
                        <a v-bind:href="item.category.url" target="_blank">
                            <span>></span> {{item.title}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="list title-lists" id="CuttingedgeinformationTwo">
            <h2 class="clearfix">
                <strong class="sq"></strong>
                <span>就医案例</span>
                <a target="_blank">More>></a>
            </h2>
            <div>
                <img v-bind:src="CasesList[0].image" width="223" height="280"/>
                <ul>
                    <li v-for="item in CasesList">
                        <a target="_blank">
                            <span>></span> {{item.title}}
                        </a>
                    </li>
                </ul>
            </div>
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
<style lang="scss" rel="stylesheet/scss">

</style>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>