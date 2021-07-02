import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/layout'

import { IconWithName } from "../components/iconWithName"

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <IconWithName />
        <h1>Home</h1>
      </Layout>
    </>
  )
}
