import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './main.css';//This is for the styles
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// import { BrowserRouter } from "react-router-dom";

//We can also import React and ReactDOM from the modules above without the curly braises
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then((registration) => {
    console.log('Service Worker registered:', registration);
  }).catch((error) => {
    console.error('Service Worker registration failed:', error);
  });
}


const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#000")(props),
      color: mode("gray.800", "whiteAlpha.900")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/users',
    element: <h1>Page 2</h1>,//This is like a root component for the users page
  },
])

// 3. extend the theme
const theme = extendTheme({ config, styles });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      {/* THis is for Creating Routes and Pages */}
      <RouterProvider router={router} />
      {/* <App/> */}
    </ChakraProvider>
  </StrictMode>,
)
console.log('Hello world')
