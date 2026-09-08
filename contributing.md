# 参与贡献 Next.js

> 🌐 本文档由 [vercel/next.js](https://github.com/vercel/next.js) 翻译,英文原版见原项目。

- 了解我们对开源的[长期承诺](https://vercel.com/oss)。
- 在提交 PR 之前,请先搜索[现有 PR](https://github.com/vercel/next.js/pulls)或[ issue ](https://github.com/vercel/next.js/issues),确认没有已开放或已关闭的重复条目。

## 可以贡献什么

从 issue 列表入手;[`good first issue`](https://github.com/vercel/next.js/labels/good%20first%20issue) 和 [Documentation](https://github.com/vercel/next.js/labels/Documentation) 标签是很好的切入点,但任何[开放中的 issue](https://github.com/vercel/next.js/issues)都可以认领。

认领 issue 不需要任何许可。如果是新**功能**,请先开一个[讨论](https://github.com/vercel/next.js/discussions/new?category=ideas),等提案被接受后再动手。

## 琐碎改动

每个 pull request 都必须由维护者审核。自动化能帮上忙,但替代不了这一步:总得有人读完改动并判断它是否正确。审核者的注意力是这个项目最稀缺的资源。像修错别字、调格式、改代码风格这类琐碎 PR 很可能会被直接关闭。对于 Next.js 文档(`docs/` 目录)我们对此类改动更开放;详见[文档贡献指南](https://nextjs.org/docs/community/contribution-guide)。

## 流程演示视频

[观看如何为 Next.js 做贡献的演示视频。](https://www.youtube.com/watch?v=cuoNzXFLitc)

## 签名提交

本仓库要求受保护分支上的提交必须带可验证的签名。

在开始贡献之前,请配置 Git 使用 GitHub 可验证的 GPG、SSH 或 S/MIME 密钥对提交签名。未签名的提交会被仓库规则拒绝,必须改写为签名提交后才能合并。

如果 pull request 中包含未签名提交,请重新签名并强推(force-push)分支。确保签名密钥已添加到你的 GitHub 账号,并且你的提交显示为 `Verified` 状态。

提交信息里带一行 `Signed-off-by` 并不能满足此要求。

## 仓库

- [问题分诊](./contributing/repository/triaging.md)
- [代码检查](./contributing/repository/linting.md)
- [发布通道与发布流程](./contributing/repository/release-channels-publishing.md)
- [Pull Request 描述规范](./contributing/repository/pull-request-descriptions.md)

## 文档

- [新增文档](./contributing/docs/adding-documentation.md)

## 核心

- [开发](./contributing/core/developing.md)
- [构建](./contributing/core/building.md)
- [测试](./contributing/core/testing.md)
- [添加错误链接](./contributing/core/adding-error-links.md)
- [添加新特性](./contributing/core/adding-features.md)
- [使用本地应用开发](./contributing/core/developing-using-local-app.md)
<!-- - [使用 VS Code 调试器](./contributing/core/vscode-debugger.md) -->

## Turbopack

- [链路追踪](./contributing/turbopack/tracing.md)
