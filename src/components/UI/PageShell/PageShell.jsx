import React from 'react'
import classes from './PageShell.module.scss'

const PageShell = ({children, title}) => {
  return (
    <div className={classes.page}>
      <h3 className={classes.pageTitle}>
        {title}
      </h3>
      {children}
    </div>
  )
}

export default PageShell