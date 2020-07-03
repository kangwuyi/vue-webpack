<template>
    <div id="test">
        <test></test>
        <el-header id="header">
            <div class="h-top l36 clearfix box">
                <div class="pull-left h-phone c-green mr40">
                    <span alt="400-100-1111"></span>
                    免费咨询：400-100-1111
                </div>
                <div class="pull-left h-time c-9">
                    <span></span>
                    工作时间：9:00-18:00
                </div>
                <el-input placeholder="出国看病信息服务平台" class="h-search" clearable v-model="inputSearch" value="出国看病信息服务平台">
                    <el-button slot="append" icon="el-icon-search" class="h-searchBT"></el-button>
                </el-input>
            </div>
            <div class="clearfix box">
                <div class="logo pull-left mt24">
                    <a href="http://chujingyi.cn/" title=”出国看病服务” alt="出国看病服务">
                        <img src="noimgs/logo.png" width="140" height="40"/>
                    </a>
                </div>
                <img src="noimgs/sl.png" width="6" class="pull-left mt32 ml12"/>
                <div class="pull-left mt36 mr4 ml4 c-blue">好 快 省</div>
                <img src="noimgs/sr.png" width="6" class="pull-left mt48 mr12"/>
                <div class="pull-left mt36 c-blue">出国看病</div>
                <el-menu :default-active="activeIndex" class="h-nav pull-right mt36" mode="horizontal"
                         text-color="#333333" active-text-color="#04AFA3">
                    <el-menu-item index="1"><a href="#" target="_blank">首页</a></el-menu-item>
                    <el-menu-item index="2"><a href="#" target="_blank">权威医院</a></el-menu-item>
                    <el-menu-item index="3"><a href="#" target="_blank">知名医生</a></el-menu-item>
                    <el-menu-item index="4"><a href="#" target="_blank">就医案例</a></el-menu-item>
                    <el-menu-item index="5"><a href="#" target="_blank">临床试验</a></el-menu-item>
                    <el-menu-item index="6"><a href="#" target="_blank">前沿资讯</a></el-menu-item>
                    <el-menu-item index="7"><a href="#" target="_blank">海外药品</a></el-menu-item>
                    <el-menu-item index="8"><a href="#" target="_blank">关于我们</a></el-menu-item>
                </el-menu>
            </div>

        </el-header>

    </div>
</template>

<script>
    import test from "./test";
    import axios from "axios";

    export default {
        name: "ly-header",
        data: function () {
            return {
                inputSearch: '',
                activeIndex: '1',
            }
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {
            console.log('here is header')
        },
        components: {test},
        methods: {},
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .el-header {
        height: auto !important;
    }
</style>