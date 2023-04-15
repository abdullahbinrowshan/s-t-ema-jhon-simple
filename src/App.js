import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/layout/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartLoader } from './components/loaders/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: productsAndCartLoader,
          element: <Shop />
        },
        {
          path: '/shop',
          loader: productsAndCartLoader,
          element: <Shop />
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders />
        },
        {
          path: '/inventory',
          element: <Inventory />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
