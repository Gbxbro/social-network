const store = {
  _state: {
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
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    switch(action.type) {
      case 'ADD-MESSAGE':
        this._state.dialogsPage.messages.push({
          id: action.id,
          message: this._state.dialogsPage.currentMessage
        })
        this._state.dialogsPage.currentMessage = ''
        this._callSubscriber()
        break
      case 'UPDATE-CURRENT-MESSAGE':
        this._state.dialogsPage.currentMessage = action.value
        this._callSubscriber()
        break
    }
  },
}

export default store