import dialogsPage from './reducers/dialogsPage'
import profilePage from './reducers/profilePage'

const oldStore = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
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
  },
  _callSubscriber() {
  },

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.profilePage = profilePage(this._state.profilePage, action)
    this._state.dialogsPage = dialogsPage(this._state.dialogsPage, action)
    this._callSubscriber()
  },
}

export default oldStore