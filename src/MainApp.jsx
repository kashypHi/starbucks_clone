import React, { children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Navbar';
import App from './App';
import Gift from './Gift';
import Order from './Order';
import Pay from './Pay';
import Store from './Store';
import LoginSignUp from './LoginSignUp';


const MainApp = () => {
    let router = createBrowserRouter( 
        [{
            path: "/",
            element: <Navbar></Navbar>,
            children: [
                {
                    path: "/",
                    element: <App></App>
                },
                {
                path: "gift",
                element: <Gift/>
                },
                {
                    path:"order",
                    element: <Order />
                },
                {
                    path: "pay",
                    element:<Pay/>
                },
                {
                    path: "store",
                    element:<Store/>
                },
                {
                    path: "login",
                    element:<LoginSignUp/>
                }
               ]
        }
    
    ]
    )
    
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default MainApp
