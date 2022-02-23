import React from 'react'
import classes from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={classes.logo}>
      <img src="./img/logo.png" alt="logo"/>
    </div>
  )
}

export default Logo