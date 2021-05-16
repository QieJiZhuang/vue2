<template>
    <div>
        <div class="div1">
            <div class="div1-1">1111111</div>
            <div class="div1-2">1111111</div>
            <div class="div1-3">1111111</div>
        </div>
        <div class="div2">
            <div class="div2-1">2222222</div>
            <div class="div2-2">2222222</div>
            <div class="div2-3">2222222</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>
<style lang="less"  scoped>
.div1 {
    width: 100%;
    height: 100%;
    border: 5px solid red;
    position: relative;
    .div1-1 {
        position: absolute;
        width: 300px;
        height: 500px;
        left: 200px;
        background-color: red;
    }
    .div1-2 {
        position: absolute;
        width: 300px;
        height: 20%;
        top: 200px;
        // left: 200px;
        // margin-left: 200px;
        right: 200px;
        background-color: blue;
    }
    .div1-3{
        width: 200px;
        height: 20%;
        background-color: pink;
    }
}


.div2 {
    width: 100%;
    height: 40%;
    border: 5px solid black;
    position: absolute;
    .div2-1 {
        position: absolute;
        width: 300px;
        height: 500px;
        left: 200px;
        background-color: rgb(68, 63, 63);
    }
    .div2-2 {
        position: relative;
        width: 300px;
        height: 20%;
        top: 200px;
        // left: 200px;
        // margin-left: 200px;
        right: 200px;
        background-color: rgba(56, 3, 3, 0.89);
    }
    .div2-3{
        width: 200px;
        height: 20%;
        background-color: rgb(26, 14, 90);
    }
}
</style>
