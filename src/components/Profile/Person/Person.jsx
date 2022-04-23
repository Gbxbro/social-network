import React from 'react'
import classes from './Person.module.scss'

const Person = ({personData}) => {
  return (
    <div className={classes.person}>
      <div className={classes.avatar}></div>
      <div className={classes.info}>
        <h6 className={classes.title}>
          {personData.name}
        </h6>
        <div className={classes.subtitle}>
          Date of Birth:
          <span>
              {' ' + personData.birth}
            </span>
        </div>
        <div className={classes.subtitle}>
          City:
          <span>
              {' ' + personData.city}
            </span>
        </div>
        <div className={classes.subtitle}>
          Education:
          <span>
              {' ' + personData.education}
            </span>
        </div>
        <div className={classes.subtitle}>
          Web Site:
          <a className={classes.link} href={personData.webSite}>
            {' ' + personData.webSite}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Person