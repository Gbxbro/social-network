import React from 'react'
import classes from './Dialogs.module.scss'

const Message = ({message}) => <li className={classes.dialogsItem}>{message}</li>

export default Message