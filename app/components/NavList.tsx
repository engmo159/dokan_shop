import Link from 'next/link'
import React, { ReactNode } from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  &:hover {
    background-color: #cd5c5c;
    text-transform: uppercase;
    scale: 0.8;
    border-radius: 18%;
    transition: all 0.3s ease-in-out;
  }
`

// Define the props type
interface NavListProps {
  children: ReactNode
}

const NavList: React.FC<NavListProps> = ({ children }) => {
  return (
    <li className='nav-item'>
      <StyledLink className='nav-link active' aria-current='page' href='#'>
        {children}
      </StyledLink>
    </li>
  )
}

export default NavList
