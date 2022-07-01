import vue from '@vitejs/plugin-vue'
import vueJS from '@vitejs/plugin-vue-jsx'
import type { Plugin } from 'vite'
import { autoRegisterComponents } from './component'

export const createVitePlugins = (isBuild: Boolean) => {
  const vitePlugin: (Plugin | Plugin[])[] = [
    vue(), //vue支持
    vueJS(), //JSX支持
    autoRegisterComponents, // 组件自动导入
  ]
  return vitePlugin
}
