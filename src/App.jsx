import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductPage from './pages/Product';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1> Home </h1>,
  },
  {
    path: '/:company/:product/:token',
    element: <ProductPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
