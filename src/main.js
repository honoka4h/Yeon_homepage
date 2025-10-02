import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// css 불러오기
import '@/global.css'

createApp(App).use(router).mount('#app')
