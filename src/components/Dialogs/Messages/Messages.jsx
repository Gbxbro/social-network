import React from 'react'
import Message from './Message/Message'
import MessageForm from './MessageForm/MessageForm'
import classes from './Messages.module.scss'

const Messages = ({currentMessage, message, sendMessage, updateMessageText}) => {

    return (
        <div className={classes.messages}>
            <ul className={classes.messageList}>
                {
                    message.map((item, index) => <Message key={index} message={item.message}/>)
                }
            </ul>
            <MessageForm
                currentMessage={currentMessage}
                sendMessage={sendMessage}
                updateMessageText={updateMessageText}
            />
        </div>
    )
}

export default Messages