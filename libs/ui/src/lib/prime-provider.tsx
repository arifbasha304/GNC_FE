import React, { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';

// import styles ONCE here
// import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export const PrimeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <PrimeReactProvider value={{ ripple: true }}>
      {children}
    </PrimeReactProvider>
  );
};
