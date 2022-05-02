import actionTypes from '../actions/actionTypes'

const initialState = {
  currentPostMessage: '',
  posts: [
    {
      id: 1,
      message: 'My first post'
    },
    {
      id: 2,
      message: 'My second post'
    }
  ]
}

const profilePage = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      state.posts.push({
        id: action.id,
        message: state.currentPostMessage
      })
      state.currentPostMessage = ''
      return state
    case actionTypes.UPDATE_CURRENT_POST_MESSAGE:
      state.currentPostMessage = action.value
      return state
    default:
      return state
  }
}

export default profilePage