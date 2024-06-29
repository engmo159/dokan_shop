import ContainerSection from '../components/Container'
import Heading from '../components/Heading'
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
    <div id='deals'>
      <ContainerSection>
        <Heading>Hot Deals</Heading>
        <Paragraph>
          Searching For Special Things! You Can Find Our Latest Deals Here
        </Paragraph>
        <div className='row d-flex align-items-center justify-content-evenly'>
          {images.map((image, index) => (
            <ImageDeal key={index} src={image.src} />
          ))}
        </div>
      </ContainerSection>
    </div>
  )
}

export default HotDeals
