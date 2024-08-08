import { useState } from 'react'

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

const ProductCardImages = ({ product }: Props) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <Carousel
      className='w-full'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CarouselContent className='ml-0'>
        {(product.images as any[]).map((image, index) => (
          <CarouselItem key={image} className='pl-0'>
            <img
              className='h-[200px] w-full rounded-md object-cover'
              src={getImageUrl(image)}
              alt={`${product.name} Image ${index + 1}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {isHovering && (
        <>
          <CarouselPrevious className='absolute left-4' />
          <CarouselNext className='absolute right-4' />
        </>
      )}
    </Carousel>
  )
}

export default ProductCardImages
