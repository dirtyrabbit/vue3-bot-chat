import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry: path.resolve(__dirname, 'src/main.js'), // 設定入口檔案
      name: 'Vue3BotChat', // 起個名字，安裝、引入用
    },
  
  rollupOptions:{
    external: ['vue','element-plus'],
    output: {
      // 在 UMD 構建模式下為這些外部化的依賴提供一個全域性變數
      globals: {
        vue: 'Vue',
        'element-plus': 'elementPlus'
      }
    }
  }
  },
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
})
