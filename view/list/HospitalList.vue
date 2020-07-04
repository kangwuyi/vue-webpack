<template>
    <div class="box clearfix">
        <div class="list-box pull-left">
            <!-- list -->
            <a class="list-div clearfix" href="#" target="_blank" v-for="item in HospitalList">
                <img :src="item.picture" width="190"/>
                <div class="list-info">
                    <h3 class="clearfix">
                        <span class="t-title">{{item.name}}</span>
                        <span class="t-info">Hospital for Special Surgery</span>
                        <span class="t-label">内分泌科第一</span>
                        <span class="t-label">内分泌科第一</span>
                        <span class="t-label">内分泌科第一</span>
                    </h3>
                    <div class="clearfix list-label">
                        <span class="c-green">综合医院</span>
                        <span class="c-blue">大型医院</span>
                    </div>
                    <p><span>擅长：</span>手术</p>
                    <p><span>国家：</span>美国纽约州纽约市</p>
                    <p><span>排名：</span>{{item.ranking_text}}</p>
                </div>
            </a>
            <!-- list -->
            <div class="clearfix">
                <el-pagination
                        class="pagination"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[20, 40, 50, 100]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </div>
        </div>
        <ly-latest-news></ly-latest-news>
    </div>
</template>
<script>
    import LatestNews from "@/list/LatestNews";
    import axios from "axios";
    import CheckReqStatus from "@/tools/checkReqStatus";
    import EventBus from "@/router/eventBus";

    export default {
        name: "ly-list-hospital",
        data: function () {
            return {
                currentPage: 1,
                total: 100,
                pageSize: 20,
                perPage: 0,
                lastPage: 10,
                HospitalList: [],
                allCountryCache: {}
            }
        },
        components: {
            'ly-latest-news': LatestNews
        },
        mounted() {
            this.renderData();
        },
        created() {
            this.allCountryMessage()
        },
        methods: {
            getData(country, countryValue, dept, deptValue, page) {
                let _self = this;
                axios.all([
                    axios.get('http://apiv2.chujingyi.cn/v2/hospital/list?' + country + '=' + countryValue + '&' + dept + '=' + deptValue + '&page=' + page)
                ]).then(axios.spread(function (
                    HospitalList,
                ) {
                    let HospitalListFilters = CheckReqStatus(HospitalList.data);
                    _self.total = HospitalListFilters.total;
                    _self.currentPage = HospitalListFilters.current;
                    _self.perPage = HospitalListFilters.per_page;
                    _self.lastPage = HospitalListFilters.last_page;
                    _self.HospitalList = HospitalListFilters.list;
                    console.log(_self.HospitalList)
                }));
            },
            renderData() {
                //console.log(this)
            },
            handleSizeChange(val) {
                this.pageSize=val;
                this.getData(
                    this.allCountryCache.isCountry,
                    this.allCountryCache.isCountryValue,
                    this.allCountryCache.isDepartment,
                    this.allCountryCache.isDepartmentValue,
                    this.currentPage
                )
            },
            handleCurrentChange(val) {
                this.currentPage=val;
                this.getData(
                    this.allCountryCache.isCountry,
                    this.allCountryCache.isCountryValue,
                    this.allCountryCache.isDepartment,
                    this.allCountryCache.isDepartmentValue,
                    this.currentPage
                )
            },
            allCountryMessage() {
                let _self = this;
                EventBus.$on('allCountry', (message) => {
                    _self.allCountryCache = message;
                    _self.getData(
                        message.isCountry,
                        message.isCountryValue,
                        message.isDepartment,
                        message.isDepartmentValue,
                        _self.currentPage
                    )
                })
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .info-nav-menu-box {

    }
</style>