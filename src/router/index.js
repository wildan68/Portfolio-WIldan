import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/pages/home.vue'
import About from '../components/pages/tentang.vue'
import Skill from '../components/pages/skill.vue'
import Resume from '../components/pages/resume.vue'
import Service from '../components/pages/service.vue'
import Portofolio from '../components/pages/portofolio.vue'

const routes = [{
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    },
    {
        path: '/skill',
        component: Skill,
        name: 'Skill',
    },
    {
        path: '/resume',
        component: Resume,
        name: 'Resume',
    },
    {
        path: '/service',
        component: Service,
        name: 'Service',
    },
    {
        path: '/portofolio',
        component: Portofolio,
        name: 'Portofolio',
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router