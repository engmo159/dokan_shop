'use client'
import styled from 'styled-components'
import Card from '../components/Card'
import Paragraph from '../components/Paragraph'

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
    <section className='container custom_container text-center section'>
      <h2 className='fw-semibold fs-1  mb-4'>Latest Products</h2>
      <Paragraph> Here , You Can Find Our Newest Products</Paragraph>

      <div className='row '>
        {cartItems.map((item, index) => (
          <Card key={index} src={item.src} h5={item.h5} p={item.p} />
        ))}
      </div>
    </section>
  )
}

export default Products
