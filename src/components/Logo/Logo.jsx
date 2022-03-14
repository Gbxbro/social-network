import React from 'react'
import logo from '../../images/logo.png'
import classes from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="logo"/>
    </div>
  )
}

export default Logo