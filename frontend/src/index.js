import React from 'react';
import ReactDOM from 'react-dom/client';

// importing react router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

// styling
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

// App component and other components
import App from './App';
import reportWebVitals from './reportWebVitals';

// importing screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// Declearing route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
    </Route>
  )
)

// root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
