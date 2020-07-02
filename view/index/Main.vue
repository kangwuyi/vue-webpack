<template>
    <div id="index-main">this is index/main
        <ly-header></ly-header>
        <ly-nav-menu></ly-nav-menu>
    </div>
</template>

<script>
    import LayoutHeader from "./Header.vue"
    import LayoutNavMenu from "./NavMenu.vue"

    export default {
        name: "index-main",
        components: {
            'ly-header': LayoutHeader,
            'ly-nav-menu': LayoutNavMenu,
        }
    }
</script>