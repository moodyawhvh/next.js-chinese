<div align="center">

# next.js 中文文档

[![原项目](https://img.shields.io/badge/原项目-vercel--next.js-blue?style=flat-square&logo=github)](https://github.com/vercel/next.js)
[![License](https://img.shields.io/badge/许可证-MIT-blue?style=flat-square)](https://github.com/vercel/next.js/blob/canary/license.md)
[![NPM](https://img.shields.io/badge/npm-next-red?style=flat-square&logo=npm)](https://www.npmjs.com/package/next)
[![微信联系](https://img.shields.io/badge/微信-uaycar-brightgreen?style=flat-square&logo=wechat)](#)

</div>

---

> 本文档是 [vercel/next.js](https://github.com/vercel/next.js) 官方 README 的中文翻译版本,并在保持原意的基础上补充了部分中文说明,便于中文开发者快速理解与上手。完整源代码请访问原项目:https://github.com/vercel/next.js

---

## 目录

- [项目定位](#项目定位)
- [快速开始](#快速开始)
- [文档](#文档)
- [核心概念速览(补充)](#核心概念速览补充)
- [常用命令(补充)](#常用命令补充)
- [社区](#社区)
- [参与贡献](#参与贡献)
- [安全](#安全)
- [版权声明](#版权声明)

---

## 项目定位

Next.js 的官方口号是 **"The React Framework"**——React 官方推荐的全栈框架之一。它被世界上一些规模最大的公司所采用,让你能够通过扩展最新的 React 特性来创建全栈 Web 应用,并集成基于 Rust 的强大 JavaScript 工具链,以获得最快的构建速度。

换句话说,Next.js 解决的是"用 React 做一个完整的生产级应用"所需要面对的全部工程问题:渲染策略、路由、数据获取、资源优化、打包构建、部署运维,都由框架统一提供开箱即用的方案。

- 访问官方互动课程 [Learn Next.js](https://nextjs.org/learn),从零开始学习 Next.js。
- 访问 [Next.js Showcase](https://nextjs.org/showcase),查看更多使用 Next.js 构建的网站案例。

## 快速开始

### 环境要求

- Node.js(建议使用 LTS 长期支持版本)
- npm / yarn / pnpm 任一包管理器

### 方式一:使用脚手架创建新项目(推荐)

```bash
npx create-next-app@latest
```

按提示选择 TypeScript、ESLint、Tailwind CSS、App Router 等选项后,脚手架会生成一个可直接运行的完整项目。

### 方式二:手动安装到已有项目

```bash
npm install next react react-dom
```

在 `package.json` 中添加脚本:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

启动开发服务器:

```bash
npm run dev
```

打开浏览器访问 `http://localhost:3000`,即可看到应用首页。修改代码后页面会自动热更新。

## 文档

完整的官方文档请访问:[https://nextjs.org/docs](https://nextjs.org/docs)。

文档覆盖路由、数据获取、渲染策略、样式方案、API 参考、部署指南等全部主题。

## 核心概念速览(补充)

以下内容为中文翻译版补充说明,帮助读者快速建立对 Next.js 的整体认知:

- **App Router(应用路由)**:基于目录结构的路由系统,`app/` 目录下的文件与文件夹直接映射为路由,支持布局(Layout)、加载态(Loading)、错误边界(Error)等约定式组件。
- **React 服务端组件**:组件默认在服务端渲染,可直接安全地访问数据库、文件系统等后端资源;客户端组件通过 `"use client"` 指令声明,按需水合。
- **渲染策略**:同一应用中可按页面选择服务端渲染(SSR)、静态生成(SSG)、增量静态再生成(ISR)或客户端渲染,兼顾动态性与性能。
- **数据获取**:通过扩展的 `fetch` API 在组件中直接获取数据,并支持按请求、按时间或按需的缓存与再验证策略。
- **Turbopack**:基于 Rust 的新一代打包工具,开发环境的构建与热更新速度相比传统方案显著提升。
- **内置优化**:`next/image` 自动完成图片尺寸、格式与懒加载优化;`next/font` 自动托管与自托管字体并消除布局偏移;脚本与第三方资源同样有对应的优化组件。
- **Route Handlers / API 路由**:在项目中直接编写后端接口,与前端共享同一代码库与类型体系。
- **中间件(Middleware)**:在请求到达路由之前执行逻辑,可用于鉴权、重定向、改写请求头等场景。
- **部署**:对 Vercel 提供零配置支持,同时可自托管于 Node.js 服务器、Docker 容器或输出为静态站点。

## 常用命令(补充)

```bash
npm run dev      # 启动开发服务器(默认端口 3000)
npm run build    # 构建生产版本
npm run start    # 启动生产服务器
```

升级 Next.js 到最新版本:

```bash
npm install next@latest react@latest react-dom@latest
```

## 社区

Next.js 社区活跃于 [GitHub Discussions](https://github.com/vercel/next.js/discussions),你可以在这里提问、分享想法,并与其他用户交流你的项目。

如果想与其他社区成员实时交流,可以加入 Next.js 官方 [Discord](https://nextjs.org/discord) 服务器。

请注意,[行为准则(Code of Conduct)](https://github.com/vercel/next.js/blob/canary/CODE_OF_CONDUCT.md) 适用于所有 Next.js 社区渠道。强烈建议所有用户阅读并遵守该准则,以免产生不必要的后果。

## 参与贡献

我们欢迎并非常感谢对 Next.js 的各种贡献。不过在你动手之前,请先阅读[贡献指南(Contribution Guidelines)](https://github.com/vercel/next.js/blob/canary/contributing.md),以确保你能顺利地参与 Next.js 的开发。

### Good First Issues(新手友好任务):

我们维护了一份 **[good first issues](https://github.com/vercel/next.js/labels/good%20first%20issue)** 列表,其中包含范围相对有限的缺陷修复任务。对于新手和初学者来说,这是一个绝佳的起点:你可以借此积累经验、熟悉贡献流程,并逐步深入 Next.js 代码库。

## 安全

如果你认为自己在 Next.js 中发现了安全漏洞,我们鼓励你**负责任地披露该漏洞,而不要直接公开发布 issue**。

如需参与我们的开源软件漏洞赏金计划(Bug Bounty),请发送邮件至 [responsible.disclosure@vercel.com](mailto:responsible.disclosure@vercel.com)。我们会将你加入该计划,并提供提交报告的进一步指引。

---

## 版权声明

- 本文档为 [vercel/next.js](https://github.com/vercel/next.js) 官方 README 的中文翻译版本,仅供中文开发者学习交流使用。
- Next.js 项目及其全部源代码的版权归 Vercel 及原项目作者所有,遵循其原始许可证(MIT License)发布。
- 翻译文档内容如有与官方英文文档不一致之处,以[官方文档](https://nextjs.org/docs)为准。
- **代部署 / 定制服务 / 技术咨询 请添加微信:uaycar**

如果本文档对你有帮助,请给原项目 [vercel/next.js](https://github.com/vercel/next.js) 点一个 Star!⭐
