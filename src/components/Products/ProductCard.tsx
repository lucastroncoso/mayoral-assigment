import type { Product } from '../../types/products';
type ProducCardProps = {
  product: Product;
};

export const ProductCard = (props: ProducCardProps) => {
  const { product } = props;
  return (
    <div
      data-testid="productCard"
      key={product.id}
      className="group relative shadow shadow-sky-400/50 overflow-hidden rounded-md group-hover:opacity-75 md:px-4 md:py-4 py-4 px-1"
    >
      <div className=" aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-40">
        <img
          src={product.images[0]}
          alt="product image"
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="mt-4 flex flex-col items-center h-60 justify-around">
        <div className="w-full">
          <h3  data-testid="cardTitle" className="text-sm text-gray-700 truncate text-center font-medium">
            {product.title}
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-500">{`${product.price} € `}</p>
        <div className="w-full items-center flex flex-col">
          <a href="#" className="text-gray-400">
            Mas colores
          </a>
          <a
            href="#"
            className="flex w-1/2 items-center justify-center rounded-md border border-transparent bg-indigo-600  text-base font-medium text-white hover:bg-indigo-700 md:py-1 md:px-6 md:text-lg my-2 px-8 py-1"
          >
            Añadir
          </a>
        </div>
      </div>
    </div>
  );
};
