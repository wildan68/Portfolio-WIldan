<template>
    <div class="resume">
        <div class="title">
            Resume saya
            <hr />
        </div>
        <div class="content">
            <div class="btn-menu">
                <button class="menu" v-ripple :id="pages == 'pendidikan' ? 'active' : 'deactive'"
                    @click="onMenu('pendidikan')">
                    <ion-icon name="school"></ion-icon> Pendidikan
                </button>
                <button class="menu" v-ripple :id="pages == 'pekerjaan' ? 'active' : 'deactive'"
                    @click="onMenu('pekerjaan')">
                    <ion-icon name="briefcase"></ion-icon> Pekerjaan
                </button>
            </div>
            <div class="content-field">
                <div v-if="pages=='pendidikan'">
                    <div class="btn-menu">
                        <button v-ripple class="subMenu" :id="pendidikan == 'sd' ? 'active' : 'deactive'"
                            @click="onPendidikanMenu('sd')">SD</button>
                        <button v-ripple class="subMenu" :id="pendidikan == 'smp' ? 'active' : 'deactive'"
                            @click="onPendidikanMenu('smp')">SMP</button>
                        <button v-ripple class="subMenu" :id="pendidikan == 'smk' ? 'active' : 'deactive'"
                            @click="onPendidikanMenu('smk')">SMK</button>
                        <button v-ripple class="subMenu" :id="pendidikan == 'universitas' ? 'active' : 'deactive'"
                            @click="onPendidikanMenu('universitas')">UNIVERSITAS</button>
                    </div>
                    <div class="pendidikan" data-aos="fade-down" v-if="pendidikan == 'sd'">
                        <h3>SD Negeri 8 Kota Tegal</h3>
                        <hr />
                        <b>2006 - 2011</b><br>
                        Jawa Tengah, Indonesia
                    </div>
                    <div class="pendidikan" data-aos="fade-down" v-if="pendidikan == 'smp'">
                        <h3>SMP Negeri 12 Kota Tegal</h3>
                        <hr />
                        <b>2011 - 2014</b><br>
                        Jawa Tengah, Indonesia
                    </div>
                    <div class="pendidikan" data-aos="fade-down" v-if="pendidikan == 'smk'">
                        <h3>SMK Dinamika Kota Tegal</h3>
                        <hr />
                        <b>2014 - 2017</b><br>
                        Jawa Tengah, Indonesia
                    </div>
                    <div class="pendidikan" data-aos="fade-down" v-if="pendidikan == 'universitas'">
                        <h3>Politeknik Harapan Bersama Kota Tegal</h3>
                        <hr />
                        DIII Teknik Komputer<br><br>
                        <b>2017 - 2020</b><br>
                        Jawa Tengah, Indonesia
                    </div>
                </div>
                <div v-if="pages=='pekerjaan'">
                    <div class="btn-menu">
                        <button v-ripple class="subMenu" :id="pekerjaan == 1 ? 'active' : 'deactive'"
                            @click="onPekerjaanMenu(1)">Familiart</button>
                        <button v-ripple class="subMenu" :id="pekerjaan == 2 ? 'active' : 'deactive'"
                            @click="onPekerjaanMenu(2)">BEENEWS.ID</button>
                    </div>
                    <div class="pekerjaan" data-aos="fade-down" v-if="pekerjaan == 1">
                        <h3>Familiart</h3>
                        <hr/>
                        Karyawan di Familiart Printing Tegal sebagai Desain Grafis, selama 1.5 Tahun<br><br>
                        <b>2018 - 2019 Q4</b>
                    </div>
                    <div class="pekerjaan" data-aos="fade-down" v-if="pekerjaan == 2">
                        <h3>BEENEWS.ID</h3>
                        <hr/>
                        <i>Freelance</i> paruh waktu di BEENEWS.ID sebuah website portal berita sebagai Admin dan Website Maintenance
                        <br><br>
                        <b>2020 - Sekarang</b>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import aos from 'aos'
    export default {
        name: 'Resume',
        title: 'Resume | Wildan Rizky',
        data() {
            return {
                pages: 'pendidikan',
                pendidikan: 'sd',
                pekerjaan: 1
            }
        },
        methods: {
            onMenu(context) {
                this.pages = context
            },
            onPendidikanMenu(context) {
                this.pendidikan = context
            },
            onPekerjaanMenu(context) {
                this.pekerjaan = context
            },
        },
        mounted() {
            aos.init();
        }
    }
</script>

<style scoped>
    .resume {
        margin-top: 7em;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: show 0.5s linear;
        height: 100%;
    }
    
    .resume ion-icon {
        pointer-events: none !important;
    }
    
    .resume .title {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .resume .title hr {
        height: 5px;
        background-color: var(--yellow);
        border: none;
        width: 90%;
    }
    
    .resume .content {
        margin-top: 30px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .resume .content .btn-menu {
        display: flex;
        justify-content: flex-start;
    }
    
    .resume .content .btn-menu>button {
        margin-left: 1%;
        margin-right: 1%;
    }
    
    .resume .content .btn-menu .menu {
        background-color: var(--black);
        border: 1px solid var(--yellow);
        color: var(--yellow);
        padding: 1em;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .resume .content .btn-menu .menu ion-icon {
        margin-right: 10px;
        width: 24px;
        height: 24px;
    }
    
    .resume .content .btn-menu .menu#active {
        color: var(--black);
        background-color: var(--yellow);
        font-weight: 600;
        transition: background-color 0.5s ease-in-out;
    }
    
    .resume .content .content-field {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
    }
    
    .resume .content .content-field .subMenu {
        background-color: var(--black);
        border: 1px solid var(--yellow);
        color: var(--yellow);
        padding: 0.5em 1.5em 0.5em 1.5em;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .resume .content .content-field .subMenu#active {
        color: var(--black);
        background-color: var(--yellow);
        font-weight: 600;
        transition: background-color 0.5s ease-in-out;
    }
    
    .resume .content .content-field .pendidikan,
    .pekerjaan {
        margin-top: 30px;
        padding: 20px;
        border: 1px solid var(--yellow);
        width: 90%;
        animation: cf 0.5s linear;
    }
    
    .resume .content .content-field h3 {
        margin: 0;
        color: var(--yellow);
    }
    
    .resume .content .content-field hr {
        height: 2px;
        background-color: var(--yellow);
        border: none;
        margin-bottom: 20px;
    }
    
    @media (max-width: 768px) {
        .resume .content .content-field {
            width: auto;
        }
    }
</style>