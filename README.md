<div align="center">

# next.js 中文翻译版

**[中文版] next.js — The React Framework:用于构建全栈 Web 应用的 React 框架**

[![原项目](https://img.shields.io/badge/原项目-vercel--next.js-blue?style=flat-square&logo=github)](https://github.com/vercel/next.js)
[![中文文档](https://img.shields.io/badge/中文文档-README.zh--CN.md-orange?style=flat-square)](README.zh-CN.md)
[![GitHub Stars](https://img.shields.io/github/stars/vercel/next.js?style=flat-square&label=原项目Stars)](https://github.com/vercel/next.js/stargazers)
[![微信联系](https://img.shields.io/badge/微信-uaycar-brightgreen?style=flat-square&logo=wechat)](#)

</div>

---

> 这是 [vercel/next.js](https://github.com/vercel/next.js) 的中文翻译版本。
> 完整源代码请访问原项目:https://github.com/vercel/next.js

**代部署 / 定制服务 / 技术咨询 请添加微信:uaycar**

---

## 📖 项目简介

Next.js 是由 Vercel 开发维护的开源 React 框架,官方定位为 "The React Framework"。它被全球众多大型公司采用,通过扩展最新的 React 特性(如服务端组件),并集成基于 Rust 的高性能 JavaScript 工具链,帮助开发者快速构建全栈 Web 应用,并获得业内领先的构建速度。开箱即用、零配置起步,同时支持服务端渲染、静态生成等灵活的渲染策略,是 React 生态中最主流的应用开发方案之一。

## ✨ 主要特性

- **全栈一体**:在同一项目中同时编写前端界面与后端逻辑,扩展最新 React 特性
- **极速构建**:集成基于 Rust 的 JavaScript 工具链(Turbopack),构建与热更新速度显著提升
- **混合渲染**:支持服务端渲染(SSR)、静态站点生成(SSG)、增量静态再生成(ISR)等多种策略,按页面灵活选择
- **文件系统路由**:基于目录结构自动生成路由,无需手动配置
- **API 能力**:内置 API 路由 / Route Handlers,轻松构建后端接口
- **内置优化**:图片、字体、脚本等资源开箱即用地自动优化,提升性能与 Core Web Vitals 得分
- **零配置起步**:合理的默认配置,安装即可开发,同时保留深度定制能力
- **完善的生态**:官方 Learn 互动课程、Showcase 案例展示、GitHub Discussions 与 Discord 社区

## 📁 文件说明

| 文件 | 说明 |
|:-----|:-----|
| README.md | 本文件(中文简介) |
| README.zh-CN.md | 详细中文文档(完整汉化) |

## 🚀 快速开始

1. 准备好 Node.js 环境(建议使用 LTS 版本)。

2. 使用官方脚手架一键创建项目(推荐):

```bash
npx create-next-app@latest
```

3. 或者手动将 Next.js 安装到已有项目:

```bash
npm install next react react-dom
```

4. 在 `package.json` 中添加开发与构建脚本:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

5. 启动开发服务器:

```bash
npm run dev
```

6. 在浏览器访问 `http://localhost:3000`,即可看到你的 Next.js 应用。

7. 前往官方互动课程 [Learn Next.js](https://nextjs.org/learn) 系统学习核心概念与实战。

8. 想看真实项目案例,可浏览 [Next.js Showcase](https://nextjs.org/showcase)。

完整源代码与最新版本请访问原项目:https://github.com/vercel/next.js

## 📞 联系方式

**代部署 / 定制服务 / 技术咨询 请添加微信:uaycar**

---

本项目为 [vercel/next.js](https://github.com/vercel/next.js) 的中文翻译版本,所有代码版权归原项目作者所有,遵循其原始许可证。

**如果觉得有用,请给原项目点个 Star!** ⭐
