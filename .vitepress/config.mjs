import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的笔记",
  description: "Some documents",
  themeConfig: {
    // logo: '/image/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '例子', link: '/page/example/markdown-examples' },
      { text: 'HejinYo', link: 'http://hejinyo.cn' }
    ],
    
    sidebar: { "/page": set_sidebar("page") },
    
    // sidebar: [
    //   {
    //     text: '文档',
    //     items: [
    //       { text: 'Markdown 例子', link: '/page/example/markdown-examples' },
    //       { text: 'Runtime API 例子', link: '/page/example/api-examples' },
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hejnyo/' }
    ],

    footer: {
      copyright: '版权所有 © 2025 HejinYo'
    }
  }
})
