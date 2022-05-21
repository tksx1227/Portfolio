import type { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = (props: { children: ReactNode }) => {
  return (
    <div className={'bg-white relative text-gray-600 dark:text-dark-base dark:bg-dark-base'}>
      <Header />
      <main
        className={
          'bg-light-image bg-contain bg-top-right flex flex-col justify-center pt-20 pb-16 px-4 min-h-screen md:pt-28 md:px-16 dark:bg-dark-image'
        }
      >
        {props.children}
      </main>
      <Footer />
    </div>
  );
};
