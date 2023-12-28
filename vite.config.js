import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.API_NINJA_KEY': JSON.stringify(env.API_NINJA_KEY),
      'process.env.API_NINJA_URL': JSON.stringify(env.API_NINJA_URL),
    },
  };
});