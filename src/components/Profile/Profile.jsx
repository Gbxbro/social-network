import React from 'react'
import Person from './Person/Person'
import Posts from './Posts/Posts'
import AddPostForm from './AddPostForm/AddPostForm'
import classes from './Profile.module.scss'

const personData = {
  name: 'Dmitry G',
  birth: '11 may',
  city: 'Kazan',
  education: "KSPEU '21",
  webSite: 'https://vk.com/gbxbro'
}

const Profile = ({currentPostMessage, posts, dispatch}) => {
  return (
    <section className={classes.profile}>
      <div className={classes.background} />
      <div className={classes.inner}>
        <Person personData={personData} />
        <Posts posts={posts}/>
        <AddPostForm
          currentPostMessage={currentPostMessage}
          dispatch={dispatch}
        />
      </div>
    </section>
  )
}

export default Profile;