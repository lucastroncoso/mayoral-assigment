/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

import { useProducts } from './useProducts';
import { SearchBar } from '../Commons/SearchBar';
import { Order } from '../Commons/Order';
import { ListSkeleton } from '../Commons/ListSkeleton';
import { ProductCard } from './ProductCard';
import { ProductsContainer } from './ProductsContainer';
import { ProductsLayout } from './ProductsLayout';

export const Products: FC = () => {
  let { products, error, isValidating, handleAscending, handleDescending, handleSearch } =
    useProducts();

  return (
    <ProductsLayout>
      <div className="w-full flex flex-wrap">
        <SearchBar handleSearch={handleSearch} />
        <Order
          products={products}
          handleAscending={handleAscending}
          handleDescending={handleDescending}
        />
      </div>
      {error ? (
        <p>Sorry there was an error...</p>
      ) : (
        <ProductsContainer>
          {isValidating ? (
            <ListSkeleton listsToRender={16} />
          ) : (
            products?.map((product) => {
              return <ProductCard product={product} />;
            })
          )}
        </ProductsContainer>
      )}
    </ProductsLayout>
  );
};
