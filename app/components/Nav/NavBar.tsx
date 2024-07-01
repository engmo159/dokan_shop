/* eslint-disable react/no-unescaped-entities */
'use client'

import NavList from './nav_components/NavList'
import DropDownList from './nav_components/DropDownList'
import styled from 'styled-components'
import { useState } from 'react'

const StyledLogo = styled.img`
  height: 45px;
`
const StyledNav = styled.nav`
  background-color: var(--nav-color) !important;
`

const NavBar: React.FC = () => {
  const [clicked, setClicked] = useState('')
  const handleClick = (link: string) => {
    setClicked(link)
  }
  return (
    <StyledNav
      className='navbar navbar-expand-lg  border-body sticky-top '
      data-bs-theme='dark'
      id='navbar'
    >
      <div className='container custom_container '>
        <StyledLogo src='/images/main-logo.svg' alt='logo' />
        <a className='navbar-brand w-1 fs-2 fw-bolder' href='/'>
          Dokan Shop
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0 '>
            <NavList
              isHome
              href='/'
              onClick={() => {
                return handleClick('home')
              }}
            >
              Home
            </NavList>
            <NavList
              href='/#products'
              onClick={() => {
                return handleClick('products')
              }}
            >
              Latest Products
            </NavList>
            <NavList
              href='/#deals'
              onClick={() => {
                return handleClick('deals')
              }}
            >
              Top Deals
            </NavList>
            <NavList
              href='/sign-in'
              onClick={() => {
                return handleClick('sign')
              }}
              className={clicked === 'sign' ? 'dnone' : ''}
            >
              Log In
            </NavList>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Pages
              </a>
              <ul className='dropdown-menu'>
                <DropDownList>About Us</DropDownList>
                <DropDownList>Men's</DropDownList>
                <DropDownList>Women's</DropDownList>
                <DropDownList>Kids's</DropDownList>
                <DropDownList>Accessories</DropDownList>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <DropDownList>Contact Us</DropDownList>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </StyledNav>
  )
}

export default NavBar
