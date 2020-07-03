<template>
    <div id="NavMenu" @click="navMenuHref(this)">
        <div class="box box-content">
            <el-menu class="b-nav el-menu-vertical"
                     @open="handleOpen"
                     @close="handleClose"
                     @click.native="stopClick(this)"
                     :default-active="$route.path"
                     :collapse="isCollapse"
                     :unique-opened="true"
                     :collapse-transition="false">
                <template v-bind:index="item.id"
                          v-for="item in Body_parts_all">
                    <el-submenu :index="item.id+''"
                                :popper-append-to-body="false">
                        <template slot="title">
                            <img v-bind:src="item.src" width="20"/>
                            <span slot="title" class="nav-menu-title">{{item.name}}</span>
                        </template>
                        <template v-bind:index="itemChildren.id"
                                  v-for="itemChildren in item.children">
                            <el-menu-item :index="itemChildren.id+''" class="nav-menu-child-title">
                                {{itemChildren.name}}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
            </el-menu>

        </div>
    </div>
</template>
<script>
    import axios from "axios";
    import BS from "../../public/js/common/BinarySearch.js";

    export default {
        name: "ly-nav-menu",
        data: function () {
            return {
                isCollapse: true,
                Body_parts_all: {},
                rootMenu: {}
            }
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {
            this.renderData();
        },

        methods: {
            renderData() {
                let _self = this;
                axios.get('http://apiv2.chujingyi.cn/v2/body_parts/all').then((req) => {
                    let BPA = req.data.data.list;
                    let publicSrc = '../../noimgs/';
                    const srcArr = [
                        {1: publicSrc.concat('head@2x.png')},
                        {8: publicSrc.concat('chest@2x.png')},
                        {15: publicSrc.concat('lung@2x.png')},
                        {22: publicSrc.concat('basin@2x.png')},
                        {28: publicSrc.concat('overall@2x.png')},
                        {34: publicSrc.concat('children@2x.png')}
                    ]
                    for (let i = 0; i < BPA.length; i++) {
                        BPA[i]['src'] = BS(srcArr, ('' + BPA[i].id));
                    }
                    console.log(BPA)
                    _self.Body_parts_all = BPA;
                });
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            navMenuHref() {
                window.location.href='https://www.baidu.com/';
                this.stopPropagation();
            },
            stopClick(e) {
                this.stopPropagation();

            },
            stopPropagation(e) {
                e = e || window.event;
                if (e.stopPropagation) { //W3C阻止冒泡方法
                    e.stopPropagation();
                } else {
                    e.cancelBubble = true; //IE阻止冒泡方法
                }
            }
        },
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