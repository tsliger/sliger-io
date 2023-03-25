import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const ContactBackground = dynamic(() => import('../components/ContactBackground'))

export default function contact() {
  return (
  <>
    <Head>
      <title>Contact | sliger.dev</title>
      <meta name="description" content="Reach out and connect. | sliger.dev" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <ContactBackground />
  </>
  )
}
