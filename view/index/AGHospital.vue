<template>
    <div id="AGHospital">
        <div class="box">
            <div v-for="item in Home_best_hospital">
                <div v-if="item.child !==undefined && item.child.length > 0">
                    <h3 class="clearfix">
                        <div class="t-icon"></div>
                        <span class="t-title">{{item.name}}</span>
                        <span class="t-info">{{item.nameen}}</span>
                    </h3>
                    <div class="clearfix">
                        <!-- list -->
                        <div class="img-list" v-for="childItem in item.child">
                            <div>
                                <img v-bind:src="childItem.picture" width="248" height="190"/>
                                <span>第{{childItem.rank}}名</span>
                            </div>
                            <strong>{{childItem.name}}</strong>
                            <ul>
                                <li v-for="departmentItem in childItem.rankings.slice(0,3)">
                                    <span class="l-name">{{departmentItem.name}}</span>
                                    <span class="l-num">第{{departmentItem.overall_rank_count}}名</span>
                                </li>
                            </ul>
                        </div>
                        <!-- list -->
                    </div>
                </div>
            </div>
            <div class="mt40"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "ly-ag-hospital",
        data: function () {
            return {
                Home_best_hospital: {},
            }
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {
            this.renderData();
        },

        methods: {
            renderData() {
                let _self = this;
                axios.get('/home/best_hospital').then((req) => {
                    let BPA = [
                        {mark: 'AGH', child: [], name: "出国看病-国外最好综合医院", nameen: "Authoritative General Hospital"},
                        {mark: 'CCH', child: [], name: "肿瘤癌症专科医院", nameen: "Cancer Hospital"},
                        {mark: 'CRH', child: [], name: "儿童医院", nameen: "Children's Hospital"},
                        {mark: 'CVH', child: [], name: "心血管专科医院", nameen: "Cardiovascular hospital"},
                    ];
                    let reqdata = req.data.data;
                    for (let i = 0; i < reqdata.length; i++) {
                        switch (reqdata[i].type_name) {
                            case reqdata[i].type_name = "综合医院":
                                BPA[0].child.push(reqdata[i]);
                                break;
                            case reqdata[i].type_name = "癌症专科":
                                BPA[1].child.push(reqdata[i]);
                                break;
                            case reqdata[i].type_name = "儿科":
                                BPA[2].child.push(reqdata[i]);
                                break;
                            case reqdata[i].type_name = "心血管专科医院":
                                BPA[3].child.push(reqdata[i]);
                                break;
                            default:
                     }
                    }
                    _self.Home_best_hospital = BPA;
                });
            }
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    .img-list img{ display: block;}
    .img-list strong{ color: #333; font-size: 18px; padding-top: 20px; display: block; font-weight: normal;}
    .img-list ul li{float: left; border-radius:2px; border:1px solid rgba(227,233,238,1);  margin: 10px 10px 0 0}
    .img-list ul li span{ padding: 6px; float: left; font-size: 14px}
    .img-list ul li .l-name{background:rgba(247,248,252,1); color: #405D76;}
    .img-list ul li .l-num{color: #04AFA3}

</style>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>