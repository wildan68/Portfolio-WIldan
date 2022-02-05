import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Title from './mixin/title.js'
import Ripple from 'vue3-whr-ripple-directive'

Ripple.color = 'rgba(255, 255, 255, 0.35)';

import './assets/style.css'
import 'gitart-vue-dialog/dist/style.css'


createApp(App).directive("ripple", Ripple).use(router).mixin(Title).mount('#app')