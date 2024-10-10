// Suggested code may be subject to a license. Learn more: ~LicenseLog:2322448178.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3362649638.
import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      'process.env.GOOGLE_API_KEY': JSON.stringify(env.GOOGLE_API_KEY),
    },
  }
})
import {defineConfig, loadEnv} from 'vite'

export default defineConfig(({command, mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      'process.env.GOOGLE_API_KEY': JSON.stringify(env.GOOGLE_API_KEY),
    },
  }
})
