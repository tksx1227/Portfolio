import Image from 'next/image';
import { useState } from 'react';

import { products } from '../cms/types/response';
import { plainTextToList } from '../lib/utils';

type Props = {
  productInfo: products;
};

export const ProductDetailCard = (props: Props) => {
  const [imgIndex, setImgIndex] = useState(0);
  const { productInfo } = props;

  const onClickMobileImg = () => {
    const imgCount = productInfo.image_info.length;
    setImgIndex((prevState) => (prevState + 1) % imgCount);
  };

  return (
    <div>
      <h3 className={'text-3xl text-indigo-700 font-bold mb-4 dark:text-indigo-300'}>
        {productInfo.title}
      </h3>
      <div
        className={'mb-6 h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-300 md:mb-12'}
      ></div>
      <div className={'flex flex-col md:flex-row'}>
        <div className={'md:w-1/2 flex flex-row justify-center'}>
          <div onClick={onClickMobileImg} className={'block md:hidden'}>
            <div className={'flex product-card-img rounded overflow-hidden'}>
              <Image
                src={productInfo.image_info[imgIndex].path.url}
                alt={productInfo.title}
                objectFit='contain'
                width={productInfo.image_info[imgIndex].width}
                height={productInfo.image_info[imgIndex].height}
              />
            </div>
          </div>
          <div className={'flex flex-col space-y-8 hidden md:block'}>
            {productInfo.image_info.map((img, idx) => {
              return (
                <div key={img.path.url} className={'flex product-card-img rounded overflow-hidden'}>
                  <Image
                    src={img.path.url}
                    alt={productInfo.title + (idx + 1)}
                    objectFit='contain'
                    width={img.width}
                    height={img.height}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className={'mt-8 leading-relaxed md:mt-0 md:w-1/2 md:ml-12 md:text-left'}>
          <div className={'inline-block text-left'}>
            <div>
              <p className={'text-xl font-semibold mb-2'}>備考</p>
              <p
                className={
                  'block mb-6 border-b-2 border-indigo-300 md:inline-block dark:border-indigo-800'
                }
              >
                {productInfo.overview}
              </p>
              <div className={'space-y-2'}>
                {plainTextToList(productInfo.description).map((text) => (
                  <p key={text}>{text}</p>
                ))}
                {productInfo.appeal_points && (
                  <div className={'pt-7'}>
                    <p className={'tracking-wider inline-block'}>主なポイント</p>
                    <ul className={'list-disc space-y-2'}>
                      {plainTextToList(productInfo.appeal_points).map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className={'text-xl font-semibold mt-8 mb-2'}>基本情報</p>
              <p>
                <span className={'font-bold'}>開発期間</span>：{productInfo.period}
              </p>
              <p>
                <span className={'font-bold'}>制作人数</span>：{productInfo.member_num}人
              </p>
              <p>
                <span className={'font-bold'}>役割</span>：{productInfo.role.join(', ')}
              </p>
              {productInfo.github_url && (
                <p>
                  <span className={'font-bold'}>リポジトリ</span>：
                  <a
                    href={productInfo.github_url}
                    target='_brank'
                    title='Github'
                    className={
                      'text-blue-600 transition duration-200 hover:opacity-60 dark:text-blue-300'
                    }
                  >
                    こちら
                  </a>
                </p>
              )}
              <div>
                <span className={'font-bold'}>使用技術</span>：
                {productInfo.tech_info.map((techInfo) => {
                  return (
                    <div key={techInfo.category[0]} className={'mb-2 md:mb-4'}>
                      <p>{techInfo.category[0]}</p>
                      <ul
                        className={'list-disc grid grid-cols-2 gap-x-6 md:gap-x-0 lg:grid-cols-3'}
                      >
                        {plainTextToList(techInfo.tech_names, ';').map((techName) => {
                          return <li key={techName}>{techName}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
