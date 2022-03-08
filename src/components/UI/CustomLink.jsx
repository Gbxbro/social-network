import {Link, useMatch, useResolvedPath} from 'react-router-dom'
import React from 'react'

function CustomLink({ children, to, styles, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={match ? styles : ''}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  )
}

export default CustomLink