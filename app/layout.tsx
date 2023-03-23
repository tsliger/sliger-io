'use client'

import './globals.css'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./components/Navbar'))
const Footer = dynamic(() => import('./components/Footer'))
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'
import theme from './misc/theme'
import { ColorModeScript } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>
          <CacheProvider>
            <ChakraProvider theme={theme}>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <Navbar />
              {children}
              <Footer />
            </ChakraProvider>
          </CacheProvider>
        </body>
      </html>
  )
}
