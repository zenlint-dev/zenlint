import {defineConfig} from 'tsup';

export default defineConfig({
    format: ['esm'],
    entry: ['./src/cli.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    outDir: 'dist',
    splitting: false,
    minify: true,
})