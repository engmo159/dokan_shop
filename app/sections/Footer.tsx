/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import styled, { css } from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaUserSecret,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
  const StyledFooter = styled.footer`
    background-color: var(--nav-color);
    color: white;
  `
  const StyledH3 = styled.h3`
    /* font-size: 21px; */
  `

  const StyledLink = styled(Link)<{
    $blue?: boolean
    $lightBlue?: boolean
    $green?: boolean
    $red?: boolean
  }>`
    color: white;
    transition: all 0.2s linear;
    &:hover {
      color: var(--sec-color);
    }
    ${props =>
      props.$lightBlue &&
      css`
        &:hover {
          color: #1da1f2;
        }
      `}
    ${props =>
      props.$blue &&
      css`
        &:hover {
          color: blue;
        }
      `}
    ${props =>
      props.$green &&
      css`
        &:hover {
          color: green;
        }
      `}
    ${props =>
      props.$red &&
      css`
        &:hover {
          color: red;
        }
      `}
  `
  const Icon = styled(FaUserSecret)`
    font-size: 7rem;
    width: 100%;
  `
  const Hr = styled.div`
    height: 1px;
    background-color: white;
  `
  const StyledP = styled.p``
  const linkList = [
    {
      cols: [
        { title: "Men's shopping", href: '' },
        { title: "Women's shopping", href: '' },
        { title: "Kid's shopping", href: '' },
        { title: 'Accessories', href: '' },
      ],
    },
    {
      cols: [
        { title: 'Home Page', href: '' },
        { title: 'About Us', href: '' },
        { title: 'Contact', href: '' },
      ],
    },
    {
      cols: [
        { title: 'Help', href: '' },
        { title: 'FAQ/S', href: '' },
        { title: 'Track Your Shipping', href: '' },
      ],
    },
  ]
  return (
    <StyledFooter>
      <div className='container custom_container text-center py-4'>
        <div className='row mb-4'>
          <div className='col-3'></div>
          <div className='col-3'>
            <StyledH3 className='fs-5 fw-semibold'>
              Shopping & Categories
            </StyledH3>
          </div>
          <div className='col-3'>
            <StyledH3 className='fs-5 fw-semibold'>Useful Links</StyledH3>
          </div>
          <div className='col-3'>
            <StyledH3 className='fs-5 fw-semibold'>Help & Information</StyledH3>
          </div>
        </div>
        <div className='row'>
          <div className='col-3 d-flex justify-content-start align-items-start'>
            <Icon />
            <StyledLink href={'/'}>
              <h1 className='text-start fs-1'>DOKAN SHOP</h1>
            </StyledLink>
          </div>

          {linkList.map((link, index) => (
            <div key={index} className='col-3 d-flex flex-column'>
              {link.cols.map((col, colIndex) => (
                <StyledLink
                  key={colIndex}
                  href={col.href}
                  className='fs-6 mb-4'
                >
                  {col.title}
                </StyledLink>
              ))}
            </div>
          ))}
        </div>
        <Hr></Hr>
        <div>
          <div>
            <p className='fs-5 fw-light mt-4'>
              Copyright © 2022 DokanShop Co., Ltd. All Rights Reserved.
            </p>
          </div>
          <div>
            <StyledLink $blue href={''}>
              <FaFacebookF className='fs-5 mx-3' />
            </StyledLink>
            <StyledLink $lightBlue href={''}>
              <FaTwitter className='fs-5 mx-3' />
            </StyledLink>
            <StyledLink $green href={''}>
              <FaWhatsapp className='fs-5 mx-3' />
            </StyledLink>

            <StyledLink $red href={''}>
              <FaYoutube className='fs-5 mx-3' />
            </StyledLink>
          </div>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
