import React from 'react'
import actionTypes from '../../../../redux/actions/actionTypes'
import classes from './MessageForm.module.scss'

const MessageForm = ({dialogId, currentMessage, dispatch}) => {
  const sendMessage = (e) => {
    e.preventDefault()
    dispatch({
      type: actionTypes.ADD_MESSAGE,
      id: dialogId
    })
  }

  const updateMessageText = (e) => {
    const text = e.target.value
    dispatch({
      type: actionTypes.UPDATE_CURRENT_MESSAGE,
      value: text
    })
  }

  return (
    <form className={classes.messageForm} method='POST'>
      <textarea
        className={classes.messageTextarea}
        placeholder='Enter your message'
        value={currentMessage}
        onChange={updateMessageText}
      />
      <button
        className={classes.submitButton}
        type='button'
        onClick={sendMessage}
      >
        Send
      </button>
    </form>
  )
}

export default MessageForm