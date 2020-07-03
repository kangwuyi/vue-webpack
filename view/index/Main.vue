<template>
    <div id="index-main">
        <ly-header></ly-header>
        <ly-nav-menu></ly-nav-menu>
        <ly-service-items></ly-service-items>
        <ly-h-process></ly-h-process>
        <ly-latest-news></ly-latest-news>
        <div class="mt40"></div>
        <ly-footer></ly-footer>
        <ly-tip></ly-tip>
    </div>
</template>

<script>
    import LayoutHeader from "../common/Header.vue";
    import LayoutFooter from "../common/Footer.vue";
    import Tip from "../common/Tip.vue";
    import LayoutNavMenu from "./NavMenu.vue";
    import ServiceItems from "./ServiceItems.vue";
    import HospitalizationProcess from "./HospitalizationProcess.vue";
    import LatestNews from "./LatestNews.vue";

    export default {
        name: "index-main",
        components: {
            'ly-header': LayoutHeader,
            'ly-nav-menu': LayoutNavMenu,
            'ly-service-items': ServiceItems,
            'ly-h-process': HospitalizationProcess,
            'ly-footer': LayoutFooter,
            'ly-tip': Tip,
            'ly-latest-news': LatestNews
        }
    }
</script>