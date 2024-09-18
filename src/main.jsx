import React from 'react'
import ReactDOM from 'react-dom/client'
import { UsersApp } from './UsersApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'


// nuestro componente de aplicacion de entrada es nuestro loginPage
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UsersApp />
    </BrowserRouter>
  </React.StrictMode>,
)
