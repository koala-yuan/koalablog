import { getDirname, path } from 'vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

import theme from './theme/index.js'

const __dirname = getDirname(import.meta.url)
const resolve = (...dirs) => path.resolve(__dirname, ...dirs)

console.log('#### __dirname', __dirname)
console.log('#### resolve', resolve('public'))

export default defineUserConfig({
  lang: 'zh-CN',
  outDir: './dist',
  locales: {
    '/': { lang: 'zh-CN', title: 'Koala', description: '热爱生活' },
  },
  // public: resolve('public'),
  bundler: viteBundler(),
  theme
})