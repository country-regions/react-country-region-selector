import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import pkg from '../package.json' with { type: 'json' };
import argv from 'minimist';
import parseCountryList from './rollup-plugin-parse-country-list';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import type { RollupOptions } from 'rollup';

const args = argv(process.argv.slice(2));

// e.g. rollup -c --config-countries=GB,CA,US
let countries = [];
if (args.hasOwnProperty('config-countries')) {
  countries = args['config-countries'].split(',');
}

const config: RollupOptions[] = [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        compact: true,
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true,
        compact: true,
      },
    ],
    plugins: [
      parseCountryList({ countries }),
      json(),
      url(),
      babel({
        exclude: 'node_modules/**',

        // TODO check https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
        babelHelpers: 'bundled',
      }),
      resolve({
        extensions: ['.ts', '.tsx', '.js'],
      }),
      terser(),
      typescript({}),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },

  {
    input: './src/types.d.ts',
    output: [{ file: 'dist/types.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];

export default config;
