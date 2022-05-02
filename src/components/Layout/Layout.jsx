import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import {Outlet} from 'react-router-dom'
import classes from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={classes.gridWrapper}>
      <Header />
      <Sidebar />
      <div className={classes.appWrapper}>
          <Outlet />
      </div>
    </div>
  )
}

export default Layout