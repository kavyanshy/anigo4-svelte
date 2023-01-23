import postcss from './postcss.config.js';
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  css:{
    postcss
  },
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
  }
})