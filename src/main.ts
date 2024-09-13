import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import { Icon } from '@iconify/vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'element-plus/dist/index.css';

import './style.scss';
import App from './App.vue';
import router from './router';

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

createApp(App).use(pinia).use(router).use(ElementPlus).component('Icon', Icon).mount('#app');
