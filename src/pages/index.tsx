import { GetStaticProps } from 'next';
import Head from 'next/head';

import { client } from '../cms/client';
import { products, timeline, skills } from '../cms/types/response';
import { Layout } from '../components/Layout';
import { Products } from '../components/Products';
import { Profile } from '../components/Profile';
import { Skills } from '../components/Skills';
import { Timeline } from '../components/Timeline';
import { Top } from '../components/Top';

type Props = {
  timelineInfoList: timeline[] | null;
  productInfoList: products[] | null;
  skillInfoStructure: {
    languageList: skills[] | null;
    frameworkList: skills[] | null;
    otherList: skills[] | null;
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const skillLanguageInfo = await client.gets('skills', {
    filters: 'category[contains]language',
    limit: 40,
  });
  const skillFrameworkInfo = await client.gets('skills', {
    filters: 'category[contains]framework',
    limit: 40,
  });
  const skillOtherInfo = await client.gets('skills', {
    filters: 'category[contains]other',
    limit: 40,
  });
  const productInfo = await client.gets('products', {
    limit: 2,
    orders: '-finished_at',
  });
  const timelineInfo = await client.gets('timeline', {
    limit: 3,
    orders: '-started_at',
  });

  return {
    props: {
      timelineInfoList: timelineInfo?.contents ?? null,
      productInfoList: productInfo?.contents ?? null,
      skillInfoStructure: {
        languageList: skillLanguageInfo?.contents ?? null,
        frameworkList: skillFrameworkInfo?.contents ?? null,
        otherList: skillOtherInfo?.contents ?? null,
      },
    },
  };
};

const Home = (props: Props) => {
  const { timelineInfoList, productInfoList, skillInfoStructure } = props;

  return (
    <>
      <Head>
        <title>tksx1227</title>
        <meta name='description' content="tksx1227's Portfolio" />
      </Head>
      <Layout>
        <Top />
        <Skills skillInfoStructure={skillInfoStructure} />
        <Products productInfoList={productInfoList} />
        <Timeline timelineInfoList={timelineInfoList} />
        <Profile />
      </Layout>
    </>
  );
};

export default Home;
