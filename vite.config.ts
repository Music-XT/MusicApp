import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'


// 默认环境名称
const DEV = 'development'
const PRO = 'production'

const config: {base: UserConfigExport, [prop: string]: UserConfigExport}  = {
  // https://vitejs.dev/config/
  base: {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  },
  [DEV]: {
    server: {
      host: '0.0.0.0',
      port: 80
    }
  },
  [PRO]: {
  }
}

// 根据项目环境配置 vite.config.ts
export default defineConfig(({ mode }) => ({...(config.base), ...(config[mode])}))