import { Separator } from '@radix-ui/react-dropdown-menu';
import { DollarSign, Pin, Users } from 'lucide-react';
import { Card } from '../ui/card';
import ProductDetailsCardImages from './ProductDetailsCardImages';
import ProductFavoriteButton from './ProductFavoriteButton';

type Props = {
  product: any;
};

const ProductDetailsCard = ({ product }: Props) => {
  return (
    <Card className='mx-auto p-4'>
      <ProductDetailsCardImages product={product} />
      <Separator className='my-4' />
      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <h1 className='mb-2 text-2xl font-bold'>{product.name}</h1>
          <div className='flex items-center'>
            <DollarSign className='mr-2 h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              <span className='font-bold text-foreground'>{product.price}</span>{' '}
              / noite
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Pin className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              {product.location.name}
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <Users className='h-4 w-4 text-primary' />
            <span className='text-muted-foreground'>
              {product.maxGuests} Pessoas
            </span>
          </div>
        </div>
        <ProductFavoriteButton product={product} />
      </div>
      <Separator className='my-4' />
      <div className='whitespace-pre-line'>{product.description}</div>
    </Card>
  );
};

export default ProductDetailsCard;
