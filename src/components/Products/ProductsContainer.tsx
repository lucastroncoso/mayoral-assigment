/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

type Props = {
  children: JSX.Element[] | JSX.Element | undefined;
};

export const ProductsContainer: FC<Props> = ({ children }) => {
  return (
    <div className="mt-6 grid  gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {children}
    </div>
  );
};
