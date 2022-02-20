import React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <section className="sidebar">
      <nav className="sidebar__nav nav">
        <ul className="nav__list">
          <li className="nav__item">Profile</li>
          <li className="nav__item">Messages</li>
          <li className="nav__item">News</li>
          <li className="nav__item">Music</li>
          <li className="nav__item">Settings</li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar