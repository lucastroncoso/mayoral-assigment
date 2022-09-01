import { ApiError } from '../hooks/useApi';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

export type Response = Product[] | undefined;

export interface UseProducts {
  (): {
    products?: Response;
    error?: ApiError;
    isValidating?: boolean;
    handleAscending: (products: Response) => void;
    handleDescending: (products: Response) => void;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
