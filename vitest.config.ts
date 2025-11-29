import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    setupFiles: ['./vitest.setup.ts'],
    globals: true, // so we don't have to import describe/test/ etc
    include: ['**/*.test.{ts,tsx,js,jsx}'],
    environment: 'jsdom',
  },
});
