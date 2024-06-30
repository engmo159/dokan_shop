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
    /* width: 100%; */
  `
  const Hr = styled.div`
    height: 1px;
    background-color: white;
  `
  const StyledP = styled.p``
  const linkList = [
    {
      header: 'Shopping & Categories',
      cols: [
        { title: "Men's shopping", href: '' },
        { title: "Women's shopping", href: '' },
        { title: "Kid's shopping", href: '' },
        { title: 'Accessories', href: '' },
      ],
    },
    {
      header: 'Useful Links',
      cols: [
        { title: 'Home Page', href: '' },
        { title: 'About Us', href: '' },
        { title: 'Contact', href: '' },
      ],
    },
    {
      header: 'Help & Information',
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
        <div className='row  mb-4 row-gap-4'>
          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className=' d-flex justify-content-center align-items-center  h-100'>
              <Icon />
              <StyledLink href={'/'}>
                <h1 className='text-start fs-1'>DOKAN SHOP</h1>
              </StyledLink>
            </div>
          </div>

          {linkList.map((link, index) => (
            <div
              key={index}
              className='col-sm-12 col-md-6 col-lg-3 d-flex flex-column'
            >
              <StyledH3 className='fs-5 fw-semibold mb-4'>
                {link.header}
              </StyledH3>

              {link.cols.map((col, colIndex) => (
                <StyledLink
                  key={colIndex}
                  href={col.href}
                  className='fs-6 my-2'
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
              Copyright © 2024 DokanShop Co., Ltd. All Rights Reserved.
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
