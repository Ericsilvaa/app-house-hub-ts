import { useMemo } from 'react';

import { cn } from '@/lib/utils';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import {
  addFavoriteListing,
  removeFavoriteListing,
} from '@/store/slices/auth/userSlice';
import { Heart } from 'lucide-react';
import { Button } from '../ui/button';

type Props = {
  product: any;
  className?: string;
};

const ProductFavoriteButton = ({ product, className }: Props) => {
  const favoriteListingIds = useAppSelector(
    (state) => state.user.favoriteProductsIds,
  );

  const dispatch = useAppDispatch();

  const isFavorite = useMemo(
    () => favoriteListingIds.includes(product.id),
    [product, favoriteListingIds],
  );

  const handleFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      dispatch(removeFavoriteListing(product.id));
    } else {
      dispatch(addFavoriteListing(product.id));
    }
  };
  return (
    <Button className={className} variant='outline' onClick={handleFavorite}>
      <Heart
        className={cn('h-4 w-4', { 'fill-primary text-primary': isFavorite })}
      />
    </Button>
  );
};

export default ProductFavoriteButton;
