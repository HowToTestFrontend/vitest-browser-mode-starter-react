# Vitest Browser Mode Starter (React)

A minimal starter kit showing how to use [Vitest Browser Mode](https://vitest.dev/guide/browser/) with React.

> From [How to Test Frontend](https://howtotestfrontend.com) - full tutorial coming soon on my blog, and course/lessons very soon!

## What is Vitest Browser Mode?

Vitest Browser Mode runs your tests in a real browser environment (via Playwright/WebDriver), giving you access to actual browser APIs and more accurate rendering behavior compared to jsdom.

## Videos

Preview of how Vitest Browser mode looks when not in headless mode:
(You can see the test results _and then play with the rendered component after the test_)

https://github.com/user-attachments/assets/558d9b61-ef9d-40dc-9e9b-8dbe886c6888

The main app that we are testing:
Very simple app, with a few things to test interaction/hiding content:

https://github.com/user-attachments/assets/8fafc78e-6ed0-41a3-847f-1608a63caf56

# Info

I've tried to keep this as bare bones as possible so you can easily copy/paste things into your repo to get it all working!

> [!NOTE]
> This is using Next.js to scaffold the main app, but this isn't Next.js specific and can apply to any React application.

## Setup guide for running the app

```bash
yarn install # install package.json deps

yarn test:browser:install # install playwright browsers

yarn dev # run the next dev server to preview the app we are testing, then open http://localhost:3000
```

**But you are probably here to see the Vitest config/commands**!

Run either

- `yarn test` for regular (not browser mode) tests
- `yarn test:browser` for browser mode tests

## How the repo is set up

- We have regular vitest tests (using React Testing Library) which are `*.test.tsx` files
- And Browser Mode tests which are `*.browser.tsx` (note: _NOT_ `*.browser.test.tsx`)
- There are two test files - one using regular Vitest (with React Testing Library), and one with the same functionality tested but using Vitest Browser Mode.

## Vitest Browser Mode on CI (Github Actions)

- check out `./.github/workflows/checks.yml` to see how everything is installed and running on GitHub Actions. The tests all run there and pass ok! There are also checks for typechecking, formatting etc.

## Want to learn more about Vitest Browser Mode

Check out [How To Test Frontend.com](https://howtotestfrontend.com/) or the [blog post about Vitest Browser Mode on my site](https://howtotestfrontend.com/blog)!
