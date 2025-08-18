// created this file for Lazy-load the bootstrap file to import in entry.client.tsx

import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}