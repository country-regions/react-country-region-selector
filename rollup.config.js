const babel = require('@rollup/plugin-babel');
const resolve = require('@rollup/plugin-node-resolve');
const url = require('@rollup/plugin-url');
const json = require('@rollup/plugin-json');
const terser = require('@rollup/plugin-terser');
const pkg = require('./package.json');
const argv = require('minimist')(process.argv.slice(2));
const parseCountryList = require('./rollup-plugin-parse-country-list');

// e.g. rollup -c --config-countries=GB,CA,US
let countries = [];
if (argv.hasOwnProperty('config-countries')) {
  countries = argv['config-countries'].split(',');
}

module.exports = {
  input: 'src/index.js',
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
    resolve(),
    terser(),
  ],
  external: ['react', 'react-dom', 'prop-types'],
};
