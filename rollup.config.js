import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/basa.js",
    output: {
      file: "dist/basa.js",
      name: "Basa",
      format: "umd",
    },
    plugins: [commonjs(), terser()],
  },
  {
    input: "src/basa.js",
    output: [
      { file: "dist/basa.cjs.js", format: "cjs" },
      { file: "dist/basa.esm.js", format: "es" },
    ],
  },
];
