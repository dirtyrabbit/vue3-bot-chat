import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const Vue3ChatBot = createApp(App)

Vue3ChatBot.use(ElementPlus)
Vue3ChatBot.mount('#app')

module.exports = Vue3ChatBot;