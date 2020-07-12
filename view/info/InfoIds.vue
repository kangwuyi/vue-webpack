<template>
    <div class="box clearfix">
        <div class="clearfix">
            <div class="content-rank" v-for="item in RecommendHospital">
                <div class="rank-title">{{item.country_map.title}}-{{item.name}}</div>
                <ul class="rank-list clearfix">
                    <li v-for="rankItem in item.rankings">
                        <span class="l-name">{{rankItem.name}}</span><span class="l-num">第{{rankItem.overall_rank_count}}名</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ly-info-ids",
        data: function () {
            return {
                RecommendHospital: {},
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
                    axios.get('/recommend/hospital'),
                ]).then(axios.spread(function (
                    RecommendHospital
                ) {
                    console.log(RecommendHospital)
                    _self.RecommendHospital = RecommendHospital.data.data.list.slice(0,4);
                }));
                return console.log('get data end');
            }

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .info-nav-menu-box {

    }
</style>