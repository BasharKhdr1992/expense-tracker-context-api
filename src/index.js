import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/GlobalState';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
