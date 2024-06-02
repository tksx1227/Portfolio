import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { headerInfoList } from '../const/headerInfo';
import { HeaderInfoType } from '../types/headerInfo';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const switchThemeMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const switchMenu = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return (
    <header
      className={
        'font-semibold bg-white absolute w-full py-6 px-3 border-b-2 md:text-lg md:p-10 dark:bg-dark-bandle'
      }>
      <nav className='flex justify-end'>
        <div className={'hidden justify-around md:space-x-3 md:inline-flex md:flex-row'}>
          {headerInfoList.map((headerInfo: HeaderInfoType) => {
            return (
              <Link
                key={headerInfo.title}
                href={headerInfo.href}
                className={'px-0 under-bar md:px-2'}>
                {headerInfo.title}
              </Link>
            );
          })}
          <div className={'md:pl-4'}>
            <button
              className='block p-1 bg-gray-600 dark:bg-white rounded-full'
              onClick={switchThemeMode}>
              {theme === 'light' ? (
                <MoonIcon className='w-5 h-5 text-white' />
              ) : (
                <SunIcon className='w-5 h-5 text-gray-600' />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div>
        <div className='flex justify-end md:hidden'>
          <button onClick={switchMenu} className='flex-initial'>
            <Bars3Icon className='w-8 h-8' />
          </button>
        </div>
      </div>
      {isOpenMenu ? (
        <nav
          className={
            'transition-all absolute glass-container-light py-6 w-44 top-24 right-2 z-10 md:hidden dark:glass-container-dark'
          }>
          <div className={'space-y-6'}>
            {headerInfoList.map((headerInfo: HeaderInfoType) => {
              return (
                <div key={headerInfo.title} className={'text-center'} onClick={switchMenu}>
                  <Link href={headerInfo.href}>
                    {headerInfo.title}
                  </Link>
                </div>
              );
            })}
            <button
              className='mx-auto block p-1 bg-gray-600 dark:bg-white rounded-full'
              onClick={switchThemeMode}>
              {theme === 'light' ? (
                <MoonIcon className='w-5 h-5 text-white' />
              ) : (
                <SunIcon className='w-5 h-5 text-gray-600' />
              )}
            </button>
          </div>
        </nav>
      ) : null}
    </header>
  );
};
