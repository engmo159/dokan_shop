'use client'
import styled from 'styled-components'
import CarouselItem from './carousel_components/CarouselItem'

const items = [
  {
    src: '/images/women-001.jpg',
    heading: "Women's Fashion",
    paragraph: 'Some representative placeholder content for the first slide.',
  },
  {
    src: '/images/men-001.jpg',
    heading: "Men's Fashion",
    paragraph: 'Some representative placeholder content for the second slide.',
  },
  {
    src: '/images/kid-001.jpg',
    heading: "Kids's Fashion",
    paragraph: 'Some representative placeholder content for the third slide.',
  },
  {
    src: '/images/accessories-001.jpg',
    heading: 'Accessories',
    paragraph: 'Some representative placeholder content for the forth slide.',
  },
]

const CarouselContainer = styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 60%);
    width: 100%;
    height: 100%;
  }
`

const Carousel = () => {
  return (
    <>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='0'
            className='active'
            aria-current='true'
            aria-label='Slide 1'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='1'
            aria-label='Slide 2'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='2'
            aria-label='Slide 3'
          ></button>
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to='3'
            aria-label='Slide 4'
          ></button>
        </div>
        <CarouselContainer className='carousel-inner  position-relative'>
          {items.map((item, index) => (
            <CarouselItem
              key={index}
              src={item.src}
              heading={item.heading}
              paragraph={item.paragraph}
              isActive={index === 0}
              width={3840}
              height={2160}
            />
          ))}
        </CarouselContainer>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel
