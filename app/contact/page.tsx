import React from 'react'
import ContactBackground from '../components/ContactBackground'

export async function generateMetadata({ params, searchParams }: any) {
  return { title: 'Contact | sliger.dev' };
}

export default function page() {
  return (
    <ContactBackground />
  )
}
