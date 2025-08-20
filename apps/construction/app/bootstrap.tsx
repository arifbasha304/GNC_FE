// created this file for Lazy-load the bootstrap file to import in entry.client.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import { PrimeReactProvider } from 'primereact/api';
import { PrimeProvider } from '@libs/ui';
import { router } from './routes';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeProvider>
      <RouterProvider router={router} />
    </PrimeProvider>
  </React.StrictMode>
);