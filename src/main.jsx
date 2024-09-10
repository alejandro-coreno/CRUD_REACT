import React from 'react'
import ReactDOM from 'react-dom/client'
import { UsersApp } from './UsersApp'
import './index.css'


// nuestro componente de aplicacion de entrada es nuestro loginPage

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UsersApp />
  </React.StrictMode>,
)
