import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Ensure this matches the directory your app is built to
  },
  server: {
    open: true,
  },
  base: '/', // Ensure this is correct based on your deployment structure
});