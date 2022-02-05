<template>
    <div class="service">
        <div class="title">
            Service
            <hr/>
        </div>
        <div class="content">
            <div class="item-box" v-ripple :data-aos="items[1]">
                <img src="~@/assets/img/undraw_design_notes_re_eklr.svg">
                <h3>UI Designer</h3>
            </div>
            <div class="item-box" v-ripple :data-aos="items[2]">
                <img src="~@/assets/img/undraw_code_inspection_bdl7.svg">
                <h3>Front End Web Developer</h3>
            </div>
            <div class="item-box" v-ripple :data-aos="items[1]">
                <img src="~@/assets/img/undraw_wordpress_utxt.svg">
                <h3>Wordpress Developer</h3>
            </div>
        </div>
    </div>
</template>

<script>
    import aos from 'aos'

    export default {
        name: 'Service Page',
        title: 'Service | Wildan Rizky',
        data() {
            return {
                items: {
                    1: 'fade-up',
                    2: 'fade-down'
                }
            }
        },
        mounted() {
            aos.init()
            if (window.innerWidth <= 768) {
                this.items[1] = 'fade-right'
                this.items[2] = 'fade-left'
            }
        },
    }
</script>

<style scoped>
    .service {
        margin-top: 7em;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: show 0.5s linear;
        height: 100%;
    }
    
    .service ion-icon {
        pointer-events: none !important;
    }
    
    .service .title {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .service .title hr {
        height: 5px;
        background-color: var(--yellow);
        border: none;
        width: 90%;
    }
    
    .service .content {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .service .content>div {
        margin-left: 1%;
        margin-right: 1%;
    }
    
    .service .content .item-box {
        width: 20em;
        height: 20em;
        background-color: #f9f9f970;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        margin-bottom: 2%;
    }
    
    .service .content .item-box h3 {
        color: var(--yellow);
        bottom: 20px;
        position: absolute;
    }
    
    .service .content .item-box img {
        width: 50%;
    }
</style>