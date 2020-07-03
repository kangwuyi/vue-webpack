
<template>
    <el-header id="header">
        <div class="h-top l36 clearfix box">
            <div class="pull-left h-phone c-green mr40">
                <span></span>
                免费咨询：400-100-1111
            </div>
            <div class="pull-left h-time c-9">
                <span></span>
                工作时间：9:00-18:00
            </div>
            <el-input placeholder="请输入内容" class="h-search" clearable v-model="inputSearch">
                <el-button slot="append" icon="el-icon-search" class="h-searchBT"></el-button>
            </el-input>
        </div>
        <div class="clearfix box">

        </div>

    </el-header>
</template>

<script>
    import axios from "axios";
    import BS from "../../public/js/common/BinarySearch.js";

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

        methods: {},
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .box {
        background: #04AFA3 !important;
    }
</style>