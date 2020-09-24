import path from 'path';

import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';
import bundleSize from 'rollup-plugin-bundle-size';

const BUILD = 'build';

const output = {
  sourcemap: true,
  format: 'umd',
  name: 'toposort',
};

export default {
  input: 'src/index.ts',
  output: [
    {
      file: path.join(BUILD, 'toposort.module.js'),
      sourcemap: true,
      format: 'esm',
    },
    {...output, file: path.join(BUILD, 'toposort.js')},
    {...output, file: path.join(BUILD, 'toposort.min.js'), plugins: [terser()]},
  ],
  plugins: [typescript({tsconfig: 'tsconfig.json'}), bundleSize()],
};
