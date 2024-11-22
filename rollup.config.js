import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';
import json from 'rollup-plugin-json';
import parseCountryList from './rollup-plugin-parse-country-list';
import pkg from './package.json';

const argv = require('minimist')(process.argv.slice(2));

// e.g. rollup -c --config-countries=GB,CA,US
let countries = [];
if (argv.hasOwnProperty('config-countries')) {
  countries = argv['config-countries'].split(',');
}

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    parseCountryList({ countries }),
    external(),
    postcss({
      modules: true,
    }),
    json(),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    resolve(),
    commonjs(),
  ],
};
