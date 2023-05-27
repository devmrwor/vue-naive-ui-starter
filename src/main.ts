import { registerSW } from 'virtual:pwa-register'
import router from './router'
import App from '@/App.vue'

import 'virtual:windi.css'

registerSW({ immediate: true })

const app = createApp(App)

app.use(router)
app.mount('#app')
