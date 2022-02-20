import React from 'react'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Content from "./components/Content/Content";
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="grid-wrapper">
          <Header />
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
