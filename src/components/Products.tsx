import Link from 'next/link';

import { products } from '../cms/types/response';
import { ProductCard } from './ProductCard';

type Props = {
  productInfoList: products[] | null;
};

export const Products = (props: Props) => {
  const { productInfoList } = props;

  return (
    <section id='products' className={'mt-16 pt-8 md:mt-28'}>
      <div className={'tracking-wider'}>
        <p className={'text-lg font-semibold text-indigo-800 dark:text-indigo-300'}>PRODUCTS</p>
        <h2 className={'text-2xl font-bold tracking-wider md:text-3xl'}>制作物</h2>
      </div>
      <div
        className={
          'glass-container-light mt-8 px-6 py-10 space-y-24 md:space-y-40 md:px-10 dark:glass-container-dark'
        }>
        {productInfoList ? (
          productInfoList.map((productInfo: products, idx: number) => (
            <ProductCard key={productInfo.id} isEven={idx % 2 === 0} productInfo={productInfo} />
          ))
        ) : (
          <div className={'py-8 text-center'}>
            <h3>有効なアイテムがありません。</h3>
          </div>
        )}
        {productInfoList ? (
          <div className={'text-center'}>
            <Link
              href='/products-detail'
              className={
                'shadow-xl inline-block px-8 py-3 rounded-full transition duration-300 bg-indigo-500 text-white hover:text-indigo-500 hover:bg-white md:px-16 md:py-4 dark:hover:bg-gray-100'
              }>
              
                もっと見る
              
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};
