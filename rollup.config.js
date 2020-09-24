import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';

const output = {
  sourcemap: true,
  format: 'umd',
  name: 'toposort',
};

export default {
  input: 'src/index.ts',
  output: [
    {...output, file: 'build/toposort.js'},
    {...output, file: 'build/toposort.min.js', plugins: [terser()]},
  ],
  plugins: [resolve({browser: true}), typescript({tsconfig: 'tsconfig.json'})],
};
