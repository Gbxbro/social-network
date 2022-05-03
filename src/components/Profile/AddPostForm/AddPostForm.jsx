import React from 'react'
import classes from './AddPostForm.module.scss'

const AddPostForm = ({updateCurrentPostMessage, addPost, currentPostMessage}) => {

    const onUpdateCurrentPostMessage = e => {
        const value = e.target.value
        updateCurrentPostMessage(value)
    }

    const onAddPost = e => {
        e.preventDefault()
        addPost(1)
    }

    return (
        <form className={classes.addPostForm} action="#" method="POST">
            <textarea
              value={currentPostMessage}
              onChange={onUpdateCurrentPostMessage}
              className={classes.textarea}
              placeholder="Enter your post text"
            />
            <button
                className={classes.submitButton}
                type="submit"
                onClick={onAddPost}
            >
                Add
            </button>
        </form>
    )
}

export default AddPostForm