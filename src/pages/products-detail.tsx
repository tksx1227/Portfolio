import Head from 'next/head';

import { Layout } from '../components/Layout';
import { ProductDetailCard } from '../components/ProductDetailCard';
import { productList } from '../const/productInfo';

const ProductsDetail = () => {
  return (
    <>
      <Head>
        <title>tksx1227 - products detail</title>
        <meta name='description' content="tsxk1227's products detail" />
      </Head>
      <Layout>
        <section id='products'>
          <div className={'tracking-wider mt-8 md:mt-16'}>
            <p className={'text-lg text-indigo-800 font-semibold dark:text-indigo-300'}>PRODUCTS</p>
            <h2 className={'text-2xl font-bold tracking-wider md:text-3xl'}>制作物</h2>
          </div>
          <div
            className={
              'glass-container-light mt-8 mb-24 px-6 py-10 space-y-24 md:mb-48 md:px-10 md:space-y-36 dark:glass-container-dark'
            }
          >
            {productList.map((productInfo) => {
              return <ProductDetailCard key={productInfo.title} productInfo={productInfo} />;
            })}
            <div className={'text-center'}>
              <p
                className={
                  'inline-block bg-white bg-opacity-50 rounded shadow-lg px-12 py-4 cursor-default dark:bg-dark-base dark:shadow-dark-lg'
                }
              >
                \\ 随時更新中 //
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductsDetail;
