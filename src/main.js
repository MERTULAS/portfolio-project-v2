import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'
import emailjs from '@emailjs/browser'

const app = createApp(App)
app.use(Antd)
app.use(createPinia())
app.use(router)
emailjs.init('Osgo-eVqhWNZyqA6N')

app.mount('#app')
