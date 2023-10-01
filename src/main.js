import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css' // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle' // Import Bootstrap JavaScript

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
