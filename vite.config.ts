import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const commonConfig = {
    define: {
      __BASE_URL__: JSON.stringify('https://swapi.dev/api/people/'),
      __HOME_URL__: mode === 'production' ? JSON.stringify('/starwars/') : JSON.stringify('/'),
      __BACKGROUNDS_IMG__:
        mode === 'production'
          ? [
              'https://raw.githubusercontent.com/ledenev-viktor/starwars/main/public/bg1.webp',
              'https://raw.githubusercontent.com/ledenev-viktor/starwars/main/public/bg2.webp',
              'https://raw.githubusercontent.com/ledenev-viktor/starwars/main/public/bg3.webp',
            ]
          : ['/bg1.webp', '/bg2.webp', '/bg3.webp'],
    },
    resolve: {
      alias: {
        '~hooks': path.resolve(__dirname, 'src/hooks'),
        '~ui': path.resolve(__dirname, 'src/components/ui'),
        '~widgets': path.resolve(__dirname, 'src/components/widgets'),
        '~components': path.resolve(__dirname, 'src/components/'),
        '~styles': path.resolve(__dirname, 'src/styles/'),
        '~pages': path.resolve(__dirname, 'src/pages/'),
      },
    },
  };

  if (mode === 'development') {
    return {
      ...commonConfig,
      plugins: [react()],
      base: '/',
    };
  } else if (mode === 'production') {
    return {
      ...commonConfig,
      plugins: [react()],
      base: '/starwars/',
    };
  } else {
    throw new Error(`unexpected mode ${mode}`);
  }
});
