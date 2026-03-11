import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";



// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
    tailwindcss(),
    ],
build:{
    cssMinify: false,
},
    define: {
        global: 'globalThis',
    },
    resolve: {
        alias: {
            buffer: 'buffer',
            process: 'process/browser',
        },
    },
    // server: {
    //     host: "127.0.0.1",
    //     port: 5174,      // <- not in 5141-5240
    //     strictPort: true,
    // },
});
