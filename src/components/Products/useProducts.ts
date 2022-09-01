import { useEffect, useState } from 'react';

import { useApi } from '../../hooks/useApi';
import type { Product, Response, UseProducts } from '../../types/products';

export const useProducts: UseProducts = () => {
  let [products, setProducts] = useState<Response>();
  let { data, error, isValidating } = useApi<Response>(
    `https://api.escuelajs.co/api/v1/products?limit=50&offset=50`
  );

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const ascending = (a: Product, b: Product) => {
    const aPrice = Number(a.price);
    const bPrice = Number(b.price);

    return aPrice - bPrice;
  };

  const descending = (a: Product, b: Product) => {
    const aPrice = Number(a.price);
    const bPrice = Number(b.price);

    return bPrice - aPrice;
  };

  const handleAscending = (products: Response) => {
    let ascendingProducts = products?.sort(ascending);
    setProducts([...(ascendingProducts as Array<Product>)]);
    console.log('ascending');
  };

  const handleDescending = (products: Response) => {
    let descendingProducts = products?.sort(descending);
    setProducts([...(descendingProducts as Array<Product>)]);
    console.log('decending');
  };

  const arraySearch = (array: Response, keyword: string) => {
    const searchTerm = keyword.toLowerCase();
    return array?.filter((value) => {
      return value.title.toLowerCase().match(new RegExp(searchTerm, 'g'));
    });
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;
    if (value.length > 2) {
      let search = arraySearch(products, value);
      setProducts(search);
    } else {
      setProducts(data);
    }
  };

  return {
    products,
    error,
    isValidating,
    handleAscending,
    handleDescending,
    handleSearch,
  };
};
