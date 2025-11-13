import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['esm'],
  entry: ['./src/cli.ts'],
  skipNodeModulesBundle: true,
  dts: true,
  shims: true,
  clean: true,
  outDir: 'dist',
  splitting: false,
  sourcemap: true,
});
