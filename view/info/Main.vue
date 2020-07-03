<template>
    <div id="info-main">
        <ly-header></ly-header>
        <ly-nav-menu></ly-nav-menu>
        <ly-crumb></ly-crumb>
        <ly-index-content></ly-index-content>
        <div class="mt40"></div>
        <ly-footer></ly-footer>
        <ly-tip></ly-tip>
    </div>
</template>

<script>
    import LayoutHeader from "@/common/Header.vue";
    import LayoutFooter from "@/common/Footer.vue";
    import Tip from "@/common/Tip.vue";
    import NavMenu from "@/info/NavMenu.vue";
    import Crumb from "@/info/Crumb.vue";
    import InfoContent from "@/info/InfoContent.vue";

    export default {
        name: "info-main",
        components: {
            'ly-header': LayoutHeader,
            'ly-footer': LayoutFooter,
            'ly-tip': Tip,
            'ly-nav-menu': NavMenu,
            'ly-crumb': Crumb,
            'ly-index-content': InfoContent,
        }
    }
</script>