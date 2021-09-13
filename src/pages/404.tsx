import Head from "next/head";

import { Layout } from "../components/Layout";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>tksx1227 - 404</title>
        <meta name="description" content="Page Not Found" />
      </Head>
      <Layout>
        <div className={"text-center"}>
          <h2 className={"text-2xl font-bold tracking-wider md:text-3xl mb-8"}>
            404エラー
          </h2>
          <p>お探しのページは見つかりませんでした。</p>
          <p>再度URLをご確認ください。</p>
        </div>
      </Layout>
    </>
  );
};

export default Custom404;
