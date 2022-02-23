<template>
    <div class="portofolio">
        <div class="title">
            Portofolio
            <hr />
        </div>
        Geser untuk slide
        <div class="content">
            <div class="left">
                <h3>Perusahaan</h3>
                <Swiper class="content-box" :slidesPerView="isMobile ? 3 : 4" :spaceBetween="isMobile ? 10 : 30">
                    <SwiperSlide class="item-box" :id="pointer == 1 ? 'pointer' : ' '" @click="onPointer(1, 'data1')" v-ripple>
                        <img src="~@/assets/img/beenews.png" :id="pointer == 1 ? 'pointer' : ' '"/>
                    </SwiperSlide>
                </Swiper>
                <h3>Project Saya</h3>
                <swiper class="swiper content-box" :slidesPerView="isMobile ? 3 : 3" :spaceBetween="isMobile ? 10 : 30">
                    <swiper-slide class="item-box" :id="pointer == 2 ? 'pointer' : ' '" @click="onPointer(2, 'data2')" v-ripple>
                        <img src="~@/assets/img/weather.png" :id="pointer == 2 ? 'pointer' : ' '"/>
                    </swiper-slide>
                    <swiper-slide class="item-box" :id="pointer == 3 ? 'pointer' : ' '" @click="onPointer(3, 'data3')" v-ripple>
                        <img src="~@/assets/img/mfstore.png" :id="pointer == 3 ? 'pointer' : ' '"/>
                    </swiper-slide>
                    <swiper-slide class="item-box" :id="pointer == 4 ? 'pointer' : ' '" @click="onPointer(4, 'data4')" v-ripple>
                        <img src="~@/assets/img/majorhs.svg" :id="pointer == 4 ? 'pointer' : ' '"/>
                    </swiper-slide>
                    <swiper-slide class="item-box" :id="pointer == 5 ? 'pointer' : ' '" @click="onPointer(5, 'data5')" v-ripple>
                        <img src="~@/assets/img/autodrone.jpg" :id="pointer == 5 ? 'pointer' : ' '"/>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="right">
                <div v-for="(key, d) in data" :key="d">
                    <div v-if="d == keys" data-aos="fade-down">
                        <h3>{{ key.title }}</h3>
                        <div class="text" v-html="key.text">
                            
                        </div>
                        <a :href="key.link" class="btn-visit" target="_blank">Kunjungi web <ion-icon name="arrow-forward"></ion-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aos from 'aos'
    import { Swiper, SwiperSlide } from 'swiper/vue'

    import 'swiper/swiper-bundle.min.css'

    import "swiper/components/navigation"
    import "swiper/components/pagination"

    import SwiperCore, {
        Navigation,
        Pagination,
        Mousewheel,
        Keyboard,
        Autoplay,
    } from 'swiper/core';

    SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

    export default {
        name: 'Portofolio Pages',
        title: 'Portofolio | Wildan Rizky',
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                pointer: 1,
                keys: 'data1',
                isMobile: false,
                data: {
                    data1: {
                        title: 'BEENEWS.ID',
                        text: `BEENEWS.ID adalah sebuah portal website berita yang dibangun dari Wordpress dibawah naungan PT. Bee Creative Indonesia, BEENEWS.ID menyajikan berita berita terbaru seputar hobi, olahraga, pemerintahan dan masih banyak lagi.
                               <br>
                               <br>Framework: Wordpress
                               <br>Status: <span style="color: var(--green)">On Production</span>`,
                        link: 'https://beenews.id'
                    },
                    data2: {
                        title: 'MyWeatherApp',
                        text: `MyWeatherApp adalah sebuah Web Aplikasi yang saya buat menggunakan Rest API dari OpenWeather
                               <br>
                               <br>Framework: VUE 3
                               <br>Status: <span style="color: var(--green)">Selesai</span>`,
                        link: 'https://wldnweatherapp.netlify.app/'
                    },
                    data3: {
                        title: 'Major Fish Store',
                        text: `Major Fish Store sebuah website Online Shop / e-Commerce dengan tema penjualan ikan berbasis Server Side Rendering dengan backend developer menggunakan PHP Native untuk REST API
                               <br>
                               <br>Framework: Nuxt JS
                               <br>Status: <span style="color: var(--yellow)">Dalam tahap development</span>`,
                        link: 'http://mfstore.herokuapp.com/'
                    },
                    data4: {
                        title: 'Major Home Suites',
                        text: `Major Home Suites adalah sebuah website landing page dengan tema Perumahan
                               <br>
                               <br>Framework: Nuxt JS
                               <br>Status: <span style="color: var(--yellow)">Dalam tahap development</span>`,
                        link: 'http://majorhs.wildan.host/'
                    },
                    data5: {
                        title: 'Autodrone Store',
                        text: `Autodrone sebuah landing page Drone Store sederhana
                               <br>
                               <br>Framework: Nuxt JS & Next JS (http://autodrone.wildan.host)
                               <br>Status: <span style="color: var(--green)">Selesai</span>`,
                        link: 'http://autodrone-nuxt.wildan.host/'
                    }
                }
            }
        },
        methods: {
            onPointer(context, keys) {
                this.pointer = context
                this.keys = keys
            }
        },
        mounted() {
            aos.init()
            if (window.innerWidth <= 768) {
                this.isMobile = true 
            }
        }
    }
</script>

<style scoped>
    .portofolio {
        margin-top: 7em;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: show 0.5s linear;
        height: 100%;
    }
    
    .portofolio ion-icon {
        pointer-events: none !important;
    }
    
    .portofolio .title {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .portofolio .title hr {
        height: 5px;
        background-color: var(--yellow);
        border: none;
        width: 90%;
    }
    
    .portofolio .content {
        margin-top: 30px;
        width: 100%;
        display: flex;
    }
    
    .portofolio .content .left {
        flex: 1;
        width: 30em;
        padding: 0 1em 0 1em;
    }
    
    .portofolio .content .right {
        flex: 1;
        border: 2px solid var(--yellow);
        padding: 1em;
        position: relative;
    }
    
    .portofolio .content .left h3 {
        color: var(--yellow);
    }
    
    .portofolio .content .left .content-box {
        display: flex;
        overflow: hidden;
        width: auto;
    }
    
    .portofolio .content .left .content-box .item-box {
        height: 10em;
        background-color: #f9f9f950;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #00000000;
        overflow: hidden;
    }
    
    .portofolio .content .left .content-box .item-box#pointer {
        border: 2px solid var(--yellow);
    }
    
    .portofolio .content .left .content-box .item-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s linear;
    }
    
    .portofolio .content .left .content-box .item-box img#pointer {
        width: 120%;
        height: 120%;
        transform: rotate(10deg)
    }
    
    .portofolio .content .right a.btn-visit {
        position: absolute;
        bottom: 30px;
        padding: 1em;
        background-color: var(--yellow);
        color: var(--black);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        font-weight: 600;
        width: 30%;
    }
    
    .portofolio .content .right a.btn-visit:hover {
        filter: brightness(90%);
    }
    
    .portofolio .content .right a.btn-visit ion-icon {
        margin-left: 10px;
    }
    
    @media (max-width: 768px) {
        .portofolio .content {
            flex-direction: column;
            margin-top: 10px;
        }
        .portofolio .content>div {
            margin-bottom: 5%;
        }
        .portofolio .content .left {
            width: auto;
        }
        .portofolio .content .left .content-box .item-box {
            height: 5em;
        }
        .portofolio .content .right a.btn-visit {
            position: relative;
            margin-top: 50px;
            width: 60%;
            font-size: 14px;
        }
    }
</style>