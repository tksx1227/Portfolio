import Head from "next/head"

import { Layout } from "../components/layout"
import { IconWithName } from "../components/iconWithName"

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <IconWithName home />
        <h1>About</h1>
      </Layout>
    </>
  )
}

export default About