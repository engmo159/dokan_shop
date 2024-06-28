import Image from 'next/image'
import { FC } from 'react'

interface ImageDealProps {
  src: string
}

const ImageDeal: FC<ImageDealProps> = ({ src }) => {
  return (
    <div className='col-md-5 mb-5'>
      <Image src={src} width={640} height={427} alt='' className='img-fluid' />
    </div>
  )
}

export default ImageDeal
