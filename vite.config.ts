import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/lora/' porque el sitio se publica en alystechpy.online/lora
// (Traefik enruta por path, no por subdominio — ver docker-compose.yml)
export default defineConfig({
  base: '/lora/',
  plugins: [react()],
})
