import React from 'react'
import classes from './MessageForm.module.scss'

const MessageForm = ({currentMessage, sendMessage, updateMessageText}) => {

    const onSendMessage = (e) => {
        e.preventDefault()
        sendMessage()
    }

    const onUpdateMessageText = (e) => {
        const text = e.target.value
        updateMessageText(text)
    }

    return (
        <form className={classes.messageForm} method='POST'>
            <textarea
              className={classes.messageTextarea}
              placeholder='Enter your message'
              value={currentMessage}
              onChange={onUpdateMessageText}
            />
            <button
                className={classes.submitButton}
                type='button'
                onClick={onSendMessage}
            >
                Send
            </button>
        </form>
    )
}

export default MessageForm