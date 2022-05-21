import { GetStaticProps } from 'next';
import Head from 'next/head';
import { client } from '../cms/client';

import { timeline } from '../cms/types/response';
import { Layout } from '../components/Layout';
import { TimelineCard } from '../components/TimelineCard';

type Props = {
  timelineInfoList: timeline[];
};

export const getStaticProps: GetStaticProps = async () => {
  const timelineInfo = await client.gets('timeline', {
    orders: '-started_at',
  });

  return {
    props: {
      timelineInfoList: timelineInfo?.contents,
    },
  };
};

const TimelineDetail = (props: Props) => {
  const { timelineInfoList } = props;

  return (
    <>
      <Head>
        <title>tksx1227 - timeline detail</title>
        <meta name='description' content="tsxk1227's timeline detail" />
      </Head>
      <Layout>
        <section id='timeline' className={'mt-16 pt-8 md:mt-28'}>
          <div className={'tracking-wider'}>
            <p className={'text-lg font-semibold text-indigo-800 dark:text-indigo-300'}>TIMELINE</p>
            <h2 className={'text-2xl font-bold tracking-wider md:text-3xl'}>タイムライン</h2>
          </div>
          <div
            className={
              'glass-container-light mt-8 mb-24 px-6 py-10 md:mb-48 md:px-10 dark:glass-container-dark'
            }
          >
            {timelineInfoList.map((timelineInfo: timeline, idx: number) => (
              <TimelineCard key={timelineInfo.id} timelineInfo={timelineInfo} idx={idx} />
            ))}
            <div className={'mt-6 text-center'}>
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

export default TimelineDetail;
