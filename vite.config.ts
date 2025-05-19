import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Add this base configuration for GitHub Pages
  base: "/admin-dashboard",
   //mode === 'production' ? '/student-success-portal-admin/' : '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  
  // Add build configuration
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: mode === 'development',
  },
  
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Add this for SPA routing to work on GitHub Pages
  preview: {
    port: 8080,
  }
}));