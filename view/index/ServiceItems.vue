<template>
    <div id="ServiceItems">
        <div class="bgw">
            <h3 class="clearfix box">
                <div class="t-icon"></div>
                <span class="t-title">服务项目</span>
                <span class="t-info">Service Items</span>
            </h3>
            <div class="box clearfix hospital">
                <!-- 服务项目list -->
                <div class="box-about mr20">
                    <img src="/noimgs/american-hospital@2x.png" width="44" height="44"/>
                    <strong>美国医院</strong>
                    <p>去美国医院的好处，美国医院的特色以及美国医院治疗哪些疾病最厉害——简短详情介绍…</p>
                    <a>查看详情>></a>
                </div>
                <div class="box-about mr20">
                    <img src="noimgs/japanese-hospital@2x.png" width="44" height="44"/>
                    <strong>日本医院</strong>
                    <p>去日本医院的好处，日本医院的特色以及日本医院治疗哪些疾病最厉害——简短详情介绍…</p>
                    <a>查看详情>></a>
                </div>
                <div class="box-about">
                    <img src="noimgs/born@2x.png" width="44" height="44"/>
                    <strong>美国生子</strong>
                    <p>去美国医院的好处，美国医院的特色以及美国医院治疗哪些疾病最厉害——简短详情介绍…</p>
                    <a>查看详情>></a>
                </div>
                <!-- 服务项目list -->
            </div>
            <h3 class="clearfix box">
                <div class="t-icon"></div>
                <span class="t-title">快速咨询</span>
                <span class="t-info">Quick consultation</span>
            </h3>
            <div class="box clearfix consult">
                <!-- 快速咨询list -->
                <div class="box-about mr20">
                    <img src="noimgs/consult-phone@2x.png" width="100" height="100"/>
                    <span>联系电话</span>
                    <p>400-100-1111</p>
                </div>
                <div class="box-about mr20">
                    <img src="noimgs/consult-cost@2x.png" width="100" height="100"/>
                    <span>费用评估</span>
                    <p>安全、公正、准确</p>
                </div>
                <div class="box-about">
                    <img src="noimgs/consult-consult@2x.png" width="100" height="100"/>
                    <span>在线咨询</span>
                    <p>快速、专业、有效</p>
                </div>
                <!-- 快速咨询list -->
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "ly-service-items",
        data: function () {
            return {}
        },
        // 监听路由，每次进入页面调用方法，放在method里
        mounted() {

        },
        methods: {},
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>