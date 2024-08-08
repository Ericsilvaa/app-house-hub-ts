import React from 'react'

import { getImageUrl } from '@/utils/images'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../ui/carousel'

type Props = {
  product: any
}

const ProductDetailsCardImages = ({ product }: Props) => {
  console.log('🚀 ~ product:', product)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
  return (
    <>
      <img
        className='mb-4 h-[500px] w-full rounded-md object-cover'
        src={getImageUrl(product.images[currentImageIndex])}
        alt={product.name}
      />
      <Carousel className='mx-auto mb-4 w-[90%]'>
        <CarouselContent>
          {(product.images as any[]).map((image, index) => (
            <CarouselItem
              key={image}
              className='basis-1/3 cursor-pointer'
              onClick={() => setCurrentImageIndex(index)}
              isSelected={index === currentImageIndex}
            >
              <img
                className='h-52 w-full object-cover shadow-sm'
                src={getImageUrl(image)}
                alt={product.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

export default ProductDetailsCardImages
