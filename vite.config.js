import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      // src 내 절대경로 설정(@)
      { find: '@components', replacement: '/src/components' },
      // src 내 절대경로 설정(@)
      { find: '@pages', replacement: '/src/pages' },
      // src 내 절대 경로 설정(@)
    ],
  },
});
