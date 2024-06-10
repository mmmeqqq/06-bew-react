import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx';
import Owner from './components/Owner.jsx';

const router = createBrowserRouter ([
  {
    path:"/",
    element : <Home/>
  },
  {
    path:"/owner",
    element : <Owner/>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
