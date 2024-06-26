import Image from 'next/image';

export const Top = () => {
  return (
    <section id='top' className={'text-center pt-16 md:pt-24'}>
      <div className={'flex justify-center'}>
        <div className={'rounded-full flex border-2 border-gray-400 overflow-hidden'}>
          <Image
            src='/profile-image.jpg'
            alt='Profile Icon'
            className={'pointer-events-none select-none'}
            width={150}
            height={150}
          />
        </div>
      </div>
      <p className={'text-2xl mt-6 tracking-wider'}>TOMORI</p>
      <p className={'text-gray-400'}>JAPAN TOKYO</p>
      <div
        className={
          'glass-container-light mt-8 p-6 text-left text-sm leading-relaxed tracking-widest md:p-10 md:text-center md:text-base dark:glass-container-dark'
        }>
        <p>都内のソフトウェアエンジニア</p>
        <p>エンタメ領域の事業で活躍したい願望があります。</p>
      </div>
    </section>
  );
};
