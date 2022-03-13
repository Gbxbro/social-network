import React from 'react'
import CustomLink from '../../UI/CustomLink'
import classes from './DialogsLink.module.scss'

const DialogsLink = ({children, to, ...props}) => {
  return (
    <CustomLink
      to={to}
      styles={classes}
      {...props}
    >
      <div className={classes.linkBody}>
        {children}
      </div>
    </CustomLink>
  )
}

export default DialogsLink