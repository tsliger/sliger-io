import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/Navbar'))
const Footer = dynamic(() => import('../components/Footer'))
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../misc/theme'
import { ColorModeScript } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  
  return <>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
    <Analytics />
  </>
}
