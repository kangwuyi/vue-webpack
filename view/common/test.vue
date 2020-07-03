<template>
    <div class="testconnect" style="background: black;width: 100%;height: 50px; display: block">
        <div style="margin:0 20px;display:inline;">
            <a href="#" style="color: white;">测试跳转页面链接</a>
        </div>
        <div style="margin:0 20px;display:inline;">
            <router-link to="/" style="color: white;">Go to index</router-link>
        </div>
        <div style="margin:0 20px;display:inline;">
            <router-link to="/list" style="color: white;">Go to list</router-link>
        </div>
        <div style="margin:0 20px;display:inline;">
            <router-link to="/info" style="color: white;">Go to info</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name: "test"
    }
</script>