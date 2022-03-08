import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Dialogs.module.scss'

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <ul className={classes.usersList}>
        <li className={classes.usersItem}>
          <NavLink to='/dialogs/1'>Dmitry</NavLink>
        </li>
        <li className={classes.usersItem}>
          <NavLink to='/dialogs/2'>Alexandra</NavLink>
        </li>
        <li className={classes.usersItem}>
          <NavLink to='/dialogs/3'>Alice</NavLink>
        </li>
        <li className={classes.usersItem}>
          <NavLink to='/dialogs/4'>Stan</NavLink>
        </li>
      </ul>
      <ul className={classes.dialogsList}>
        <li className={classes.dialogsItem}>
          Hello, what's up?
        </li>
        <li className={classes.dialogsItem}>
          Where are you?
        </li>
        <li className={classes.dialogsItem}>
          Nice try!
        </li>
        <li className={classes.dialogsItem}>
          Good job.
        </li>
      </ul>
    </div>
  )
}

export default Dialogs