<template>
    <p>{{ greeting }} VUE!!!</p>
</template>

<script>
    module.exports = {
        data : function(){
            return {
                greeting : 'Hello'
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    a {
        color: white;
    }
</style>