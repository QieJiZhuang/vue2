<template>
    <div>
        <h1>条件渲染</h1>
        {{number}}
        <div v-for="item of data1">
            <div v-if="item.age%2==0" v-bind:class v-bind:id="item.id">
                <div>双数 {{item.name}}</div>
            </div>
            <div v-else>
                <div>单数{{item.name}}</div>
            </div>
        </div>
        <div>
            <el-table ref="multipleTable" :data="list" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="ID" >
                    <template slot-scope="scope">{{ scope.row.id }}</template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="job" label="工作" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="age" sortable label="年龄" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <div style="margin-top: 20px">
                <el-button @click="toggleSelection([list[1], list[2]])">切换第二、第三行的选中状态</el-button>
                <el-button @click="toggleSelection()">取消选择</el-button>
            </div>
        </div>

    </div>
</template>

<script>
import mock from '../../mock/index.js';
import axios from 'axios'
export default {
    data() {
        return {
            number: 1,
            message: "测试数据",
            show: false,
            data1: [
                { id: 1, name: "qjz", pwd: 123, age: 45 },
                { id: 2, name: "qjz1", pwd: 1234, age: 46 },
                { id: 3, name: "qj3", pwd: 123, age: 45 },
                { id: 4, name: "qjz4", pwd: 1234, age: 46 },
            ],
            list: null
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
        this.getList();
    },
    methods: {
        getList() {
            axios.get("/parameter/query").then(response => {
                if (response.data) {
                    this.list = response.data.data.rows;
                    for (const item of this.list) {
                        console.log("item=" + item.name);
                    }
                }
            })
        },
        fun(id) {
            console.log("id=" + id);
        },
        toggleSelection(rows) {
            if (rows) {
                console.log(rows);
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    },
    watch: {
    },
    //计算属性
    computed: {
        AddNum: function () {
            return setInterval(() => {
                this.number += 5;
            }, 1000);
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