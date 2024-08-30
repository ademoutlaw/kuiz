import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import { Icon } from '@iconify/vue';
import 'element-plus/dist/index.css';

import './style.scss';
import App from './App.vue';
import router from './router';

createApp(App).use(createPinia()).use(router).use(ElementPlus).component('Icon', Icon).mount('#app');
