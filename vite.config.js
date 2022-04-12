import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line no-undef
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@': path.resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 3002,
    },
    plugins: [react()]
});
