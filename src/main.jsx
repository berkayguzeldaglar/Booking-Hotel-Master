import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Booking from './Booking.jsx'
import Home from './Home.jsx'
import Authentication from './Authentication.jsx'


import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://rdbnzgrjzkvvpheycuwi.supabase.co/', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkYm56Z3Jqemt2dnBoZXljdXdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxODQ3MDYsImV4cCI6MjAyODc2MDcwNn0.3gTl9qfiSaK9-4w_AObE-SyucbFwqv5JqN8b8LNt5bc')


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/booking',
        element: <Booking />
      },
      {
        path: '/authentication',
        element: <Authentication />
      }
    ]
  }
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)


