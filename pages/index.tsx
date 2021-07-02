import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <h1>Home</h1>
        <Link href="/">
          <a>home </a>
        </Link>
        <Link href="/about">
          <a>about </a>
        </Link>
        <Link href="/works">
          <a>works</a>
        </Link>
      </Layout>
    </>
  )
}
