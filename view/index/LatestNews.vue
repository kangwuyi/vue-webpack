<template>
    <div class="box">
        <div class="bgw">
            <%- include index/hospitalization_process.ejs -%>
        </div>
        <div class="clearfix box">
            <div class="t-icon"></div>
            <h3 class="t-title">出国看病早知道</h3>
            <span class="t-info">Latest news</span>
        </div>
        <div class="box clearfix">
            <div class="list title-lists" id="CuttingedgeinformationOne">
                <h2 class="clearfix">
                    <strong class="sq"></strong>
                    <span>前沿资讯</span>
                    <a v-bind:href="Cuttingedgeinformation.href" target="_blank">More>></a>
                </h2>
                <div>
                    <img v-bind:src="Cuttingedgeinformation.src" width="223" height="280"/>
                    <ul>
                        <li v-for="item in Cuttingedgeinformation.data" :key="item._id">
                            <a v-bind:href="item.href" target="_blank">
                                <span>></span> {{item.title}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="list title-lists" id="CuttingedgeinformationTwo">
                <h2 class="clearfix">
                    <strong class="sq"></strong>
                    <span>前沿资讯</span>
                    <a v-bind:href="Cuttingedgeinformation2.href" target="_blank">More>></a>
                </h2>
                <div>
                    <img v-bind:src="Cuttingedgeinformation2.src" width="223" height="280"/>
                    <ul>
                        <li v-for="item in Cuttingedgeinformation2.data" :key="item._id">
                            <a v-bind:href="item.href" target="_blank">
                                <span>></span> {{item.title}}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        name: "ly-latest-news",
        data: function () {
            return {
                Home_best_hospital: {},
            }
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {
            //this.renderData();
        },

        methods: {
            renderData() {
                let _self = this;
                axios.all([
                    axios.get('http://localhost:3000/AuthoritativeGeneralHospital'),
                    axios.get('http://localhost:3000/AuthoritativeGeneralHospital'),
                ]).then(axios.spread(function (
                    AuthoritativeGeneralHospital,
                    CancerHospital,
                ) {
                    _self.NewJoinDoctor = JSONPS(NewJoinDoctor.data);
                    _self.NewJoinHospital = JSONPS(NewJoinHospital.data);
                }));
                return console.log('get data end');
            }

        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    div#NavMenu .box-content {
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
        background: url('../../dist/noimgs/banner.jpg') no-repeat center;
        height: 370px;
        background-size: cover;

        .box-content {

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