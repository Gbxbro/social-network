import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from "./components/Profile/Profile";
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="grid-wrapper">
          <Header />
          <Sidebar />
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default App
