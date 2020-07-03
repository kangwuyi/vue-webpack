<template>
    <div class="box list-nav">
        <div>
            <span class="sub-nav-title" :key="BospitalSearchFilters[0].key">{{BospitalSearchFilters[0].title}}：</span>
            <ul class="clearfix">
                <li class="c-green" v-for="item in BospitalSearchFilters[0].options" :value="item.value">{{item.title}}</li>
            </ul>
        </div>
        <div>
            <span class="sub-nav-title" :key="BospitalSearchFilters[1].key">{{BospitalSearchFilters[1].title}}：</span>
            <ul class="clearfix">
                <li class="c-green" v-for="item in BospitalSearchFilters[1].options" :value="item.value">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import CheckReqStatus from "@/tools/checkReqStatus"

    export default {
        name: "ly-all-country",

        data: function () {
            return {
                isCollapse: true,
                BospitalSearchFilters: {},
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
                    axios.get('http://apiv2.chujingyi.cn/v2/hospital/search_filters')
                ]).then(axios.spread(function (
                    BospitalSearchFilters,
                ) {
                    _self.BospitalSearchFilters = CheckReqStatus(BospitalSearchFilters.data)[0].filters;
                }));
            },
        }
        ,
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .info-nav-menu-box {

    }
</style>>