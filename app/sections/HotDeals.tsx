import ImageDeal from '../components/ImageDeal'
import Paragraph from '../components/Paragraph'

const images = [
  {
    src: '/images/deal-02.jpg',
    p: 'Enjoy 50% Discount On Black Friday',
  },
  {
    src: '/images/deal-03.jpg',
    p: 'Enjoy Up To 70% Sale On Weekend',
  },
  {
    src: '/images/deal-07.jpg',
    p: 'Enjoy Free Delivery While Register',
  },
]

const HotDeals = () => {
  return (
    <section className='section container custom_container text-center '>
      <h2 className='fw-semibold fs-1  mb-4'>Hot Deals</h2>
      <Paragraph>
        Searching For Special Things! You Can Find Our Latest Deals Here
      </Paragraph>
      <div className='row d-flex align-items-center justify-content-evenly'>
        {images.map((image, index) => (
          <ImageDeal key={index} src={image.src} />
        ))}
      </div>
    </section>
  )
}

export default HotDeals
