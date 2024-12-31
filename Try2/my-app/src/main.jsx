import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css';//This si for thw styles
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage.jsx';
import { BlogPost } from './pages/BlogPost.jsx';
//We can also import React and ReactDOM from the modules above without the curly braises


const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [//We can also add children routes to a root route
      //When you create a child route it will be added to the root component(route) after rendering Outlet(react-router-dom function)
      {
        path:'posts',
        element: <BlogPost/>,
      }
    ]
  },
  {
    path:'/users',
    element: <UsersPage/>,//This is like a root component for the users page
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
