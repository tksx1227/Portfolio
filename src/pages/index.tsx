import Head from "next/head";

import { Top } from "../components/Top";
import { Skills } from "../components/Skills";
import { Layout } from "../components/Layout";
import { Profile } from "../components/Profile";
import { Products } from "../components/Products";
import { Timeline } from "../components/Timeline";

const Home = () => {
  return (
    <>
      <Head>
        <title>tksx1227</title>
        <meta name="description" content="tksx1227's Portfolio" />
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
