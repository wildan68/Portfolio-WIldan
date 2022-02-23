<template>
    <div class="about" data-aos="fade-left">
        <div class="title">
            Tentang saya
            <hr />
        </div>
        <div class="text">
            Saya seorang junior front end web developer dengan pengalaman kurang lebih 1 tahun, bekerja sebagai
            <b><i>freelance</i></b> paruh waktu.
            Berdomisili di <b>Kota Tegal</b> Saya bergelar <b><span style="color: var(--yellow)">Amd.Kom</span></b> dari
            <b>POLITEKNIK HARAPAN BERSAMA TEGAL</b> lulus pada tahun 2020, Saya terbiasa
            bekerja dengan kualitas penuh yang saya miliki mampu bekerja Tim dengan kedisiplinan dan tepat waktu.
            <br><br>
            Saya sudah membuat <i>project</i> beberapa <i>project</i> pribadi saya, bisa dilihat di menu Portofolio.
        </div>
        <div class="data-detail">
            <div class="detail-list">
                <span class="detail-list-number">01+</span>
                Tahun Pengalaman
            </div>
            <div class="detail-list">
                <span class="detail-list-number">02+</span>
                Project Selesai
            </div>
            <div class="detail-list">
                <span class="detail-list-number">02+</span>
                Perusahaan Bekerjasama
            </div>
        </div>
        <div class="btn-container">
            <button class="btn" id="myCv" v-ripple @click="onCV">Download CV <ion-icon name="download"></ion-icon></button>
            <button class="btn" id="myGithub" v-ripple @click="onGithub">My Github <ion-icon name="logo-github"></ion-icon></button>
        </div>
    </div>
</template>

<script>
    import aos from 'aos'
    export default {
        name: 'Tentang',
        title: 'Tentang | Wildan Rizky',
        methods: {
            onCV() {
                window.open('https://s3-ap-southeast-1.amazonaws.com/glints-dashboard/resume/847140afb3297feaee126b353a63aaf4.pdf', '_blank')
            },
            onGithub() {
                window.open('https://github.com/wildan68', '_blank')
            }
        },
        mounted() {
            aos.init()
        }
    }
</script>

<style scoped>
    .about {
        margin-top: 7em;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
    
    .about ion-icon {
        pointer-events: none !important;
    }
    
    .about .title {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .about .title hr {
        height: 5px;
        background-color: var(--yellow);
        border: none;
        width: 90%;
    }
    
    .about .text {
        margin-top: 30px;
    }
    
    .about .data-detail {
        margin-top: 30px;
        height: 7em;
        border: 2px solid var(--white);
        display: flex;
        justify-content: space-around;
        padding: 10px 0 10px 0;
    }
    
    .about .data-detail>div {
        margin-left: 2%;
        margin-right: 2%;
    }
    
    .about .data-detail .detail-list {
        background-color: var(--white);
        color: var(--black);
        height: 100%;
        width: 8em;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        flex-direction: column;
        text-align: center;
        font-size: 14px;
        padding: 0 1% 0 1%;
    }
    
    .about .data-detail .detail-list .detail-list-number {
        font-size: 42px;
        font-weight: 900;
    }
    
    .about .btn-container {
        margin-top: 30px;
        display: flex;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    
    .about .btn-container > button {
        margin-left: 1%;
        margin-right: 1%;
    }
    .about .btn-container .btn {
        padding: 1em;
        font-size: 18px;
        font-weight: 600;
        background-color: var(--yellow);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s linear;
        cursor: pointer;
        border: 3px solid var(--yellow);
        margin-bottom: 1%;
    }
    
    .about .btn-container .btn:hover {
        background-color: var(--yellow-dark);
        transition: all 0.5s linear;
        border: 3px solid #928141;
    }
    
    .about .btn-container .btn#myCv ion-icon {
        width: 24px;
        height: 24px;
        margin-left: 20px;
    }
    
    .about .btn-container .btn#myGithub {
        background-color: var(--black);
        border: 1px solid var(--white);
        color: var(--white);
    }
    .about .btn-container .btn#myGithub ion-icon {
        width: 24px;
        height: 24px;
        margin-left: 20px;
    }
    
    
    @media (max-width: 768px) {
        .about .btn-container {
            display: flex;
            flex-direction: column;
            width: 80%;
        }
    }
</style>