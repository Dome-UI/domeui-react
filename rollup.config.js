import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import smartAsset from 'rollup-plugin-smart-asset'
import json from '@rollup/plugin-json'
import image from '@rollup/plugin-image'
import typescript from '@rollup/plugin-typescript'
import pkg from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const [mainOutDir, mainOutName] = pkg.main.split('/')
const [moduleOutDir, moduleOutName] = pkg.module.split('/')

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: mainOutDir,
      entryFileNames: mainOutName,
      chunkFileNames: '[name][hash].js',
      format: 'cjs',
    },
    {
      dir: moduleOutDir,
      entryFileNames: moduleOutName,
      chunkFileNames: '[name][hash].es.js',
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    smartAsset({
      url: 'copy',
      extensions: ['.eot', '.woff', '.woff2', '.ttf'],
      assetsPath: 'assets/fonts/',
      keepName: true,
      useHash: true,
      keepImport: true,
    }),
    json(),
    image(),
    resolve({
      jsnext: true,
      extensions,
    }),
    typescript({
      exclude: ['**/*.stories.*'],
    }),
    commonjs(),
    babel({
      include: ['src/**/*'],
      babelHelpers: 'bundled',
      exclude: ['node_modules/**'],
      extensions,
    }),
  ],
}
