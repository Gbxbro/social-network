import actionTypes from '../actions/actionTypes'

const initialState = {
  users: [
    {
      id: 1,
      name: 'Dmitry'
    },
    {
      id: 2,
      name: 'Alexandra'
    },
    {
      id: 3,
      name: 'Alice'
    },
    {
      id: 4,
      name: 'Stan'
    }
  ],
  messages: [
    {
      id: 1,
      message: 'Hello, what\'s up?'
    },
    {
      id: 2,
      message: 'Where are you?'
    },
    {
      id: 3,
      message: 'Nice try!'
    },
    {
      id: 4,
      message: 'Good job.'
    }
  ],
  currentMessage: '',
}

const dialogsPage = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      state.messages.push({
        id: action.id,
        message: state.currentMessage
      })
      state.currentMessage = ''
      return state
    case actionTypes.UPDATE_CURRENT_MESSAGE:
      state.currentMessage = action.value
      return state
    default:
      return state
  }
}

export default dialogsPage