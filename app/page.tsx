/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import Carousel from './components/carousel/Carousel'
import HotDeals from './sections/HotDeals'
import Products from './sections/Products'
import VideoSection from './sections/VideoSection'
import Feedback from './sections/Feedback'

export default function Home() {
  return (
    <div
      className='scrollspy-example'
      data-bs-spy='scroll'
      data-bs-target='#navbar'
      data-bs-root-margin='0px 0px -40%'
      data-bs-smooth-scroll='true'
      // tabIndex='0'
    >
      <Carousel />
      <Products />
      <VideoSection />
      <HotDeals />
      <Feedback />
    </div>
  )
}
