import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Root/Home.jsx';
import Login from './Components/Root/Login.jsx';
import Registration from './Components/Root/REgistration.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Order from './Components/Root/Order.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
import Profile from './Components/Root/Profile.jsx';
import History from './Components/Root/History.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/registration',
        element:<Registration></Registration>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/history',
        element:<PrivateRoute><History></History></PrivateRoute>
      }
    
    ]

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
