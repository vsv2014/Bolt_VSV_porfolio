import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Relative base => the build works at any path (GitHub Pages subfolder,
  // Netlify/Vercel root, or opened straight from disk) with zero config.
  base: mode === 'production' ? './' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3001,
    // Bind all interfaces so sandboxed / proxied previews can reach the dev server.
    host: true,
    allowedHosts: true,
    // When the dev server sits behind an HTTPS proxy (e.g. the Arena preview),
    // the HMR socket must be told to use wss on the public port. Opt-in via env
    // so a normal `npm run dev` on localhost keeps the default behaviour.
    ...(process.env.VITE_PREVIEW_HMR === '1'
      ? { hmr: { protocol: 'wss' as const, clientPort: 443 } }
      : {}),
  },
}));
