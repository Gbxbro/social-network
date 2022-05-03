import React from 'react'
import Person from './Person/Person'
import Posts from './Posts/Posts'
import AddPostForm from './AddPostForm/AddPostForm'
import classes from './Profile.module.scss'

const Profile = ({personData, posts, currentPostMessage, updateCurrentPostMessage, addPost}) => {
    return (
        <section className={classes.profile}>
            <div className={classes.background}/>
            <div className={classes.inner}>
                <Person personData={personData}/>
                <Posts posts={posts}/>
                <AddPostForm
                    updateCurrentPostMessage={updateCurrentPostMessage}
                    addPost={addPost}
                    currentPostMessage={currentPostMessage}
                />
            </div>
        </section>
    )
}

export default Profile;