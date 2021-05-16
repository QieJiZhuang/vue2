<template>
    <div class="swiperComponent">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div
                    class="swiper-slide"
                    v-for="(items, key) in swiperList"
                    :key="key"
                >
                    <div
                        class="swiper-BgMap"
                        :style="{ backgroundImage: 'url(' + items.bgMap + ')' }"
                    >
                        <div class="title">
                            <span>{{ title }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
</template>
 
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.less";
import SwiperCore, { Pagination, Autoplay } from "swiper";
SwiperCore.use([Pagination, Autoplay]);

export default {
    name: "swiperComponent",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            swiperList: [
                {
                    id: 0,
                    bgMap: require("../../../public/static/img/1.png"),
                    annotate: "背景图第一张",
                },
                {
                    id: 1,
                    bgMap: require("../../../public/static/img/2.jpg"),
                    annotate: "背景图第二张",
                },
                 {
                    id: 2,
                    bgMap: require("../../../public/static/img/3.jpg"),
                    annotate: "背景图第三张",
                },
            ],
            title: null,
        };
    },
    mounted() {
        new SwiperCore(".swiper-container", {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            observer: true,
            observeParents: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    },
    methods: {},
};
</script>
 
<style scoped>
.swiperComponent {
    width: 100%;
    height: 600px;
    position: relative;
}

.swiper-container,
.swiper-slide,
.swiper-BgMap {
    width: 100%;
    height: 100%;
}
.swiper-container {
    position: absolute;
    z-index: 1;
}

.swiper-BgMap {
    /* max-width: 1920px; */
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.swiper-pagination {
    position: absolute;
    z-index: 999999;
    left: 0;
    right: 0;
    bottom: 25px;
    margin: auto;
    height: 15px;
    width: 285px;
    display: flex;
    overflow: hidden;
}

.swiper-container >>> .swiper-pagination-bullet {
    width: 30px;
    height: 13px;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    margin-right: 15px;
    border: 1px solid #ffffff;
}

.swiper-container >>> .swiper-pagination-bullet:last-of-type {
    margin-right: 0 !important;
}

.swiper-container >>> .swiper-pagination-bullet-active {
    width: 90px;
    background-color: #ffffff;
}
.title {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
.title > span {
    position: re;
    z-index: 2;
    text-shadow: 0px 4px 4px #0d0e0e;
    font-family: FZDHTJW--GB1-0;
    font-size: 68px;
    color: #ffffff;
    letter-spacing: 10.83px;
    text-align: justify;
}
</style>