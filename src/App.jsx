import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RouterWay from './utils/RouterWay'

function App() {
  const router=createBrowserRouter(RouterWay)
  return <>
    <RouterProvider router={router} />
    
    </>
 
}

export default App