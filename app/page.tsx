/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react'
import Carousel from './components/carousel/Carousel'
import HotDeals from './sections/HotDeals'
import Products from './sections/Products'
import VideoSection from './sections/VideoSection'
import Feedback from './sections/Feedback'

export default function Home() {
  return (
    <div className='scrollspy-example'>
      <Carousel />
      <Products />
      <VideoSection />
      <HotDeals />
      <Feedback />
    </div>
  )
}
