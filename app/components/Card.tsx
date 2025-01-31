'use client'
/* eslint-disable react/no-unescaped-entities */
import { FaCartPlus, FaHeart } from 'react-icons/fa'
import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface CardProps {
  src: string

  h5: string
  p: string
}

const StyledDiv = styled.div`
  @media screen and (max-width: 767px) {
    width: 60%;
    margin: 1rem;
  }
`

const StyledP = styled.p`
  color: var(--p-color);
`
const StyledIconDiv = styled.div`
  color: var(--icon-color);
`
const StyledIcon = styled.div`
  transition: all 0.3s ease-out;

  &:hover {
    color: var(--sec-color);
  }
`
const ButtonLink = styled(Link)`
  background-color: var(--sec-color);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--sec-color);
    scale: 1.2;
  }
`
const StyledImage = styled(Image)`
  height: auto;
  /* width: 100% !important; */
`
const Card: FC<CardProps> = ({ src, h5, p }) => {
  return (
    <StyledDiv className='card   col-lg-3 col-md-6 col-sm-12  border-0 my-4'>
      <StyledImage
        src={src}
        className='card-img-top image-fluid '
        height={390}
        width={370}
        layout='responsive'
        alt='...'
      />

      <StyledIconDiv className='card-body d-flex justify-content-around fs-3 p-0 '>
        <StyledIcon>
          <FaHeart />
        </StyledIcon>
        <StyledIcon>
          <FaCartPlus />
        </StyledIcon>
      </StyledIconDiv>
      <div className='card-body'>
        <h5 className='card-title fw-semibold mb-3'>{h5}</h5>
        <StyledP className='card-text'>{p}</StyledP>
      </div>
      <div className='card-body p-0'>
        <ButtonLink href='#' className='btn p-1 fs-6 text-white fw-semibold'>
          See More
        </ButtonLink>
      </div>
    </StyledDiv>
  )
}

export default Card
