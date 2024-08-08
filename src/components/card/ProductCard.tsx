import { DollarSign, Pin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card, CardContent } from '../ui/card';
import ProductCardImages from './ProductCardImages';
import ProductFavoriteButton from './ProductFavoriteButton';

type Props = {
  product: any;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card className='w-[320px]'>
      <div className='relative'>
        <ProductCardImages product={product} />
        <ProductFavoriteButton
          className='absolute right-4 top-4'
          product={product}
        />
      </div>
      <Link to={`/product/${product.id}`}>
        <CardContent className='flex flex-col gap-2 p-4'>
          <h2
            className='font-semibol d mb-2 
          text-xl'
          >
            {product?.name}
          </h2>
          <div className='flex items-center gap-2'>
            <DollarSign className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              <span className='font-bold text-foreground'>
                {product?.price}
              </span>{' '}
              / noite
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Pin className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              {product?.location?.name}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Users className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              {product?.maxGuests} Pessoas
            </span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;
