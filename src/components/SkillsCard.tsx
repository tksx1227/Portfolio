import Image from 'next/image';

import { skills } from '../cms/types/response';

type Props = {
  title: string;
  skillList: skills[];
};

export const SkillsCard = (props: Props) => {
  const { title, skillList } = props;
  const available = skillList.filter((item) => item.status[0] === 'available');
  const learning = skillList.filter((item) => item.status[0] === 'learning');

  return (
    <div>
      <h3 className={'font-bold text-2xl text-indigo-900 tracking-wide pb-2 dark:text-indigo-300'}>
        {title}
      </h3>
      <div className={'h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-300'}></div>
      <p className={'text-lg tracking-widest font-semibold mt-6 mb-4'}>ある程度使える</p>
      <div className={' mb-8 text-center grid grid-cols-4 md:grid-cols-none md:flex md:flex-wrap'}>
        {available.map(({ image_path, title }) => {
          return (
            <div className='m-3' key={title}>
              <div className='hidden select-none md:block'>
                <Image
                  src={image_path.url}
                  alt={title}
                  title={title}
                  width='80'
                  height='80'></Image>
              </div>
              <div className='block select-none md:hidden'>
                <Image
                  src={image_path.url}
                  alt={title}
                  title={title}
                  width='50'
                  height='50'></Image>
              </div>
            </div>
          );
        })}
      </div>
      <p className={'text-lg tracking-widest font-semibold mb-4'}>学習中</p>
      <div className={'flex flex-wrap'}>
        {learning.map(({ title, image_path }) => {
          return (
            <div className='m-3' key={title}>
              <div className='hidden select-none md:block'>
                <Image
                  src={image_path.url}
                  alt={title}
                  title={title}
                  width='80'
                  height='80'></Image>
              </div>
              <div className='block select-none md:hidden'>
                <Image
                  src={image_path.url}
                  alt={title}
                  title={title}
                  width='50'
                  height='50'></Image>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
