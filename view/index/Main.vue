<template>
    <div id="index-main">
        <ly-header></ly-header>
        <ly-nav-menu></ly-nav-menu>
        <ly-service-items></ly-service-items>
        <ly-h-process></ly-h-process>
        <ly-footer></ly-footer>
        <ly-tip></ly-tip>
    </div>
</template>

<script>
    import LayoutHeader from "./Header.vue";
    import LayoutFooter from "./Footer.vue";
    import LayoutNavMenu from "./NavMenu.vue";
    import ServiceItems from "./ServiceItems.vue";
    import Tip from "./Tip.vue";
    import HospitalizationProcess from "./HospitalizationProcess.vue";

    export default {
        name: "index-main",
        components: {
            'ly-header': LayoutHeader,
            'ly-nav-menu': LayoutNavMenu,
            'ly-service-items': ServiceItems,
            'ly-h-process': HospitalizationProcess,
            'ly-footer': LayoutFooter,
            'ly-tip':Tip
        }
    }
</script>