// reference https://github.com/LLOneBot/LLOneBot/blob/main/electron.vite.config.ts
import cp from 'vite-plugin-cp';
import { viteSingleFile } from 'vite-plugin-singlefile';

const config = {
  main: {
    build: {
      outDir: 'LiteLoaderQQNT-NekoImageR/main',
      minify: 'terser',
      emptyOutDir: true,
      lib: {
        formats: ['cjs'],
        entry: { main: 'liteloader/main/main.ts' }
      },
      rollupOptions: {
        input: 'liteloader/main/main.ts'
      }
    },
    plugins: [
      cp({
        targets: [
          { src: './liteloader/manifest.json', dest: 'LiteLoaderQQNT-NekoImageR' },
          { src: './misc/logo.png', dest: 'LiteLoaderQQNT-NekoImageR' },
          { src: './dist', dest: 'LiteLoaderQQNT-NekoImageR/main/dist' },
          { src: './dist/assets', dest: 'LiteLoaderQQNT-NekoImageR/main/dist/assets' },
          // { src: 'src/renderer/settings.html', dest: 'LiteLoaderQQNT-NekoImage' }
        ]
      })
    ],
    cssCodeSplit: true
  },
  preload: {
    build: {
      outDir: 'LiteLoaderQQNT-NekoImageR/preload',
      minify: 'terser',
      emptyOutDir: true,
      lib: {
        formats: ['cjs'],
        entry: { preload: 'liteloader/preload/preload.ts' }
      },
      rollupOptions: {
        input: 'liteloader/preload/preload.ts'
      }
    },
    resolve: {},
    cssCodeSplit: true
  },
  renderer: {
    // vite config options
    build: {
      outDir: 'LiteLoaderQQNT-NekoImageR/renderer',
      minify: 'terser',
      emptyOutDir: true,
      lib: {
        formats: ['es'],
        entry: { renderer: 'liteloader/renderer/renderer.ts' }
      },
      rollupOptions: {
        input: 'liteloader/renderer/renderer.ts'
      }
    },
    plugins: [
      // cp({
      //   targets: [{ src: 'src/renderer/injectIframe.css', dest: 'LiteLoaderQQNT-NekoImage/renderer/' }]
      // }),
      viteSingleFile()
    ],
    define: {
      'process.env': {}
    }
  },
  cssCodeSplit: true
};

export default config;
