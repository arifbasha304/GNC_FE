// created this file for Lazy-load the bootstrap file to import in entry.client.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { router } from './routes';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ ripple: true }}>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  </React.StrictMode>
);