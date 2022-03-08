import React from 'react'
import CustomLink from '../UI/CustomLink'
import classes from './Sidebar.module.scss'

const Sidebar = () => {

  return (
    <section className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <CustomLink to="/profile" styles={classes.active}>
              Profile
            </CustomLink>
          </li>
          <li className={classes.item}>
            <CustomLink to="/dialogs" styles={classes.active}>
              Messages
            </CustomLink>
          </li>
          <li className={classes.item}>
            <CustomLink to="/news" styles={classes.active}>
              News
            </CustomLink>
          </li>
          <li className={classes.item}>
            <CustomLink to="/music" styles={classes.active}>
              Music
            </CustomLink>
          </li>
          <li className={classes.item}>
            <CustomLink to="/settings" styles={classes.active}>
              Settings
            </CustomLink>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar