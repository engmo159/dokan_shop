'use client'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const StyledFooter = styled.footer`
    background-color: var(--nav-color);
    color: white;
  `
  return (
    <StyledFooter>
      <div className='container custom_container text-center py-3'>
        <div className='row'>
          <div className='col-3'>logo</div>
          <div className='col-3'>Shopping & Categories</div>
          <div className='col-3'>Useful Links</div>
          <div className='col-3'>Help & Information</div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
