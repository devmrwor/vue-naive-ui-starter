import router from './router'
import App from '@/App.vue'

import 'virtual:windi.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
