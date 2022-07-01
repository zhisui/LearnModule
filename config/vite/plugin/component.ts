/**
 * @name autoRegisterComponents
 * @description 组件自动导入，无需import便可以在template中使用，支持UI库组件和自定义组件
 * @see https://github.com/antfu/unplugin-vue-components
 */

import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export const autoRegisterComponents = () => {
  return Components({
    // 组件所在的路径
    dirs: ['src/components'],
    // 识别的组件后缀名
    extensions: ['vue'],
    // 是否搜索子目录
    deep: true,
    // 自动导入antdesign的组件
    resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
    dts: 'src/components.d.ts',
    globalNamespaces: [],
    directoryAsNamespace: false,
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
  })
}
