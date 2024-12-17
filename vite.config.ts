import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '192.168.1.128',
    port: 5173,
    https: false,
    // proxy: {
    //   '/api1': {
    //     // 后台地址
    //     target: 'http://192.168.1.128:8990/',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api1/, '')
    //   },
    //   '/api2': {
    //     // 后台地址
    //     target: 'http://192.168.1.128:8956/',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api2/, '')
    //   }
    // }
  },
})
