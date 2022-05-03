import React from 'react'
import {useParams} from 'react-router-dom'
import Messages from './Messages';
import actionTypes from '../../../redux/actions/actionTypes';

const MessagesContainer = ({store}) => {
    const state = store.getState()
    const params = useParams()
    const messages = state.dialogsPage.messages
    const message = messages.filter(dialog => dialog.id === +params.dialog_id)

    const sendMessage = (dialogId = params.dialog_id) => {
        store.dispatch({
            type: actionTypes.ADD_MESSAGE,
            id: +dialogId
        })
    }
    const updateMessageText = (text) => {
        store.dispatch({
            type: actionTypes.UPDATE_CURRENT_MESSAGE,
            value: text
        })
    }

    return <Messages
        currentMessage={state.dialogsPage.currentMessage}
        message={message}
        sendMessage={sendMessage}
        updateMessageText={updateMessageText}
    />
}

export default MessagesContainer