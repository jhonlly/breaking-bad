/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import { configDefaults} from 'vitest/config';
import react from '@vitejs/plugin-react';
const path = require('path');

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 3002,
    },
    plugins: [react()],
    test: {
        globals: true,
        environment: 'happy-dom',
        setupFiles: './src/test/setup.js',
        exclude: [...configDefaults.exclude, 'packages/template/*'],
    },

});
