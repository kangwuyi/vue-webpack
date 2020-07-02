<template>
    <div class="box">ddd
        <el-menu default-active="1" class="b-nav ddfff" @open="handleOpen" @close="handleClose" :collapse="isCollapse"
                 :collapse-transition="false">
            <el-submenu index="1" show-timeout="1" hide-timeout="1" popper-append-to-body="true">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>

    import BS from "../../public/js/common/BinarySearch.js";

    export default {
        data: function () {
            return {
                isCollapse: true,
                Body_parts_all: {},
                rootMenu:false
            }
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {
            console.log(this);
            //this.renderData();
        },

        methods: {
            renderData() {
                let _self = this;//console.log(_self);
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
</style>