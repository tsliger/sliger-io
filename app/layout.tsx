'use client'

import './globals.css'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('./components/Navbar'))
const Footer = dynamic(() => import('./components/Footer'))
import { ChakraProvider } from '@chakra-ui/react'
import theme from './misc/theme'
import { ColorModeScript } from '@chakra-ui/react'

export default function RootLayout({
  children,
  ...props
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>
            <ChakraProvider theme={theme}>
              <ColorModeScript initialColorMode={theme.config.initialColorMode} />
              <Navbar />
              {children}
              <Footer />
            </ChakraProvider>
        </body>
      </html>
  )
}
