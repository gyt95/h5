# h5

> Pick a very concise name and write a meaningful project.

## Motivation

Don't want to copy-paste request library files in every project anymore.

Don't want to install a bunch of dependencies with the same name in every project.

Don't want to repackage the same components in each project.

So there is this project.

This project was born to combine all H5 page projects into one project.

## Technology stack

- Management mode: Monorepo
- Package management tool: [pnpm](https://github.com/pnpm/pnpm)
- Build tool: [Vite 3.x](https://github.com/vitejs/vite)
- Front-end framework: [Vue 3.2+](https://github.com/vuejs/core)
- Routing: [Vue-router 4.x](https://github.com/vuejs/router)
- State management: [Pinia 2.x](https://github.com/vuejs/pinia)
- Type checking: [TypeScript 4.x](https://github.com/microsoft/TypeScript)
- Component library: [Vant 3.x](https://github.com/youzan/vant) (4.x is still in rc version, it is still far from stable)
- Request library: [Axios](https://github.com/axios/axios)
- Other Technologies: [Module Federation](https://webpack.js.org/concepts/module-federation/)

## Precautions

Vue3.x requires Node.js version 16+.

Vite requires Node.js version 14.18+, 16+.

lint-staged uses v13.x and requires Node.js version 14.13.1, 16.0.0 or above.

Based on the above, it is recommended to install Node.js version 16+. The current long-term maintenance version is 16.18.0, and the latest early adopter version is 19.0.0.

## Idea

## Usage

Take windows as an example.

```

// 1. Enter the directory and execute the installation

pnpm i

// Since webapp2 provides remote modules for other places to call, you need to execute the build command first. And you need to open a static server locally, so use the preview command.

cd packages\webapp2
pnpm build
pnpm preview

// Enter webapp1 and start the application

cd ..\webapp1
pnpm-dev

```

## Common Commands

```
// Install development dependencies in the root directory

> pnpm add xxx -wD

// Add the core library core to package webapp1

> pnpm i @h5/core -r --filter @h5/webapp1
```
