# Skoow

This is a frontend repo for personal study, management by turborepo & pnpm.

## What's inside?

This repo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `nextjs`: a [Next.js](https://nextjs.org/) app to learn Next.js
- `remix`: a [Remix](https://remix.run/) app to learn Remix
- `vanilla`: a vanilla JavaScript app to learn new features of JavaScript
- `vue`: a [Vue.js](https://vuejs.org/) app to learn Vue.js
- `ui`: a stub React component library shared by both `nextjs` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd skoow
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd skoow
pnpm run dev
```

### Install Dependencies

To quickly install dependencies in multiple packages, you can use your package manager:

```
pnpm install jest --save-dev --recursive --filter=docs --filter=@repo/ui
```

### Update Dependencies

To update all dependencies, run the following command:

```
cd skoow
pnpm run upgrade
```

Keeping dependencies on the same version, run this command:

```
pnpm up --recursive typescript@latest
```