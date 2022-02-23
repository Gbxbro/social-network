import React from 'react'
import classes from './Profile.module.scss'

const Profile = () => {
  return (
    <section className={classes.profile}>
      <div className="profile__background">
        <img src="./img/profile-bg.jpg" alt="profile-bg"/>
      </div>
    </section>
  )
}

export default Profile;