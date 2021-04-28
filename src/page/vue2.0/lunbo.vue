<template>
    <div>
        <h1>13</h1>
        <div v-for="value of this.imgArr" >
            {{value}}
            <hr>
            <img :src="value" class="img" alt="未加载">
            <!-- <img src="../public/static/img/1.png" alt="" srcset=""> -->
        </div>
        <!-- <img class="img" src="../../assets/img/1.png" alt="" srcset="">
        <img class="img" src="../../assets/img/2.jpg" alt="" srcset="">
        <img class="img" src="../../assets/img/3.jpg" alt="" srcset="">
        <img class="img" src="../../assets/img/1.png" alt="" srcset=""> -->

        <img :src="this.img" alt="" srcset=""  class="img">
    </div>
</template>

<script>
export default {
    data() {
        return {
            // imgArr: ["../../assets/img/1.png","../../assets/img/1.png"],
            // imgArr: {"a":"../../assets/img/1.png","b":"../../assets/img/1.png"},
            imgArr: {"a":require("../../assets/img/1.png"),"b":require("../../assets/img/1.png")},
            img:"../../assets/img/1.png",
        }
    },
    mounted() {
        // for (const value of this.imgArr) {
        //     console.log("key=" + value);
        // }
    }
}
</script>

<style>
.img {
    width: 100px;
    height: 100px;
}
</style>