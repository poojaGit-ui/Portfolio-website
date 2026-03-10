import React from 'react'
import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Layouts } from './components/Layout/Layouts'
import { Home } from './components/Pages/Home'
import { Skill } from './components/Pages/Skill'
import { Projects } from './components/Pages/Projects'
import { Resources } from './components/Pages/Resources'
import { Contact } from './components/Pages/Contact'
import HomePage from './components/Pages/HomePage'

const App = () => {

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          index: true,
          element: <HomePage/>,
        },
        {
          path: "skills",
          element:<Skill/>,
        },
        {
          path: "projects",
          element: <Projects/>,
        },
      
      {
        path: "contact",
        element:<Contact/>,
        
      }
    ]
    }
  ])


  




  return <RouterProvider router={router}/>

  
}

export default App