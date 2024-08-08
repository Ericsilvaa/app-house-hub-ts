import ProductCard from './card/ProductCard';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {products?.length > 0 ? (
        products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      ) : (
        <p>Nenhum produto encontrado</p>
      )}
    </div>
  );
};

export default ProductList;
