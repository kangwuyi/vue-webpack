<template>
    <el-footer id="footer" class="pt8">
        <div class="f-div box">
            <strong class="w120">本站数据来源：</strong>
            <span>usnews.com</span>
            <span>hospia.jp</span>
        </div>
        <div class="f-div box">
            <strong class="w120">友情链接：</strong>
            <span>大幸砂田橋クリニック</span>
            <span>大幸砂田橋クリニック</span>
            <span>大幸砂田橋クリニック</span>
        </div>
        <div class="f-div box">
            <strong class="w120">最新更新信息:</strong>
            <span>大幸砂田橋クリニック</span>
            <span>大幸砂田橋クリニック</span>
            <span>大幸砂田橋クリニック</span>
        </div>
        <div class="f-line box"></div>
        <div class="clearfix box p20">
            <ul class="f-ul">
                <li v-for="item in Disease_footer_recommend"><a :key="item.url" v-bind:href="item.url"></a>{{item.name}}
                </li>
            </ul>
            <div class="pull-right w120">
                <img src="noimgs/code.jpg"
                     width="120" height="120"/>
                <p class="fs14 c-6 pt12">扫一扫 关注公众号</p>
            </div>
        </div>
        <div class="f-line box"></div>
        <p class="t-c fs14 c-9 p12">@ 2019 京ICP备19025513号-1</p>
    </el-footer>
</template>

<script>

    export default {
        name: "ly-footer",
        data: function () {
            return {
                Disease_footer_recommend: {}
            }
        },
        mounted() {
            this.renderData();
        },
        methods: {
            renderData() {
                let _self = this;
                _self.$axios.get('/disease/footer_recommend').then((req) => {
                    console.log(req);
                    _self.Disease_footer_recommend = req.data.data;
                });
            },
        },
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    #footer {
        height: auto !important;
    }
</style>