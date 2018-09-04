import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/rcrs.js',
        format: 'cjs'
    },
    external: [
        'react'
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};