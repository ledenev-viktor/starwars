import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Home, Detail, NotFound } from '~pages';
import { Global } from '@emotion/react';
import { globalStyles } from '~styles/global-styles';
import { Layout } from './components/ui/index';
import { Background } from './components/ui/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'people/:id',
    element: <Detail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const backgrounds = ['bg1.webp', 'bg2.webp', 'bg3.webp'];

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Background backgrounds={backgrounds}>
        <Layout>
          <Global styles={globalStyles} />
          <RouterProvider router={router} />
        </Layout>
      </Background>
    </QueryClientProvider>
  );
}

export default App;
