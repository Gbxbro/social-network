import React from 'react'
import CustomLink from '../../UI/CustomLink/CustomLink'
import classes from './SidebarLink.module.scss'

const SidebarLink = ({to, iconHref, text, ...props}) => {
  return (
    <CustomLink to={to} styles={classes} {...props}>
      <div className={classes.linkBody}>
        <div className={classes.linkIcon}>
          <svg>
            <use xlinkHref={iconHref}></use>
          </svg>
        </div>
        <div className={classes.linkText}>
          {text}
        </div>
      </div>
    </CustomLink>
  )
}

export default SidebarLink