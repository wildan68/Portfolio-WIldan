<template>
    <div class="portofolio">
        <div class="title">
            Portofolio
            <hr />
        </div>
        <div class="content">
            <div class="left">
                <h3>Perusahaan</h3>
                <div class="content-box">
                    <div class="item-box" :id="pointer == 1 ? 'pointer' : ' '" @click="onPointer(1, 'data1')" v-ripple>
                        <img src="~@/assets/img/beenews.png" :id="pointer == 1 ? 'pointer' : ' '"/>
                    </div>
                </div>
                <h3>Project Saya</h3>
                <div class="content-box">
                    <div class="item-box" :id="pointer == 2 ? 'pointer' : ' '" @click="onPointer(2, 'data2')" v-ripple>
                        <img src="~@/assets/img/weather.png" :id="pointer == 2 ? 'pointer' : ' '"/>
                    </div>
                    <div class="item-box" :id="pointer == 3 ? 'pointer' : ' '" @click="onPointer(3, 'data3')" v-ripple>
                        <img src="~@/assets/img/mfstore.png" :id="pointer == 3 ? 'pointer' : ' '"/>
                    </div>
                    <div class="item-box" :id="pointer == 4 ? 'pointer' : ' '" @click="onPointer(4, 'data4')" v-ripple>
                        <img src="~@/assets/img/majorhs.svg" :id="pointer == 4 ? 'pointer' : ' '"/>
                    </div>
                </div>
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
    export default {
        name: 'Portofolio Pages',
        title: 'Portofolio | Wildan Rizky',
        data() {
            return {
                pointer: 1,
                keys: 'data1',
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
        flex-wrap: wrap;
    }
    
    .portofolio .content .left .content-box>div {
        margin-right: 1%;
    }
    
    .portofolio .content .left .content-box .item-box {
        width: 10em;
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
        .portofolio .content .left .content-box .item-box {
            width: 5em;
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