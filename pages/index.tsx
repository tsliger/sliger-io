import Head from 'next/head'
import dynamic from 'next/dynamic'
const Background = dynamic(() => import('../components/Background'))
const Experience = dynamic(() => import('../components/Experience'))



export default function Home() {
  return (
    <>
      <Head>
        <title>Home | sliger.dev</title>
        <meta name="description" content="Developer portfolio | sliger.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
      <Experience />
    </>
  )
}
