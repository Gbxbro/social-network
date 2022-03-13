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

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Navigate to="home" replace/>}/>
        <Route path="profile" element={<Profile />} />
        <Route path="home" element={<Home />} />
        <Route path="dialogs" element={<Dialogs />}>
          <Route path="1" element={<Message message="Hello, what's up?"/>} />
          <Route path="2" element={<Message message="Where are you?"/>} />
          <Route path="3" element={<Message message="Nice try!"/>} />
          <Route path="4" element={<Message message="Good job."/>} />
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
