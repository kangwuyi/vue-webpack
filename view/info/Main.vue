<template>
    <div id="info-main">
        <ly-header></ly-header>
        <ly-footer></ly-footer>
        <ly-tip></ly-tip>
    </div>
</template>

<script>
    import LayoutHeader from "../common/Header.vue";
    import LayoutFooter from "../common/Footer.vue";
    import Tip from "../common/Tip.vue";

    export default {
        name: "info-main",
        components: {
            'ly-header': LayoutHeader,
            'ly-footer': LayoutFooter,
            'ly-tip':Tip
        }
    }
</script>