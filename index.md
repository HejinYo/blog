---
# VitePress 主页配置文件
# 参考文档：https://vitepress.dev/reference/default-theme-home-page

# 设置页面布局为首页布局
layout: home

# 首页英雄区域配置
hero:
  # 网站名称
  name: "HejinYo's blog"
  
  # 网站副标题（当前被注释掉）
  # text: "Some documents"
  
  # 网站标语（当前被注释掉）
  # tagline: 口号
  
  # 网站Logo/图片配置
  image:
    src: /image/background.png  # 图片路径
    alt: HejinYo's blog         # 图片alt文本
  
  # 首页操作按钮配置
  actions:
    - theme: brand  # 主按钮样式
      text: Markdown 例子  # 按钮文本
      link: /page/example/markdown-examples  # 按钮链接
  
  # 备选操作按钮（当前被注释掉）
  #   - theme: alt
  #     text: API 例子
  #     link: /api-examples

# 特性列表配置
features:
  # 特性1
  - title: 💡 小建议
    details: 选择永远大于努力
  
  # 特性2
  - title: 🧗 努力
    details: 如果做一件事就努力把它做好
  
  # 特性3
  - title: 🤔 思考
    details: 学会思考，不要人云亦云

# Markdown内容分隔符（以下可以添加其他Markdown内容）
---

