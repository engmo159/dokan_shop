'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

interface CarouselItemProps {
  isActive?: boolean
  src: string
  paragraph: string
  heading: string
  width: number
  height: number
}

const ItemDiv = styled.div`
  max-height: 100vh;
`

const CarouselItem: FC<CarouselItemProps> = ({
  isActive,
  src,
  paragraph,
  heading,
  width,
  height,
}) => {
  return (
    <ItemDiv className={`carousel-item  ${isActive ? 'active' : ''}`}>
      <Image
        src={src}
        className='d-block w-100 img-fluid object-fit-cover'
        alt=''
        width={width}
        height={height}
      />
      <div className='carousel-caption d-none d-md-block z-3'>
        <h5 className='fs-5 fw-bold'>{heading}</h5>
        <p className='fs-5 fw-light'>{paragraph}</p>
      </div>
    </ItemDiv>
  )
}

export default CarouselItem
