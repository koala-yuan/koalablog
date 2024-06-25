import { plumeTheme } from 'vuepress-theme-plume'
// import notes from './notes/index.js'
import navbar from './navbar.js'

export default plumeTheme({
  logo: '/logo.png',
  hostname: '',
  contributors: false,

  navbar,
  // notes,

  profile: {
    name: 'Koala',
    avatar: '/images/logo.png',
    description: '世间的美好总是不期而遇',
  },
  social: [
    { icon: 'github', link: 'https://github.com/koala-yuan/koalablog' }
  ],
  plugins: {
    baiduTongji: { key: '49ebcb8d1abfcde890ef6f320a101db7' },
    shiki: {
      twoslash: true,
      languages: ['shell', 'bash', 'json', 'txt', 'markdown', 'html', 'css', 'javascript', 'scss', 'typescript', 'vue', 'rust', 'jsx', 'tsx', 'stylus', 'dockerfile', 'yaml', 'nginx', 'toml', 'groovy'],
    },
    markdownEnhance: { demo: true },
    markdownPower: { caniuse: true, jsfiddle: true, },

    docsearch: {
      appId: 'KRJOJ00KBL',
      apiKey: '3f3b13613235873fbcbc9d304de18126',
      indexName: 'pengzhanbo',
    },

    comment: {
      provider: 'Giscus',
      comment: true,
      repo: 'pengzhanbo/pengzhanbo.cn',
      repoId: 'MDEwOlJlcG9zaXRvcnkxNDgwMzY4MDc=',
      category: 'Blog-Comment',
      categoryId: 'DIC_kwDOCNLcx84CUulO',
      mapping: 'pathname',
      reactionsEnabled: true,
      inputPosition: 'top',
      darkTheme: 'dark_protanopia',
      lightTheme: 'light_protanopia',
    },
  },
})