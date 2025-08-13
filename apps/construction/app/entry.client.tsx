// /**
//  * By default, React Router will handle hydrating your app on the client for you.
//  * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx react-router reveal` ✨
//  * For more information, see https://reactrouter.com/explanation/special-files#entryclienttsx
//  */


import { createRoot } from 'react-dom/client';
import App from './app';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

