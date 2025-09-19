import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的笔记",
  description: "Some documents",
  base: "/blog/", // 添加base配置，与GitHub Pages的路径匹配

  // 添加这部分 server 配置
  server: {
    host: '0.0.0.0', // 监听所有网络接口
    port: 5173       // 明确指定端口（可选，但推荐）
  },

    // 添加 Vite 配置
  vite: {
    server: {
      allowedHosts: ['blog.hejinyo.cn'] // 允许的域名
    }
  },

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
