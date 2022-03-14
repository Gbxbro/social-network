import React from 'react'
import icons from '../../images/icons/sidebar/sidebar-sprite.svg'
import SidebarLink from './SidebarLink/SidebarLink'
import classes from './Sidebar.module.scss'

const Sidebar = () => {

  return (
    <section className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.item}>
            <SidebarLink
              to="profile"
              text="Profile"
              iconHref={`${icons}#home-icon`}
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="home"
              text="Home"
              iconHref={`${icons}#home-icon`}
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="dialogs"
              text="Messages"
              iconHref={`${icons}#messages-icon`}
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="news"
              text="News"
              iconHref={`${icons}#news-icon`}
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="music"
              text="Music"
              iconHref={`${icons}#music-icon`}
            />
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="settings"
              text="Settings"
              iconHref={`${icons}#settings-icon`}
            />
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar