import React from 'react'
import {useParams} from 'react-router-dom'
import Message from './Message/Message'
import MessageForm from './MessageForm/MessageForm'
import classes from './Messages.module.scss'

const Messages = ({messages, currentMessage, dispatch}) => {

  let params = useParams()
  const message = messages.filter(dialog => dialog.id === Number(params.dialogId))

  return (
    <div className={classes.messages}>
      <ul className={classes.messageList}>
        {
          message.map((item, index) => <Message key={index} message={item.message} />)
        }
      </ul>
      <MessageForm
        dialogId={Number(params.dialogId)}
        currentMessage={currentMessage}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Messages