import Head from "next/head"

import { Layout } from "../components/layout"

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Layout>
        <h1>404 - Page Not Found</h1>
      </Layout>
    </>
  )
}

export default Custom404