import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import React from 'react'

function CustomLink({children, to, styles, ...props}) {
  let resolved = useResolvedPath(to)
  let match = useMatch({path: resolved.pathname, end: true})

  return (
    <Link
      className={match ? styles.active : ''}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

export default CustomLink