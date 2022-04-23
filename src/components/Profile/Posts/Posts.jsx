import React from 'react'
import classes from './Posts.module.scss'

const Posts = ({posts}) => {
  return (
    <div className={classes.posts}>
      <ul className={classes.postsList}>
        {
          posts.map((post, index) => (
            <li className={classes.postsItem} key={index}>
              {post.message}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Posts