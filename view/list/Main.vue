<template>
    <div id="list-main">
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
        name: "list-main",
        components: {
            'ly-header': LayoutHeader,
            'ly-footer': LayoutFooter,
            'ly-tip':Tip
        }
    }
</script>