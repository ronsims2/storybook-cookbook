/** @type {import('vite').UserConfig} */
import {resolve, dirname} from 'node:path'
import {fileURLToPath} from 'node:url'
import {defineConfig} from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  build: {
    lib: {
      // This should point to the actual built time code file and not the one resolved to at runtime
      entry: resolve(__dirname, 'index.ts'),
      name: 'TallTales',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'lodash-es'],
      output: {
        globals: {
          'react-dom': 'ReactDom',
          react: 'React',
          'react/jsx-runtime': 'ReactJsxRuntime',
          'lodash-es': 'LodashEs',
        },
      },
    },
  },
})
