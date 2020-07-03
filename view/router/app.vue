<template>
    <div>
        <router-view name="default"></router-view>
        <router-view name="index_main"></router-view>
        <router-view name="info_main"></router-view>
        <router-view name="list_main"></router-view>
    </div>
</template>

<script>
    export default {
        name: "app"
    }
</script>
<style scoped>

</style>