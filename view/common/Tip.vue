<template>
    <div class="tips">
        <a class="tips-phone" href="#"><p>400-100-1111</p><span>免费<br/>询问</span></a>
        <a class="tips-cost" href="#"><span href="#">费用<br/>评估</span></a>
        <a class="tips-message" href="#"><span href="#">在线<br/>留言</span></a>
        <a class="tips-top" v-bind:href="'#'"><span>返回<br/>顶部</span></a>
    </div>
</template>

<script>
    export default {
        name: "ly-tip",
        data: function () {
            return {

            }
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {
        },

        methods: {},
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>