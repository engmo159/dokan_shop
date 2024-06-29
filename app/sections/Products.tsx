'use client'
import styled from 'styled-components'
import Card from '../components/Card'
import Paragraph from '../components/Paragraph'
import Heading from '../components/Heading'
import ContainerSection from '../components/Container'

const cartItems = [
  {
    src: '/images/women-01.jpg',

    h5: 'New Green Jacket',
    p: 'EGP 290.0',
  },
  {
    src: '/images/men-01.jpg',

    h5: 'Classic Spring',
    p: 'EGP 150.0',
  },
  {
    src: '/images/kid-01.jpg',

    h5: 'School Collection',
    p: 'EGP 295.0',
  },
  {
    src: '/images/accessories-01.jpg',

    h5: 'Accessories',
    p: 'EGP 85.00',
  },
]

const Products = () => {
  return (
    <div id='products'>
      <ContainerSection>
        <Heading>Latest Products</Heading>
        <Paragraph> Here , You Can Find Our Newest Products</Paragraph>

        <div className='row '>
          {cartItems.map((item, index) => (
            <Card key={index} src={item.src} h5={item.h5} p={item.p} />
          ))}
        </div>
      </ContainerSection>
    </div>
  )
}

export default Products
