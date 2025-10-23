import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import pkg from "../package.json" with { type: "json" };
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import type { RollupOptions } from "rollup";

const config: RollupOptions[] = [
  {
    input: "./src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        sourcemap: true,
        compact: true,
      },
      {
        file: pkg.module,
        format: "es",
        sourcemap: true,
        compact: true,
      },
    ],
    plugins: [
      json(),
      url(),
      babel({
        exclude: "node_modules/**",

        // TODO check https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
        babelHelpers: "bundled",
      }),
      resolve({
        extensions: [".ts", ".tsx", ".js"],
      }),
      terser(),
      typescript({}),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },

  {
    input: "./src/index.ts",
    output: [{ file: "dist/types.d.ts", format: "es" }],
    plugins: [dts()],
  },
];

export default config;
