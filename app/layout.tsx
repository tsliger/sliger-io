'use client'

import './globals.css'
import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './misc/theme'
import { ColorModeScript } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { colorMode } = useColorMode()
  return (
      <html lang="en">
        <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <ChakraProvider theme={theme}>
              <Navbar />
              {children}
              <Footer />
            </ChakraProvider>
        </body>
      </html>
  )
}
