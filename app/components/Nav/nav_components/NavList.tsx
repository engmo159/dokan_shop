'use client'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

interface NavListProps {
  children: ReactNode
  isHome?: boolean
  href: string
}

const StyledLink = styled(Link)<{ $isHome?: boolean }>`
  transition: color 0.3s ease-in-out;
  ${props =>
    props.$isHome &&
    css`
      color: var(--sec-color) !important;
      &:hover {
        color: var(--font-color) !important;
      }
    `}
  &:hover {
    background-color: var(--sec-color);
    text-transform: uppercase;
    scale: 0.8;
    border-radius: 18%;
    transition: all 0.3s ease-in-out;
  }
`

const NavList: React.FC<NavListProps> = ({ children, isHome, href }) => {
  return (
    <li className='nav-item'>
      <StyledLink
        className='nav-link active fw-bold '
        aria-current='page'
        href={href}
        $isHome={isHome}
      >
        {children}
      </StyledLink>
    </li>
  )
}

export default NavList
