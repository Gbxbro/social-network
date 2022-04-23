import React from 'react'
import classes from './AddPostForm.module.scss'

const AddPostForm = ({currentPostMessage, dispatch}) => {

  const updateCurrentPostMessage = e => {
    dispatch({
      type: 'UPDATE-CURRENT-POST-MESSAGE',
      value: e.target.value
    })
  }

  const addPost = e => {
    e.preventDefault()
    dispatch({
      type: 'ADD-POST',
      id: 1
    })
  }

  return (
    <form className={classes.addPostForm} action="#" method="POST">
      <textarea
        value={currentPostMessage}
        onChange={updateCurrentPostMessage}
        className={classes.textarea}
        placeholder="Enter your post text"
      />
      <button
        className={classes.submitButton}
        type="submit"
        onClick={addPost}
      >
        Add
      </button>
    </form>
  )
}

export default AddPostForm