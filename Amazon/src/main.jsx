import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
//We can also import React and ReactDOM from the modules above without the curly braises
import {Checkout} from './pages/Checkout.jsx'
import { Tracking } from './pages/Tracking.jsx';
import {Orders} from './pages/Orders.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path:'/checkout',
    element: <Checkout/>,//This is like a root component for the users page
  },
  {
    path:'/orders',
    element: <Orders/>,//This is like a root component for the users page
  },
  {
    path:'/tracking',
    element: <Tracking/>,//This is like a root component for the users page
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* This is for Creating Routes and Pages */}
    <RouterProvider router={router}/>
    {/* <App/> */}
  </StrictMode>,
)
