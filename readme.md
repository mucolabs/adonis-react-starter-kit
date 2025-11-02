<h1 align="center">
  Adonis React Starter Kit
</h1>

<div align="center">
  <p>
A minimalist, elegant, and production-ready starter kit.
  </p>
</div>

<div align="center">
  <p>
    <a href="https://ksk.fly.dev" target="_blank">Live Demo</a>
</div>

Build modern single-page applications without sacrificing the power and simplicity of classic server-side routing.
This starter kit provides a lightweight, production-ready foundation to help you move fast and stay focused.

**Preconfigured with:**

- Minimal authentication setup
- Production-optimized [SQLite defaults](https://highperformancesqlite.com/articles/sqlite-recommended-pragmas)
- [Chakra UI](https://www.chakra-ui.com/) — a consistent and accessible design system
- Ready-to-use Dockerfile for smooth deployment
- Seamless hosting on [Fly.io](https://fly.io/)
- Fully replicated SQLite database powered by [Litestream](https://litestream.io/)
- [React Compiler](https://react.dev/learn/react-compiler/installation#) for automatic component optimization
- [Fontaine](https://github.com/unjs/fontaine) for automatic font optimization
- [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for clean, consistent code formatting

## Local Installation Guide

```bash
# Create a new project using this kit
npm create adonisjs@next -- -K="mucolabs/adonis-react-starter-kit" demo-app

# Navigate into the project directory
cd demo-app

# Copy environment variables and configure them as needed
cp .env.example .env

# Generate the application key
node ace generate:key

# Run database migrations
node ace migration:run
```

Start the development server:

```bash
npm run dev
```
