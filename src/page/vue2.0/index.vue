<template>
    <div v-cloak >
		{{number +1}}111
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: 1
        }
    },
    beforeCreate () {
        console.log("创建之前");
    },
    created () {
        console.log("创建完成");
        
    },
    mounted () {
        console.log("载入");
        
    },
    beforeUpdate () {
        console.log("更新之前");
        
    },
    updated () {
        console.log("更新");
        
    },
    beforeDestroy () {
        console.log("销毁之前");
        
    },
    destroyed () {
        console.log("销毁");
        
    }

}
</script>

<style>

</style>