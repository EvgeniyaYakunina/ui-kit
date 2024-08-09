import { join, resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import { dependencies, devDependencies } from "./package.json";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ rollupTypes: true })],
  build: {
    target: "esnext",
    minify: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, join("src/index.ts")),
      // the proper extensions will be added
      fileName: "index",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        "react/jsx-runtime",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        dir: "dist",
        entryFileNames: "[name].cjs",
        format: "cjs",
      },
    },
  },
});
