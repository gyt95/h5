# h5

> Pick a very concise name and write a meaningful project.

## Motivation

Don't want to copy-paste request library files in every project anymore.
Don't want to install a bunch of dependencies with the same name in every project.
Don't want to repackage the same components in each project.

So there is this project.
This project was born to combine all H5 page projects into one project.

## Technology stack

- Management mode: monorepo
- Package management tool: pnpm
- Build tool: Vite3.x
- Front-end framework: Vue3.2+ (due to the powerful third-party component library of vant developed on the H5 side, Vue is used decisively and uniformly)
- Routing: Vue-router4
- State management: Pinia
- Component library: Vant3.x (4.x is still in rc version, it is still far from stable)
- Type checking: TypeScript4.x
- Request library: Axios
- Other Technologies: Modular Federation

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
