import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ThemeProvider from './components/ThemeProvider';
import { PATHS } from './constants/paths';
import ProductDetails from './pages/Details';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';

// seedLocalDatabase();

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: PATHS.PRODUCT_ID,
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
