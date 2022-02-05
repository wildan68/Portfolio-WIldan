<template>
    <div class="skill">
        <div class="title">
            Skill saya
            <hr />
        </div>
        <div class="content">
            <div class="content-list">
                <div class="title-list"><span class="decoration"></span><span class="decoration2"></span>
                    <ion-icon name="code-slash"></ion-icon> Bahasa Pemrograman & Markup
                </div>
                <div class="item-flex">
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/html.png">
                        <div class="progressbar">
                            85%
                            <div class="loadbar">
                                <div class="loadactive" id="html"></div>
                            </div>
                        </div>
                    </div>
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/css.png">
                        <div class="progressbar">
                            87%
                            <div class="loadbar">
                                <div class="loadactive" id="css"></div>
                            </div>
                        </div>
                    </div>
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/js.png">
                        <div class="progressbar">
                            77%
                            <div class="loadbar">
                                <div class="loadactive" id="js"></div>
                            </div>
                        </div>
                    </div>
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/php.png">
                        <div class="progressbar">
                            60%
                            <div class="loadbar">
                                <div class="loadactive" id="php"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-list">
                <div class="title-list"><span class="decoration"></span><span class="decoration2"></span>
                    <ion-icon name="git-network"></ion-icon> Framework
                </div>
                <div class="item-flex">
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/vue.png">
                    </div>
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/nuxt.png">
                    </div>
                </div>
            </div>
            <div class="content-list">
                <div class="title-list"><span class="decoration"></span><span class="decoration2"></span>
                    <ion-icon name="hammer"></ion-icon> Tool & Software
                </div>
                <div class="item-flex">
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/vscode.png">
                    </div>
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/figma.png">
                    </div>
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/git.png">
                    </div>
                    <div class="item" v-ripple>
                        <img src="~@/assets/img/github.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Skill',
        title: 'Skill | Wildan Rizky',

    }
</script>

<style scoped>
    .skill {
        margin-top: 7em;
        display: flex;
        flex-direction: column;
        align-items: center;
        animation: show 0.5s linear;
        height: 100%;
        --g-dialog-content-bg: red;
    }
    
    .skill ion-icon {
        pointer-events: none !important;
    }
    
    .skill .title {
        font-size: 24px;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .skill .title hr {
        height: 5px;
        background-color: var(--yellow);
        border: none;
        width: 90%;
    }
    
    .skill .content {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    
    .skill .content .content-list {
        width: 30%;
        height: auto;
        padding: 1em;
    }
    
    .skill .content .content-list .title-list {
        display: flex;
        align-items: center;
        position: relative;
    }
    
    .skill .content .content-list .title-list ion-icon {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        z-index: 5;
        color: var(--black);
    }
    
    .skill .content .content-list .title-list .decoration {
        width: 48px;
        height: 48px;
        z-index: 2;
        border-radius: 50%;
        background-color: var(--yellow);
        opacity: 0.5;
        position: absolute;
        top: -15px;
        left: -20px;
    }
    
    .skill .content .content-list .title-list .decoration2 {
        width: 34px;
        height: 34px;
        z-index: 1;
        border-radius: 50%;
        background-color: var(--yellow);
        opacity: 0.3;
        position: absolute;
        top: -20px;
        left: -30px;
    }
    
    .skill .content .content-list .item-flex {
        display: grid;
        margin-top: 30px;
        grid-template-columns: auto auto;
        justify-content: space-around;
    }
    
    .skill .content .content-list .item-flex>div {
        margin-bottom: 30px;
    }
    
    .skill .content .content-list .item-flex .item {
        width: 10em;
        height: 10em;
        background-color: #f9f9f950;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        justify-content: center;
        cursor: pointer;
        transition: all 0.5s linear;
    }
    
    .skill .content .content-list .item-flex .item:hover {
        background-color: #f9f9f980;
    }
    
    .skill .content .content-list .item-flex .item img {
        width: 70px;
    }
    
    .skill .content .content-list .item-flex .item .progressbar {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 14px;
        width: 100%;
        color: var(--white);
    }
    
    .skill .content .content-list .item-flex .item .progressbar .loadbar {
        width: 100%;
        height: 1em;
        background-color: #8d7f05;
    }
    
    .skill .content .content-list .item-flex .item .progressbar .loadbar .loadactive {
        background-color: var(--yellow);
        height: 100%;
    }
    
    .skill .content .content-list .item-flex .item .progressbar .loadbar #html {
        width: 85%;
        animation: html 0.5s linear;
    }
    
    .skill .content .content-list .item-flex .item .progressbar .loadbar #css {
        width: 87%;
        animation: css 0.5s linear;
    }
    
    .skill .content .content-list .item-flex .item .progressbar .loadbar #js {
        width: 77%;
        animation: js 0.5s linear;
    }
    
    .skill .content .content-list .item-flex .item .progressbar .loadbar #php {
        width: 60%;
        animation: php 0.5s linear;
    }
    
    @keyframes html {
        from {
            width: 0;
        }
        to {
            width: 85%;
        }
    }
    
    @keyframes css {
        from {
            width: 0;
        }
        to {
            width: 87%;
        }
    }
    
    @keyframes js {
        from {
            width: 0;
        }
        to {
            width: 77%;
        }
    }
    
    @keyframes php {
        from {
            width: 0;
        }
        to {
            width: 60%;
        }
    }
    
    @media (max-width: 768px) {
        .skill .content {
            flex-direction: column;
        }
        .skill .content .content-list {
            width: auto;
        }
        .skill .content .content-list>div {
            margin-bottom: 10px;
        }
        .skill .content .content-list .item-flex .item {
            width: 8em;
        }
    }
</style>