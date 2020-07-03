<template>
    <div id="list-main">
        <ly-header></ly-header>
        <ly-nav-menu></ly-nav-menu>
        <ly-crumb></ly-crumb>
        <div class="box h40 fs12 c-9">注：美国日本医院排名数据引用于美国世界新闻播报及日本病院情报局，请周知</div>
        <ly-all-country></ly-all-country>
        <ly-list-hospital></ly-list-hospital>
        <ly-footer></ly-footer>
        <ly-tip></ly-tip>
    </div>
</template>

<script>
    import LayoutHeader from "../common/Header.vue";
    import NavMenu from "@/list/NavMenu";
    import Crumb from "@/list/Crumb";
    import AllCountry from "@/list/AllCountry";
    import HospitalList from "@/list/HospitalList";
    import LayoutFooter from "../common/Footer.vue";
    import Tip from "../common/Tip.vue";

    export default {
        name: "list-main",
        components: {
            'ly-header': LayoutHeader,
            'ly-nav-menu': NavMenu,
            'ly-footer': LayoutFooter,
            'ly-tip': Tip,
            'ly-crumb': Crumb,
            'ly-all-country': AllCountry,
            'ly-list-hospital': HospitalList
        }
    }
</script>