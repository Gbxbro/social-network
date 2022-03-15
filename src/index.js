import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

import App from './App'
import Profile from './components/Profile/Profile'
import Home from './components/Home/Home'
import Dialogs from './components/Dialogs/Dialogs'
import Message from './components/Dialogs/Message'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import 'normalize.css'

const users = [
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
]

const dialogs = [
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
]

export function getUsers() {
  return users
}

export function getDialogs() {
  return dialogs
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="home" replace/>}/>
        <Route path="profile" element={<Profile />} />
        <Route path="home" element={<Home />} />
        <Route path="dialogs/*" element={<Dialogs />}>
          <Route path=":dialogId" element={<Message />} />
        </Route>
        <Route path="news" element={<News />} />
        <Route path="music" element={<Music />} />
        <Route path="settings" element={<Settings />} />
        <Route
          path="*"
          element={
            <h1>Oops, this page doesn't exist.</h1>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
