import React from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import DialogsLink from './DialogsLink/DialogsLink'
import classes from './Dialogs.module.scss'

const Dialogs = () => {

  return (
    <div className={classes.dialogs}>
      <ul className={classes.usersList}>
        <li className={classes.usersItem}>
          <DialogsLink to="/dialogs/1">Dmitry</DialogsLink>
        </li>
        <li className={classes.usersItem}>
          <DialogsLink to="/dialogs/2">Alexandra</DialogsLink>
        </li>
        <li className={classes.usersItem}>
          <DialogsLink to="/dialogs/3">Alice</DialogsLink>
        </li>
        <li className={classes.usersItem}>
          <DialogsLink to="/dialogs/4">Stan</DialogsLink>
        </li>
      </ul>
      <ul className={classes.dialogsList}>
        <Outlet />
        {/*<Routes>*/}
          {/*<Route path="dialogs" element={<Dialogs />}>*/}
          {/*  <Route path="1" element={<Message message="Hello, what's up?"/>} />*/}
          {/*  <Route path="2" element={<Message message="Where are you?"/>} />*/}
          {/*  <Route path="3" element={<Message message="Nice try!"/>} />*/}
          {/*  <Route path="4" element={<Message message="Good job."/>} />*/}
          {/*</Route>*/}

          {/*<li className={classes.dialogsItem}>*/}
          {/*  */}
          {/*</li>*/}
          {/*<li className={classes.dialogsItem}>*/}
          {/*  Where are you?*/}
          {/*</li>*/}
          {/*<li className={classes.dialogsItem}>*/}
          {/*  Nice try!*/}
          {/*</li>*/}
          {/*<li className={classes.dialogsItem}>*/}
          {/*  Good job.*/}
          {/*</li>*/}
        {/*</Routes>*/}
      </ul>
    </div>
  )
}

export default Dialogs