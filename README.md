# Tailwind Staff Software Engineer Application

This is my application for the role as a [Staff Software Engineer](https://tailwindcss.com/careers/staff-software-engineer) at Tailwind. The application is deployed using GitHub Pages at [luudjanssen.github.io/tailwind-application](https://luudjanssen.github.io/tailwind-application/).

Besides providing the requested information, this repository also somewhat serves as a showcase of my work and skills. This repository uses React, Tailwind and [a custom rendering pipeline](./src/build/render.tsx) that renders the React to a static site (without JS). It also uses a custom-built [Tailwind component factory utility](./src/utils/tailwind.tsx) which was ported from private projects.

## Running the project

I use [PNPM](https://pnpm.io/) to manage dependencies:

```bash
pnpm install --ignore-scripts
```

To start the development server:

```bash
pnpm dev
```

## Scripts

The root `package.json` contains a set of scripts you can run, most notably:

- `pnpm build` - Builds the app.
  - `pnpm build:copy` - Copies the files in the public directory to the build output.
  - `pnpm build:react` - Runs a custom rendering pipeline to render the React app to static HTML.
  - `pnpm build:tailwind` - Runs the Tailwind CLI to build the CSS.
- `pnpm clean` - Clean temporary / cache related folders. This does not remove the `node_modules` folder.
  - `pnpm clean:build` - Clean the build output.
  - `pnpm clean:cache` - Clean the tooling caches (Prettier, ESLint, etc.).
- `pnpm dev` - Run the entier build pipeline in watch mode.
  - `pnpm dev:copy` - Copies the files in the public directory to the build output.
  - `pnpm dev:react` - Runs a custom rendering pipeline to render the React app to static HTML.
  - `pnpm dev:tailwind` - Runs the Tailwind CLI to build the CSS.
- `pnpm format` - Run all code formatters.
  - `pnpm format:eslint` - Run ESLint in fix mode.
  - `pnpm format:prettier` - Format code with Prettier.
- `pnpm lint` - Run all code linters.
  - `pnpm lint:eslint` - Run ESLint.
  - `pnpm lint:prettier` - Run Prettier in check mode.
  - `pnpm lint:typescript` - Run Typescript type checking.
- `pnpm start` - Serve the build output.
