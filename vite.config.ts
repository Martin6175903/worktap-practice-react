import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        exportType: 'default',
        svgo: true,
        svgoConfig: {
          multipass: true,
          plugins: [
            'preset-default',
            { name: 'removeViewBox', active: false },
            { name: 'cleanupIDs', active: true },
            { name: 'removeDimensions', active: true },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      assets: path.resolve(__dirname, 'src/assets'),
      pages: path.resolve(__dirname, 'src/pages'),
    }
  }
})
