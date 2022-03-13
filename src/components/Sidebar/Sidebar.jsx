import React from 'react'
import SidebarLink from './SidebarLink/SidebarLink'
import classes from './Sidebar.module.scss'

const Sidebar = () => {

  return (
    <section className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <SidebarLink
              to="/profile"
              text="Profile"
              iconHref="./img/icons/sidebar/sidebar-sprite.svg#home-icon"
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/home"
              text="Home"
              iconHref="./img/icons/sidebar/sidebar-sprite.svg#home-icon"
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/dialogs"
              text="Messages"
              iconHref="./img/icons/sidebar/sidebar-sprite.svg#messages-icon"
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/news"
              text="News"
              iconHref="./img/icons/sidebar/sidebar-sprite.svg#news-icon"
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/music"
              text="Music"
              iconHref="./img/icons/sidebar/sidebar-sprite.svg#music-icon"
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/settings"
              text="Settings"
              iconHref="./img/icons/sidebar/sidebar-sprite.svg#settings-icon"
            />
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar