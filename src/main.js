import {createApp} from 'vue'
import App from './App.vue'
// import axios from 'axios'
import router from './route'
import store from './store'

const app = createApp(App)
app.use(store)
// app.use(axios)
app.use(router)

app.mount('#app')

