<template>
    <div>
        <h1>条件渲染</h1>
        <div v-for="item of data">
            <div v-if="item.age%2==0" v-bind:key="item.id">
                <div>双数 {{item.name}}</div>
            </div>
            <div v-else>
                <div>单数{{item.name}}</div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            number: 1,
            message: "测试数据",
            show: false,
            data: [
                { id: 1, name: "qjz", pwd: 123, age: 45 },
                { id: 2, name: "qjz1", pwd: 1234, age: 46 },
                { id: 3, name: "qj3", pwd: 123, age: 45 },
                { id: 4, name: "qjz4", pwd: 1234, age: 46 },
            ],
        }
    },
    beforeCreate() {
        console.log("创建之前");
    },
    created() {
        console.log("创建完成");
    },
    mounted() {
        console.log("载入");
    },
    methods: {

    },
    watch: {
    },
    //计算属性
    computed: {
        AddNum: function () {
            return setInterval(() => {
                this.number += 5;
            }, 1000);
            // return this.number += 5;
            // return new Date();
        }
    },
    beforeUpdate() {
        console.log("更新之前");
    },
    updated() {
        console.log("更新");
    },
    beforeDestroy() {
        console.log("销毁之前");
    },
    destroyed() {
        console.log("销毁");
    }

}
</script>

<style>
</style>