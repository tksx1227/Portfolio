import Head from 'next/head';

import { Layout } from '../components/Layout';
import { Products } from '../components/Products';
import { Profile } from '../components/Profile';
import { Skills } from '../components/Skills';
import { Timeline } from '../components/Timeline';
import { Top } from '../components/Top';

const Home = () => {
  return (
    <>
      <Head>
        <title>tksx1227</title>
        <meta name='description' content="tksx1227's Portfolio" />
      </Head>
      <Layout>
        <Top />
        <Skills />
        <Products />
        <Timeline />
        <Profile />
      </Layout>
    </>
  );
};

export default Home;
