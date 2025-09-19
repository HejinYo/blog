import { defineConfig } from 'vitepress'
// 导入自动生成侧边栏的工具函数
import { set_sidebar } from "./utils/auto-gen-sidebar.mjs";

// 导出 VitePress 站点配置
// 参考文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点标题
  title: "我的笔记",
  
  // 站点描述
  description: "Some documents",
  
  // 基础路径配置，对于自定义域名设置为根路径
  base: "/",

  // 开发服务器配置
  server: {
    host: '0.0.0.0', // 监听所有网络接口
    port: 5173       // 明确指定端口（可选，但推荐）
  },

  // Vite 配置
  vite: {
    // Vite 服务器配置
    server: {
      // 允许的域名列表，包括自定义域名
      allowedHosts: ['ss.hejinyo.cn', 'blog.hejinyo.cn'] 
    },
    
    // 静态资源目录配置
    publicDir: 'public'
  },

  // 主题配置
  themeConfig: {
    // 网站 Logo（当前被注释掉）
    // logo: '/image/logo.png',
    
    // 导航栏配置
    // 参考文档：https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '例子', link: '/page/example/markdown-examples' },
      { text: 'HejinYo', link: 'http://hejinyo.cn' }
    ],
    
    // 侧边栏配置（使用自动生成的侧边栏）
    sidebar: { "/page": set_sidebar("page") },
    
    // 手动配置的侧边栏（当前被注释掉）
    // sidebar: [
    //   {
    //     text: '文档',
    //     items: [
    //       { text: 'Markdown 例子', link: '/page/example/markdown-examples' },
    //       { text: 'Runtime API 例子', link: '/page/example/api-examples' },
    //     ]
    //   }
    // ],

    // 社交媒体链接配置
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hejnyo/' }
    ],

    // 页脚配置
    footer: {
      copyright: '版权所有 © 2025 HejinYo'
    }
  }
})
