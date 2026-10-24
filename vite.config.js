import { defineConfig } from 'vite';

// During development, send /api calls to the service running on port 4000
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
});
