<template>
    <div class="navbar">
        <div class="logo"></div>
        <button class="toggle-menu" @click="onToggle()">
            <ion-icon :name="menu ? 'close' : 'grid'"></ion-icon>
        </button>
        <div class="menu" id="menu">      
            <div class="menu-list" :id="$route.name == 'Home' ? 'active' : 'deactive'" @click="onMenu('/')">
                Home
                <div class="bullet" v-if="$route.name == 'Home'"></div>
            </div>
            <div class="menu-list" :id="$route.name == 'About' ? 'active' : 'deactive'" @click="onMenu('/about')">
                Tentang
                <div class="bullet" v-if="$route.name == 'About'"></div>
            </div>
            <div class="menu-list" :id="$route.name == 'Skill' ? 'active' : 'deactive'" @click="onMenu('/skill')">
                Skill
                <div class="bullet" v-if="$route.name == 'Skill'"></div>
            </div>
            <div class="menu-list" :id="$route.name == 'Resume' ? 'active' : 'deactive'" @click="onMenu('/resume')">
                Resume
                <div class="bullet" v-if="$route.name == 'Resume'"></div>
            </div>
            <div class="menu-list" :id="$route.name == 'Service' ? 'active' : 'deactive'" @click="onMenu('/service')">
                Service
                <div class="bullet" v-if="$route.name == 'Service'"></div>
            </div>
            <div class="menu-list" :id="$route.name == 'Portofolio' ? 'active' : 'deactive'" @click="onMenu('/portofolio')">
                Portofolio
                <div class="bullet" v-if="$route.name == 'Portofolio'"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                menu: false
            }
        },
        methods: {
            onMenu(context) {
                this.$router.push(context)
            },
            onToggle() {
                if (!this.menu) {
                    document.getElementById("menu").style.display = "block"
                    this.menu = true
                }
                else {
                    document.getElementById("menu").style.display = "none"
                    this.menu = false
                }
            }
        }
    }
</script>

<style scoped>
    .navbar {
        height: auto;
        display: flex;
        padding: 30px 0 30px 0;
        z-index: 5;
    }
    
    .navbar .logo {
        flex: 1;
    }
    
    .navbar .menu {
        flex: 3;
        justify-content: flex-end;
        align-items: center;
        display: flex;
        padding: 0 5% 0 5%;
        font-weight: 600;
    }
    
    .navbar .toggle-menu {
        display: none;
    }
    
    .navbar .menu>div {
        margin-left: 5%;
    }
    
    .navbar .menu .menu-list {
        color: var(--white-dark);
        transition: color 0.5s linear;
        cursor: pointer;
        height: 2em;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .navbar .menu .menu-list:hover {
        transition: color 0.5s linear;
        color: var(--yellow);
    }
    
    .navbar .menu .menu-list#active {
        color: var(--yellow);
    }
    
    .navbar .menu .menu-list .bullet {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--yellow);
        margin-top: 5px;
        animation: bullet 0.3s linear;
    }
    
    @keyframes bullet {
        from {
            width: 0;
            height: 0;
            margin-top: -15px;
            opacity: 0;
        }
        to {
            margin-top: 0;
            width: 6px;
            height: 6px;
            opacity: 1;
        }
    }
    
    @media (max-width: 768px) {
        .navbar {
            padding: 0;
            position: fixed;
            right: 0;
            left: 0;
           
        }
        .navbar .toggle-menu {
            display: block;
            width: 48px;
            height: 48px;
            background-color: var(--yellow);
        }
        .navbar .toggle-menu ion-icon {
            width: 24px;
            height: 24px;
        }
        .navbar .menu {
            display: none;
            position: absolute;
            background-color: var(--black);
            right: 0;
            top: 50px;
            width: 70%;
            border-left: 2px solid var(--yellow);
            border-bottom: 2px solid var(--yellow);
            animation: menuOpen 0.5s linear;
        }
        .navbar .menu .menu-list {
            height: 4em;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .navbar .menu .menu-list:hover {
            background-color: var(--yellow);
            color: var(--black) !important;
        }
        .navbar .menu .menu-list .bullet {
            display: none;
        }
        @keyframes menuOpen {
            from {
                top: -100px;
                right: -100px;
                opacity: 0;
            }
            to {
                top: 50px;
                right: 0;
                opacity: 1;
            }
        }
    }
</style>