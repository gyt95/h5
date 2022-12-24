# h5

> 取一个很简洁的名称，写一个有意义的项目。

## 动机

不想再在每个项目都复制粘贴请求库文件。

不想再在每个项目都安装一堆同名的依赖。

不想再在每个项目里重复封装相同的组件。

所以有了这个项目。

这个项目就是为了把所有 H5 页面项目集合到一个项目而生的。

## 技术栈

- 管理模式：Monorepo
- 包管理工具：[pnpm](https://github.com/pnpm/pnpm)
- 构建工具：[Vite 3.x](https://github.com/vitejs/vite)
- 前端框架：[Vue 3.2+](https://github.com/vuejs/core)
- 路由：[Vue-router 4.x](https://github.com/vuejs/router)
- 状态管理：[Pinia 2.x](https://github.com/vuejs/pinia)
- 类型检查：[TypeScript 4.x](https://github.com/microsoft/TypeScript)
- 组件库：[Vant 4.x](https://github.com/youzan/vant)
- 请求库：[Axios](https://github.com/axios/axios)

- 其他技术：[模块联邦](https://webpack.docschina.org/concepts/module-federation/)

## 注意事项

Vue3.x 需要 Node.js 版本 16+。

Vite 需要 Node.js 版本 14.18+，16+。

lint-staged 采用 v13.x，需要 Node.js 版本 14.13.1，16.0.0 或以上。

综合以上，建议安装 Node.js 版本 16+。目前长期维护版本为 16.18.0，最新尝鲜版本为 19.0.0。

## 构思

0. 因为 H5 端开发有强大的第三方组件库 Vant ，所以果断统一使用 Vue；
1. 因为技术栈统一，所以以上提及的全部作为 root 依赖。打包时可考虑模块联邦，减少项目打包体积；
2. 需要有脚手架快速创建模版

## 使用

以 windows 为例

```bash
# 进入目录，执行安装
pnpm i

# 由于webapp2提供远程模块供其他地方调用，所以需要先执行build命令。并且需要本地开启静态服务器所以用preview命令
cd packages\webapp2
pnpm build
pnpm preview

# 进入webapp1，启动应用
cd ..\webapp1
pnpm dev
```

## 常用命令

```bash
# 在根目录安装开发依赖 xxx
pnpm add xxx -wD

# 在 core 中单独安装 xxx
pnpm add xxx --filter @h5/core

# 在 package webapp1 中添加核心库 core
pnpm i @h5/core -r --filter @h5/webapp1
```

## 贡献指南

使用过程中发现任何问题都可以提 [Issue](https://github.com/gyt95/h5/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/gyt95/h5/pulls)。

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
