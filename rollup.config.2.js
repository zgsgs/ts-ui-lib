import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/main.ts',
  output: {
    format: 'umd',
    name: 'Joli',
    file: 'dist/umd/Joli.js',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    serve({
      open: true,
      port: 3000,
      contentBase: '',
      openPage: '/index.html',
    }),
    commonjs(),
  ],
};
