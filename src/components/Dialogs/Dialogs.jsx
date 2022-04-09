import React from 'react'
import {Outlet} from 'react-router-dom'
import DialogsLink from './DialogsLink/DialogsLink'
import PageShell from '../UI/PageShell/PageShell'
import classes from './Dialogs.module.scss'

const Dialogs = ({users}) => {

  return (
    <PageShell title='Dialogs'>
      <div className={classes.dialogs}>
        <ul className={classes.usersList}>
          {
            users.map(user => (
              <li className={classes.usersItem} key={user.id}>
                <DialogsLink to={user.id.toString()}>
                  {user.name}
                </DialogsLink>
              </li>
            ))
          }
        </ul>
        <Outlet />
      </div>
    </PageShell>
  )
}

export default Dialogs