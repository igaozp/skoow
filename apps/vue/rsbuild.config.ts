import {defineConfig, loadEnv} from "@rsbuild/core";
import {pluginVue} from "@rsbuild/plugin-vue";
import {pluginVueJsx} from "@rsbuild/plugin-vue-jsx";
import {fileURLToPath, URL} from "node:url";
import {pluginNodePolyfill} from "@rsbuild/plugin-node-polyfill";

const {publicVars} = loadEnv({prefixes: ["VITE_"]});

export default defineConfig({
    html: {
        template: "./index.html",
    },
    source: {
        entry: {
            index: "./src/main.ts",
        },
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        define: publicVars,
    },
    plugins: [pluginVue(), pluginVueJsx(), pluginNodePolyfill()],
});
