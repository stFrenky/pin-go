import {fileURLToPath, URL} from "node:url";

const fs = require('fs')
const path = require('path')
import { defineConfig } from 'vite'

const PAGES = fs.readdirSync('./pages');

const getInputs = () => {
    return PAGES.reduce((inputs, page) => {
        inputs[page.replace('.html', '')] = path.resolve(__dirname, `./pages/${page}`);

        return inputs;
    }, {});
}

const INPUTS = getInputs();


export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        rollupOptions: {
            input: {
                home: path.resolve(__dirname, 'index.html'),
                ...INPUTS
            },
        },
        base: '/pin-go/',
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                          @import "./src/styles/_animations.scss";
                          @import "./src/styles/_variables.scss";
                          @import "./src/styles/_mixins.scss";
                          @import "./src/styles/_helpers.scss";
                        `
                }
            }
        }
    }
});
