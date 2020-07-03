<template>
    <div class="box" id="NavMenu">
        <el-menu class="b-nav el-menu-vertical"
                 @open="handleOpen"
                 @close="handleClose"
                 :default-active="$route.path"
                 :collapse="isCollapse"
                 :collapse-transition="false">
            <template v-bind:index="item.id"
                      v-for="item in Body_parts_all">
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </template>
        </el-menu>
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
                    _self.Body_parts_all = BPA;
                });
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .box {
        background: #04AFA3 !important;
    }
    .el-menu-vertical{
        width: 198px;
    }
</style>