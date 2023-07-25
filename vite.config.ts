import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    origin: 'https://trysetyoutomo.github.io/',
  }
  // plugins: [react()],
  // server : {
  //   hmr : {
  //     overlay : false
  //   }
  // }
})
