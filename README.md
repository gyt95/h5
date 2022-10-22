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