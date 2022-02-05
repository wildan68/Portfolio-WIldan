<template>
    <div class="home">
        <div class="wrapper">
            <div class="left">
                <span class="sub">Hi, Saya <span style="color: var(--yellow)">Wildan Rizky</span></span>
                <div class="caption">
                    Saya
                    <span class="typed-text">{{ typeValue }}</span>
                    <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                </div>
                <div class="sub">Junior programer web dengan pelamanan kurang lebih 1 tahun</div>
                <div class="menu-btn">
                    <button class="btnContact" v-ripple>#TanyaDulu</button>
                    <a href="#" class="btnSosmed"><ion-icon name="logo-facebook" id="fb"></ion-icon></a>
                    <a href="#" class="btnSosmed"><ion-icon name="logo-instagram"></ion-icon></a>
                </div>
                <div class="caption-sub">Living, Learning & Leveling Up<br>one day at a time</div>
                <div class="sub" style="font-size: 14px; margin-top: 10em">UI Design By <span style="color: var(--yellow)">Wildan Rizky.</span> &copy; 2022 All Right Reserved</div>
            </div>
            <div class="right">
                <div class="profil-picture">
                    <img src="~@/assets/img/My.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home Pages',
        title: 'Home | Wildan Rizky',
        data() {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: ['Junior Front End', 'Web Developer'],
                typingSpeed: 150,
                erasingSpeed: 100,
                newTextDelay: 2000,
                typeArrayIndex: 0,
                charIndex: 0
            }
        },
        methods: {
            typeText() {
                if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                    if (!this.typeStatus)
                        this.typeStatus = true;
                    this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                    this.charIndex += 1;
                    setTimeout(this.typeText, this.typingSpeed);
                } else {
                    this.typeStatus = false;
                    setTimeout(this.eraseText, this.newTextDelay);
                }
            },
            eraseText() {
                if (this.charIndex > 0) {
                    if (!this.typeStatus)
                        this.typeStatus = true;
                    this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                    this.charIndex -= 1;
                    setTimeout(this.eraseText, this.erasingSpeed);
                } else {
                    this.typeStatus = false;
                    this.typeArrayIndex += 1;
                    if (this.typeArrayIndex >= this.typeArray.length)
                        this.typeArrayIndex = 0;
                    setTimeout(this.typeText, this.typingSpeed + 1000);
                }
            }
        },
        created() {
            setTimeout(this.typeText, this.newTextDelay + 200);
        }
    }
</script>

<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        position: relative;
        animation: homeShow 0.5s linear;
    }
    
    .home .wrapper {
        display: flex;
        margin-top: 10em;
    }
    
    .home .left {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    
    .home .left .sub {
        font-size: 18px;
        color: var(--black-light);
        font-weight: 500;
    }
    
    .home .left .caption {
        font-size: 48px;
        font-weight: 800;
    }
    
    .home .right {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    
    .home .right .profil-picture {
        width: 350px;
        height: 350px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .home .profil-picture img {
        width: 100%;
    }
    
    .home .left .caption span.typed-text {
        color: var(--yellow);
    }
    
    .home .left .caption span.cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: #fff;
        animation: cursorBlink 1s infinite;
    }
    
    .home .left .caption span.cursor.typing {
        animation: none;
    }
    .home .left .caption-sub {
        font-size: 24px;
        color: var(--black-light);
        margin-top: 20px;
        font-weight: 600;
    }
    @keyframes cursorBlink {
        49% {
            background-color: #fff;
        }
        50% {
            background-color: transparent;
        }
        99% {
            background-color: transparent;
        }
    }
    
    @keyframes homeShow {
        from {
            margin-left: -500px;
        }
        to {
            margin-left: 0;
        }
    }
    
    .menu-btn {
        margin-top: 30px;
        display: flex;
        align-items: center;
    }
    
    .menu-btn .btnContact {
        padding: 1em;
        font-size: 18px;
        color: var(--yellow);
        border: 2px solid var(--yellow);
        cursor: pointer;
        background-size: 200% 100%;
        background-image: linear-gradient(to left, var(--yellow) 50%, var(--black) 50%);
        transition: background-position 0.5s;
        font-weight: 500;
    }
    
    .menu-btn .btnContact:hover {
        background-position: -100% 0;
        color: var(--black);
    }
    
    .menu-btn a.btnSosmed {
        margin-left: 5%;
    }
    
    .menu-btn a.btnSosmed ion-icon {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        color: var(--black-light);
        transition: all 0.5s linear;
    }
    
    .menu-btn a.btnSosmed ion-icon#fb {
        background-color: var(--black-light);
        color: var(--black);
        width: 40px;
        height: 40px;
    }
    
    .menu-btn a.btnSosmed ion-icon#fb:hover {
        background-color: var(--yellow);
        color: var(--black);
    }
    
    .menu-btn a.btnSosmed ion-icon:hover {
        color: var(--yellow);
    }
    
    @media (max-width: 768px) {
        .home .wrapper {
            flex-direction: column-reverse;
            margin-top: 5em;
        }
        .home .right .profil-picture {
            width: 150px;
            height: 150px;
            margin-bottom: 5em;
        }
    }
</style>