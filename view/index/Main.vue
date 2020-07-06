<template>
    <div id="index-main">
        <ly-header></ly-header>
        <ly-nav-menu></ly-nav-menu>
        <ly-service-items></ly-service-items>
        <ly-ag-hospital></ly-ag-hospital>
        <ly-h-process></ly-h-process>
        <div class="clearfix box h3-box">
            <div class="t-icon"></div>
            <h3 class="t-title">出国看病早知道</h3>
            <span class="t-info">Latest news</span>
        </div>
        <ly-latest-news></ly-latest-news>
        <div class="mt40"></div>
        <ly-footer></ly-footer>
        <ly-tip></ly-tip>
    </div>
</template>

<script>
    import LayoutHeader from "@/common/Header.vue";
    import LayoutFooter from "@/common/Footer.vue";
    import Tip from "@/common/Tip.vue";
    import LayoutNavMenu from "@/index/NavMenu.vue";
    import ServiceItems from "@/index/ServiceItems.vue";
    import HospitalizationProcess from "@/index/HospitalizationProcess.vue";
    import LatestNews from "@/index/LatestNews.vue";
    import AGHospital from "@/index/AGHospital";

    export default {
        name: "index-main",
        components: {
            'ly-header': LayoutHeader,
            'ly-nav-menu': LayoutNavMenu,
            'ly-service-items': ServiceItems,
            'ly-h-process': HospitalizationProcess,
            'ly-footer': LayoutFooter,
            'ly-tip': Tip,
            'ly-latest-news': LatestNews,
            'ly-ag-hospital': AGHospital,
        }
    }
</script>