import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ThemeProvider from './components/ThemeProvider';
import { PATHS } from './constants/paths';
import ProductFavoritesPage from './pages/Favorite';
import HomePage from './pages/Home';
import NotFoundPage from './pages/NotFound';
import { store } from './store/store';

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
        path: PATHS.FAVORITES,
        element: <ProductFavoritesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
