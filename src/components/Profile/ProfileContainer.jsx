import React from 'react'
import Profile from './Profile';
import actionTypes from '../../redux/actions/actionTypes';

const personData = {
    name: 'Dmitry G',
    birth: '11 may',
    city: 'Kazan',
    education: "KSPEU '21",
    webSite: 'https://vk.com/gbxbro'
}

const ProfileContainer = ({store}) => {

    const state = store.getState()

    const updateCurrentPostMessage = (value) => {
        store.dispatch({
            type: actionTypes.UPDATE_CURRENT_POST_MESSAGE,
            value
        })
    }
    const addPost = (id) => {
        store.dispatch({
            type: actionTypes.ADD_POST,
            id
        })
    }

    return <Profile
        personData={personData}
        posts={state.profilePage.posts}
        currentPostMessage={state.profilePage.currentPostMessage}
        updateCurrentPostMessage={updateCurrentPostMessage}
        addPost={addPost}
    />
}

export default ProfileContainer;