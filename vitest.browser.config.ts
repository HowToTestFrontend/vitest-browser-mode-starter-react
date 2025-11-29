import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    // run this before each test. In this case it is used to ensure that the css is loaded
    setupFiles: ['vitest.browser.setup.ts'],

    // list of file name extensions used for browser tests:
    include: ['./**/*.browser.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    // so we don't have to import describe, expect, etc:
    globals: true,

    testTimeout: 5000,

    // config for browser mode:
    browser: {
      enabled: true,
      headless: process.env.CI === 'true',
      provider: playwright(),
      screenshotDirectory: 'vitest-test-results',
      instances: [{ browser: 'chromium' }],
    },
  },
});
