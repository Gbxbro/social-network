import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import './App.scss'

const App = () => {
  return (
      // <div className="container">
        <div className="grid-wrapper">
          <Header />
          <Sidebar />
          <div className="app-wrapper">
            <Outlet />
          </div>
        </div>
      // </div>
  )
}

export default App
