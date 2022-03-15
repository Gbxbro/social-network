import React from 'react'
import {useParams} from 'react-router-dom'
import {getDialogs} from '../../index'
import classes from './Dialogs.module.scss'

const Message = () => {

  let params = useParams()
  const dialogs = getDialogs()
  const message = dialogs.filter(dialog => dialog.id.toString() === params.dialogId)

  // console.log(message)
  // console.log(dialogs)

  return message.map(item => (
      <li className={classes.dialogsItem} key={item.id}>{item.message}</li>
    )
  )

}

export default Message