<template>
    <div id="index">
        <el-container>
            <LayoutHeader></LayoutHeader>
            <LayoutNavMenu></LayoutNavMenu>
        </el-container>
        <el-main id="elmain">
            <router-view></router-view>
        </el-main>

    </div>
</template>

<script>
    import LayoutHeader from "./Header"
    import LayoutNavMenu from "./NavMenu"

    export default {
        name: "index",
        components: {
            LayoutHeader,
            LayoutNavMenu,
        }
    }
</script>
