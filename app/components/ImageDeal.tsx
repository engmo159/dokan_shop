'use client'
import Image from 'next/image'
import { FC } from 'react'
import styled from 'styled-components'

interface ImageDealProps {
  src: string
}

const ImageContainer = styled.div`
  position: relative;

  &:hover {
    .overlay {
      display: block;
    }
  }
  &:not(:hover) {
    .overlay {
      animation: scaleAnimationReverse 0.6s 0s ease-in-out;
    }
  }
`
const StyledP = styled.p`
  position: absolute;
  display: none;
  background-color: rgba(205, 92, 92, 90%);
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  z-index: 50;
  animation: scaleAnimation 0.6s 0s ease-in-out;
`

const ImageDeal: FC<ImageDealProps> = ({ src }) => {
  return (
    <ImageContainer className='col-md-5 mb-5'>
      <Image src={src} width={640} height={427} alt='' className='img-fluid' />
      <StyledP className='overlay text-white fs-1 p-4'>
        Enjoy 50% Discount On Black Friday
      </StyledP>
    </ImageContainer>
  )
}

export default ImageDeal
