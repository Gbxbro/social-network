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
              styles={classes}
              text="Profile"
            >
              <svg
                height="100"
                width="100"
              >
                <use xlinkHref="./img/icons/sidebar/sidebar-sprite.svg#home-icon"></use>
              </svg>
            </SidebarLink>
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/home"
              styles={classes}
              text="Home"
            >
              <svg
                height="100"
                width="100"
              >
                <use xlinkHref="./img/icons/sidebar/sidebar-sprite.svg#home-icon"></use>
              </svg>
            </SidebarLink>
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/dialogs"
              styles={classes}
              text="Messages"
            >
              <svg
                height="100"
                width="100"
              >
                <use xlinkHref="./img/icons/sidebar/sidebar-sprite.svg#messages-icon"></use>
              </svg>
            </SidebarLink>
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/news"
              styles={classes}
              text="News"
            >
              <svg
                height="100"
                width="100"
              >
                <use xlinkHref="./img/icons/sidebar/sidebar-sprite.svg#news-icon"></use>
              </svg>
            </SidebarLink>
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/music"
              styles={classes}
              text="Music"
            >
              <svg
                height="100"
                width="100"
              >
                <use xlinkHref="./img/icons/sidebar/sidebar-sprite.svg#music-icon"></use>
              </svg>
            </SidebarLink>
          </li>
          <li className={classes.item}>
            <SidebarLink
              to="/settings"
              styles={classes}
              text="Settings"
            >
              <svg
                height="100"
                width="100"
              >
                <use xlinkHref="./img/icons/sidebar/sidebar-sprite.svg#settings-icon"></use>
              </svg>
            </SidebarLink>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Sidebar