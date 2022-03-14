import React from 'react'
import {Outlet} from 'react-router-dom'
import DialogsLink from './DialogsLink/DialogsLink'
import classes from './Dialogs.module.scss'

const Dialogs = () => {

  return (
    <div className={classes.dialogs}>
      <ul className={classes.usersList}>
        <li className={classes.usersItem}>
          <DialogsLink to="1">
            Dmitry
          </DialogsLink>
        </li>
        <li className={classes.usersItem}>
          <DialogsLink to="2">
            Alexandra
          </DialogsLink>
        </li>
        <li className={classes.usersItem}>
          <DialogsLink to="3">
            Alice
          </DialogsLink>
        </li>
        <li className={classes.usersItem}>
          <DialogsLink to="4">
            Stan
          </DialogsLink>
        </li>
      </ul>
      <ul className={classes.dialogsList}>
        <Outlet />
      </ul>
    </div>
  )
}

export default Dialogs