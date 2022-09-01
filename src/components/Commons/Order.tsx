import { FC } from 'react';
import type { Product, Response } from '../../types/products';

type OrderProps = {
  handleAscending: (products: Response) => void;
  handleDescending: (products: Response) => void;
  products: Product[] | undefined;
};

export const Order: FC<OrderProps> = (props) => {
  const { handleAscending, handleDescending, products } = props;
  return (
    <div className="md:w-1/2 w-full  flex items-center md:justify-end justify-center order-1 md:order-none mb-4 md:mb-0">
      <button
        className="text-6xl font-bold text-gray-600 mr-4"
        onClick={() => handleAscending(products)}
      >
        +
      </button>
      <button
        className="text-6xl font-bold text-gray-600 mr-4"
        onClick={() => handleDescending(products)}
      >
        -
      </button>
    </div>
  );
};
