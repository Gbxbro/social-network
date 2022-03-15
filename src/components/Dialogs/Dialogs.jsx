import React from 'react'
import {Outlet} from 'react-router-dom'
import DialogsLink from './DialogsLink/DialogsLink'
import {getUsers} from '../../index'
import classes from './Dialogs.module.scss'

const Dialogs = () => {

  const users = getUsers()

  return (
    <div className={classes.dialogs}>
      <ul className={classes.usersList}>
        {users.map(user => {
          return (
            <li className={classes.usersItem} key={user.id}>
              <DialogsLink to={user.id.toString()}>
                {user.name}
              </DialogsLink>
            </li>
          )
        })}
      </ul>
      <ul className={classes.dialogsList}>
        <Outlet />
      </ul>
    </div>
  )
}

export default Dialogs