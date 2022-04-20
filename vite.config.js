import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// eslint-disable-next-line no-undef
const path = require('path');

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
    plugins: [react()],
});
