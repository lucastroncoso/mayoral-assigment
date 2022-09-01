import Head from 'next/head';
import { Products } from '../components/Products/Products';

const ProductsPage = () => {
  return (
    <div>
      <Head>
        <title>Mayoral Assignment</title>
        <meta name="description" content="Product secction model for Mayoral assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Products />
      </main>
    </div>
  );
};

export default ProductsPage;
