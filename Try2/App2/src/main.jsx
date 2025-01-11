import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css';//This si for thw styles
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
//We can also import React and ReactDOM from the modules above without the curly braises
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('Service Worker registered:', registration);
  }).catch((error) => {
    console.error('Service Worker registration failed:', error);
  });
}


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
  },
  {
    path:'/users',
    element: <h1>Page 2</h1>,//This is like a root component for the users page
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* THis is for Creating Routes and Pages */}
    <RouterProvider router={router}/>
    {/* <App/> */}
  </StrictMode>,
)
console.log('Hello world')
