// routes of web application
import App from '@/App';
import { PATHS } from '@/constants/paths';
import ProductDetails from '@/pages/Details';
import HomePage from '@/pages/Home';
import NotFoundPage from '@/pages/NotFound';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


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
    ]
  }
]
);

const RouterApp = () => <RouterProvider router={router} />;


export default RouterApp;