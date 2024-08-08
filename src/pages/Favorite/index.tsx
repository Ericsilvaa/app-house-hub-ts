import { useMemo } from 'react';

import ProductList from '@/components/ProductList';
import { useAppSelector } from '@/store/hooks';

const ProductFavoritesPage = () => {
  const products = useAppSelector((state) => state.products.products);
  const favoriteProducts = useAppSelector(
    (state) => state.user.favoriteProductsIds,
  );

  const favProducts = useMemo(
    () => products.filter((listing) => favoriteProducts.includes(listing.id)),
    [products, favoriteProducts],
  );

  return (
    <div className='container py-4'>
      <ProductList products={favProducts} />
    </div>
  );
};

export default ProductFavoritesPage;
