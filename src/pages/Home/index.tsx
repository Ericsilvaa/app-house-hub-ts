import DataRenderer from '@/components/DataRenderer';
import ProductFilters from '@/components/ProductFilters';
import ProductList from '@/components/ProductList';
import { Separator } from '@/components/ui/separator';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addProducts } from '@/store/slices/products/slice';
import { env } from '@/utils/env';
import { getItem } from '@/utils/localStorage';
import React from 'react';

const HomePage = () => {
  const { error, products, status } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const [filters, setFilters] = React.useState({
    dates: undefined,
    guests: 0,
    search: '',
  });

  const handleFilters = React.useCallback((filters: any) => {
    setFilters(filters);
  }, []);

  // const { data, error, isLoading } = useFetch('/api/listings');

  const fetchOptions = React.useMemo(() => ({ params: filters }), [filters]);

  React.useEffect(() => {
    const data = getItem(env.DB_KEY!);

    const dispatchAbort = dispatch(addProducts(data?.listings));

    return () => {
      // dispatchAbort.abort();
    };
  }, [filters]);

  return (
    <div className='container py-4'>
      <div className='mb-4'>
        <ProductFilters onChange={handleFilters} />
        <Separator className='my-4' />
      </div>
      <DataRenderer error={error} isLoading={status === 'loading'}>
        <ProductList products={[...products]} />
      </DataRenderer>
    </div>
  );
};

export default HomePage;
