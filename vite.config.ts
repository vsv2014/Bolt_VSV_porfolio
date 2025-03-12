import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Bolt_VSV_porfolio/',
  server: {
    port: 3001,
    host: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
