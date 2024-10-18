import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from '@/router'
import directive from '@/directive'

const app = createApp(App)
Object.keys(directive).forEach((key) => {
    app.directive(key, directive[key])
})
app.use(createPinia())
app.use(router)

app.mount('#app')
