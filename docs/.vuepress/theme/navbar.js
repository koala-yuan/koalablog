import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/', icon: 'material-symbols:home' },
  {
    text: '博客',
    link: '/blog/',
    activeMatch: '^/(blog|article)/',
    icon: 'material-symbols:menu-book',
  },
  { text: 'Projects', link: '/projects/', icon: 'ri:open-source-fill' },
  {
    text: '技术文档',
    icon: 'mdi:idea',
    activeMatch: '^/(vuepress-theme-plume|vuepress-plugin)/',
    items: [
      {
        text: 'Vite',
        icon: 'vscode-icons:file-type-vite',
        items: [
          {
            text: 'vite-plugin-mock-dev-server',
            link: 'https://vite-plugin-mock-dev-server.netlify.app/',
            icon: 'carbon:server-proxy',
          },
          {
            text: 'vite-plugin-image-placeholder',
            link: 'https://github.com/koala-yuan/koalablog/vite-plugin-image-placeholder',
            icon: 'bi:image-fill',
          },
        ],
      },
      {
        text: 'Vuepress',
        icon: 'vscode-icons:file-type-vue',
        items: [
          {
            text: 'vuepress-theme-plume',
            link: 'https://plume.pengzhanbo.cn',
            icon: 'mdi:paper-airplane',
          },
          {
            text: 'plugin-md-power',
            link: 'https://plume.pengzhanbo.cn/plugins/plugin-md-power/',
            icon: 'pajamas:feature-flag',
          },
          {
            text: 'plugin-shikiji',
            link: 'https://plume.pengzhanbo.cn/plugins/plugin-shikiji/',
            icon: 'material-symbols-light:code-blocks-outline-rounded',
          },
          {
            text: 'plugin-iconify',
            link: 'https://plume.pengzhanbo.cn/plugins/plugin-iconify/',
            icon: 'line-md:iconify1',
          },
          {
            text: 'plugin-netlify-functions',
            link: 'https://plume.pengzhanbo.cn/plugins/plugin-netlify-functions/',
            icon: 'teenyicons:netlify-solid',
          },
        ],
      },
      {
        text: 'CanIUse Embed',
        link: 'https://caniuse.pengzhanbo.cn',
        icon: 'https://caniuse.pengzhanbo.cn/favicon-128.png'
      }
    ],
  },
  {
    text: '笔记',
    icon: 'icon-park-solid:bookshelf',
    items: [
      {
        text: '备忘录',
        link: '/memorandum/',
        activeMatch: '^/memorandum/',
        icon: 'emojione:memo',
      },
      {
        text: '防御性CSS',
        link: '/defensive-css/',
        activeMatch: '^/defensive-css/',
        icon: 'streamline:css-three',
      },
      {
        text: '前端面试题',
        link: '/interview-question/',
        activeMatch: '^/interview-question/',
        icon: 'codicon:comment-unresolved',
      },
      {
        text: 'type-challenges',
        link: '/type-challenges/',
        activeMatch: '^/type-challenges/',
        icon: 'mdi:language-typescript',
      },
      {
        text: 'Rust学习简记',
        link: '/learn-rust/',
        activeMatch: '^/learn-rust/',
        icon: 'mdi:language-rust',
      },
    ],
  },
  {
    text: '更多',
    icon: 'mingcute:more-3-fill',
    items: [
      {
        text: '书籍推荐',
        link: '/ebooks/',
        icon: 'material-symbols:recommend',
        activeMatch: '^/ebooks/',
      },
      {
        text: '站点导航',
        link: '/sites-collect/',
        icon: 'mdi:roadmap',
        activeMatch: '^/sites-collect',
      },
      {
        text: 'Command-Line Interface',
        link: '/cli/',
        icon: 'grommet-icons:cli',
        activeMatch: '^/cli',
      }
    ],
  },
])