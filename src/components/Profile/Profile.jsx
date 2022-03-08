import React from 'react'
import Person from './Person/Person'
import classes from './Profile.module.scss'

const personData = {
  name: 'Dmitry G',
  birth: '11 may',
  city: 'Kazan',
  education: "KSPEU '21",
  webSite: 'https://vk.com/gbxbro'
}

const Profile = () => {
  return (
    <section className={classes.profile}>
      <div className={classes.background}>
      </div>
      <Person personData={personData}/>
    </section>
  )
}

export default Profile;