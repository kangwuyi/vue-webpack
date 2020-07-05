<template>
    <div id="AGHospital">
        <div class="box">
            <div v-for="item in Home_best_hospital">
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
                            <span>{{childItem.name}}</span>
                        </div>
                        <strong>{{childItem.name}}</strong>
                        <ul>
                            <li v-for="departmentItem in item.department" :key="departmentItem._id">
                                <span class="l-name">{{childItem.name}}</span>
                                <span class="l-num">{{departmentItem.rank}}</span>
                            </li>
                        </ul>
                    </div>
                    <!-- list -->
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
                _self.$axios.get('/home/best_hospital').then((req) => {
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
                    _self.data = BPA;
                });
            }
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    div#NavMenu .box-content{
        .el-submenu {
            &.is-opened {

            }

            .el-menu--vertical {
                left: 198px !important;
                padding: 20px;
                display: flex;
                flex-wrap: wrap;
                top: 0;
                width: 320px;
                background: #fff;

                ul.el-menu--popup {
                    position: relative;
                    left: 0;
                    padding: 0 !important;
                    margin: 0 !important;
                    border: none !important;

                    &:after {
                        display: block;
                        content: " ";
                        clear: both;
                    }

                    li {
                        display: block;
                        float: left;
                        margin: 10px 10px 0 0;
                        list-style: none;

                        &.nav-menu-child-title {
                            display: block;
                            float: left;
                            min-width: 50px !important;
                            color: #333;
                            width: 140px;
                            margin: 0 0 0 16px;
                            padding: 0 !important;
                        }
                    }
                }
            }
        }
    }
</style>
<style lang="scss" rel="stylesheet/scss" scoped>
    div#NavMenu {
        background: url('../../dist/noimgs/banner.jpg') no-repeat center; height: 370px; background-size: cover;
        .box-content{

            .el-menu-vertical {
                width: 198px;

            }

            .el-submenu__title {
                img {
                    float: left;
                    margin-top: 20px;
                }
            }

            .nav-menu-title {
                margin-left: 20px !important;
                height: auto !important;
                width: auto !important;
                overflow: hidden !important;
                visibility: visible !important;
            }
        }
    }
</style>