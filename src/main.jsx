import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Toaster } from 'react-hot-toast'
import { Router } from 'react-router-dom'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Home from './Home.jsx'



const routes=createBrowserRouter(
  [
    {
      path:"/",
      element:<App />
  },
  {
    path:"/home",
    element:<Home />
  }
  ]
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
