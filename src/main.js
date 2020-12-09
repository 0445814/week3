import { createApp } from 'vue'
import './styles/index.scss'
import 'hover.css'
import App from './App.vue'
import router from './router/index'


createApp(App).use(router).mount('#app')
