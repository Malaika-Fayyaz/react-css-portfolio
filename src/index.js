import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);