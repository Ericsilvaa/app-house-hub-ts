import { useParams } from 'react-router-dom';

import ProductDetailsCard from '@/components/card/ProductDetailsCard';
import DataRenderer from '@/components/DataRenderer';
import useFetch from '@/hooks/useFetch';

const ProductDetails = () => {
  const { id } = useParams();

  const { data: product, error, isLoading } = useFetch(`/api/listings/${id}`);

  return (
    <div className='container py-4'>
      <DataRenderer error={error} isLoading={isLoading}>
        <ProductDetailsCard product={product} />
      </DataRenderer>
    </div>
  );
};

export default ProductDetails;
