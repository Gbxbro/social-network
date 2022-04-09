import React from 'react'
import classes from '../Messages.module.scss'

const Message = ({message}) => {
  return (
    <li className={classes.message}>
      {message}
    </li>
  )
}

export default Message