import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import adonisjs from '@adonisjs/vite/client'
import inertia from '@adonisjs/inertia/vite'
import { FontaineTransform } from 'fontaine'
import path from 'node:path'

export default defineConfig({
  plugins: [
    react(),
    inertia({ ssr: { enabled: true, entrypoint: 'inertia/ssr.tsx' } }),
    adonisjs({ entrypoints: ['inertia/app.tsx'], reload: ['resources/views/**/*.edge'] }),
    FontaineTransform.vite({
      fallbacks: ['Arial'],
      resolvePath: (id) => {
        return new URL(path.join(path.dirname(import.meta.url), 'node_modules', id))
      },
    }),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${import.meta.dirname}/inertia/`,
    },
  },
})
