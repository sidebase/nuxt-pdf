![nuxt-pdf](.github/preview.jpg)

# 📄 nuxt-pdf

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![GitHub stars](https://badgen.net/github/stars/sidebase/nuxt-pdf)](https://GitHub.com/sidebase/nuxt-pdf/)
[![License][license-src]][license-href]
[![Follow us on Twitter](https://badgen.net/badge/icon/twitter?icon=twitter&label)](https://twitter.com/sidebase_io)
[![Join our Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/NDDgQkcv3s)

> `nuxt-pdf` is a easy to use, pdf exporting module to convert Nuxt 3 components into downloadable PDFs.

## Features

- Easily export your Nuxt 3 components into PDFs
- Guides for PDF specific styles
- Track exporting progress

## Quick Setup

1. Add `@sidebase/nuxt-pdf` dependency to your project

```bash
# Using pnpm
pnpm add -D @sidebase/nuxt-pdf

# Using yarn
yarn add --dev @sidebase/nuxt-pdf

# Using npm
npm install --save-dev @sidebase/nuxt-pdf
```

2. Add `@sidebase/nuxt-pdf` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-pdf'
  ]
})
```

That's it! You can now use My Module in your Nuxt app ✨

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run ESLint
pnpm run lint

# Run Vitest
pnpm run test
pnpm run test:watch

# Release new version
pnpm run release
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@sidebase/nuxt-pdf/latest.svg
[npm-version-href]: https://npmjs.com/package/@sidebase/nuxt-pdf

[npm-downloads-src]: https://img.shields.io/npm/dt/@sidebase/nuxt-pdf.svg
[npm-downloads-href]: https://npmjs.com/package/@sidebase/nuxt-pdf

[license-src]: https://img.shields.io/npm/l/@sidebase/nuxt-pdf.svg
[license-href]: https://npmjs.com/package/@sidebase/nuxt-pdf
