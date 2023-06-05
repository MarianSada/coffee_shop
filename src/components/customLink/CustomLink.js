import React from 'react'
import { useMatch, useResolvedPath } from 'react-router-dom'
import { StyledLink } from './CustomLink.styles'

function CustomLink ({ to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li >
      <StyledLink active={ isActive ? "active" : "" } to={to} {...props}>
        {children}
      </StyledLink>
    </li>
)
}

export default CustomLink

