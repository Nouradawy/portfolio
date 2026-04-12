import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";



// https://vite.dev/config/
export default defineConfig({
    // For GitHub Pages deployments set VITE_BASE=/portfolio/ (or / if using a custom domain)
    // base: process.env.VITE_BASE || '/',
    plugins: [react(),
    tailwindcss(),
    ],
    build: {
        // Keep the warning, but allow a bit more headroom for a portfolio site.
        chunkSizeWarningLimit: 700,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes('node_modules')) return;

                    // Core
                    if (id.includes('react-router')) return 'vendor-router';

                    // 3D / runtime heavy
                    if (id.includes('@splinetool')) return 'vendor-spline';

                    // Payments
                    if (id.includes('@stripe')) return 'vendor-stripe';
                    if (id.includes('@paypal')) return 'vendor-paypal';

                    // Backend / data
                    if (id.includes('@supabase')) return 'vendor-supabase';

                    // UI libs
                    if (id.includes('react-image-gallery')) return 'vendor-gallery';
                    if (id.includes('react-icons')) return 'vendor-icons';
                    if (id.includes('react-hot-toast')) return 'vendor-toast';

                    // Analytics
                    if (id.includes('react-ga4')) return 'vendor-analytics';

                    // Anything else
                    return 'vendor';
                },
            },
        },
    },
// build:{
//     cssMinify: false,
// },
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
