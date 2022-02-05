<template>
    <Navbar/>
    <div class="wrapper">
        <div class="wrapper-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from './layout/navbar.vue'
export default {
    name: 'Main Index',
    components: {
        Navbar,
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        width: 100%;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        z-index: -1;
       
    }
    .wrapper .wrapper-container {
        width: 90%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        
    }
    @media (max-width: 768px) {
        .wrapper {
            position: relative;
            z-index: 0;
        }
        .wrapper .wrapper-container {
            position: relative;
        }
    }
</style>