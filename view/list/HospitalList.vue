<template>
    <div class="box clearfix">
        <div class="list-box pull-left">
            <!-- list -->
            <a class="list-div clearfix" href="#" target="_blank">
                <img src="imgs/list1.jpg" width="190"/>
                <div class="list-info">
                    <h3 class="clearfix">
                        <span class="t-title">纽约特种外科医院</span>
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
                    <p><span>排名：</span>美国综合医院排名第一</p>
                </div>
            </a>
            <!-- list -->
            <div class="clearfix">
                <el-pagination
                        class="pagination"
                        background
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage4"
                        :page-sizes="[20, 40, 50, 100]"
                        :page-size="100"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="400">
                </el-pagination>
            </div>
        </div>
        <ly-latest-news></ly-latest-news>
    </div>
</template>
<script>
    import LatestNews from "@/list/LatestNews";

    export default {
        name: "ly-list-hospital",
        data: function () {
            return {
                currentPage4: ''
            }
        },
        components: {
            'ly-latest-news': LatestNews
        },
        methods: {
            handleSizeChange() {

            },
            handleCurrentChange() {

            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .info-nav-menu-box {

    }
</style>