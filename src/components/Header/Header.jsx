import React from 'react'
import Logo from "../Logo/Logo"
import classes from './Header.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <Logo />
    </header>
  )
}

export default Header