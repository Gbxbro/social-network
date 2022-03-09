import React from 'react'
import CustomLink from '../../UI/CustomLink'
import classes from './SidebarLink.scss'

const SidebarLink = ({children, to, styles, text, ...props}) => {
  return (
    <CustomLink to={to} styles={classes} {...props}>
      <div className="linkBody">
        <div className="linkIcon">{children}</div>
        <div className="linkText">{text}</div>
      </div>
    </CustomLink>
  )
}

export default SidebarLink