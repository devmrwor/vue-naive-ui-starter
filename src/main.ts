import { registerSW } from 'virtual:pwa-register'
import router from './router'
import stores from './stores'
import App from '@/App.vue'

import 'virtual:windi.css'

registerSW({ immediate: true })

const app = createApp(App)

app.use(router)
app.use(stores)
app.mount('#app')
