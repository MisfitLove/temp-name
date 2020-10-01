// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: './out/Display/display3d.js',
  output: {
    dir: './out',
    format: 'cjs'
  },
  plugins: [typescript()]
};