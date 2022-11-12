# h5

> 取一个很简洁的名称，写一个有意义的项目。

## 动机

不想再在每个项目都复制粘贴请求库文件。
不想再在每个项目都安装一堆同名的依赖。
不想再在每个项目里重复封装相同的组件。

所以有了这个项目。
这个项目就是为了把所有 H5 页面项目集合到一个项目而生的。

## 技术栈

- 管理模式：monorepo
- 包管理工具：pnpm
- 构建工具：Vite3.x
- 前端框架：Vue3.2+（由于 H5 端开发有 vant 这个强大的第三方组件库，所以果断统一使用 Vue）
- 路由：Vue-router4
- 状态管理：Pinia
- 组件库：Vant3.x（4.x 目前还在 rc 版本，距离稳定还很远）
- 类型检查：TypeScript4.x
- 请求库：Axios

- 其他技术：模块联邦

## 注意事项

Vue3.x 需要 Node.js 版本 16+。

Vite 需要 Node.js 版本 14.18+，16+。

lint-staged 采用 v13.x，需要 Node.js 版本 14.13.1，16.0.0 或以上。

综合以上，建议安装 Node.js 版本 16+。目前长期维护版本为 16.18.0，最新尝鲜版本为 19.0.0。

## 构思

1. 由于都是统一技术栈，所以以上提及的全部作为 root 依赖。打包时可考虑远程加载，减少项目打包体积；
2.

## 使用

以 windows 为例

```
// 1.进入目录，执行安装
pnpm i

// 由于webapp2提供远程模块供其他地方调用，所以需要先执行build命令。并且需要本地开启静态服务器所以用preview命令。
cd packages\webapp2
pnpm build
pnpm preview

// 进入webapp1，启动应用
cd ..\webapp1
pnpm dev
```

## 常用命令

```
// 在根目录安装开发依赖
> pnpm add xxx -wD

// 在 package webapp1 中添加核心库 core
> pnpm i @h5/core -r --filter @h5/webapp1
```
