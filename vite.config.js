import {fileURLToPath, URL} from "node:url";
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'


const fs = require('fs')
const path = require('path')

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
    base: '/pin-go/',
    build: {
        rollupOptions: {
            input: {
                home: path.resolve(__dirname, 'index.html'),
                ...INPUTS
            },
        },
        css: {
            postcss: {
                plugins: [
                    autoprefixer({}) // add options if needed
                ],
            },
            preprocessorOptions: {
                scss: {
                    additionalData: `
                          @import "./src/styles/_variables.scss";
                        `
                }
            }
        }
    }
});
