import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import Profile from './components/Profile/Profile'
import Home from './components/Home/Home'
import Dialogs from './components/Dialogs/Dialogs'
import Messages from './components/Dialogs/Messages/Messages'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import Layout from './components/Layout/Layout'
import './App.scss'

const App = ({store}) => {
  const state = store.getState()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="profile" element=
          {
            <Profile
              currentPostMessage={state.profilePage.currentPostMessage}
              posts={state.profilePage.posts}
              dispatch={store.dispatch.bind(store)}
            />
          }
        />
        <Route path="home" element={<Home />} />
        <Route path="dialogs/*" element={<Dialogs users={state.dialogsPage.users} />}>
          <Route path=":dialogId" element=
            {
              <Messages
                messages={state.dialogsPage.messages}
                currentMessage={state.dialogsPage.currentMessage}
                dispatch={store.dispatch.bind(store)}
              />
            }
          />
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
  )
}

export default App
