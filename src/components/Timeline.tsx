import Link from 'next/link';

import { timeline } from '../cms/types/response';
import { TimelineCard } from '../components/TimelineCard';

type Props = {
  timelineInfoList: timeline[];
};

export const Timeline = (props: Props) => {
  const { timelineInfoList } = props;

  return (
    <section id='timeline' className={'mt-16 pt-8 md:mt-28'}>
      <div className={'tracking-wider'}>
        <p className={'text-lg font-semibold text-indigo-800 dark:text-indigo-300'}>TIMELINE</p>
        <h2 className={'text-2xl font-bold tracking-wider md:text-3xl'}>タイムライン</h2>
      </div>
      <div className={'glass-container-light mt-8 px-6 py-10 md:px-10 dark:glass-container-dark'}>
        {timelineInfoList.map((timelineInfo: timeline, idx: number) => (
          <TimelineCard key={timelineInfo.id} timelineInfo={timelineInfo} idx={idx} />
        ))}
        <div className={'text-center md:mt-16'}>
          <Link href='/timeline-detail'>
            <a
              className={
                'shadow-xl inline-block px-8 py-3 rounded-full transition duration-300 bg-indigo-500 text-white hover:text-indigo-500 hover:bg-white md:px-16 md:py-4 dark:hover:bg-gray-100'
              }
            >
              もっと見る
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
