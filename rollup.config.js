import { rollup } from 'rollup';
import babel from 'rollup-plugin-babel';

rollup({
    entry: 'src/main.js',
    output: {
        file: 'dist/rcrs.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
});
