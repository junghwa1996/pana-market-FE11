import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*', // 복사할 파일 경로
          dest: 'assets', // 빌드된 파일이 위치할 폴더
        },
      ],
    }),
  ],
  esbuild: {
    jsx: 'transform',
    loader: 'tsx',
    include: [/src\/.*\.tsx?$/],
    exclude: /node_modules/,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg'],
});
