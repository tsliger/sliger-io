import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../misc/theme'
import { ColorModeScript } from '@chakra-ui/react'
import { Sono } from "next/font/google";
const Navbar = dynamic(() => import('../components/Navbar'))
const Footer = dynamic(() => import('../components/Footer'))
const PageTransition = dynamic(() => import('../components/PageTransition'))
import { GoogleAnalytics } from "nextjs-google-analytics";

export const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
});

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Navbar />
      <PageTransition>
        <div className="min-h-[800px] screen-h">
          <Component {...pageProps} />
        </div>
      </PageTransition>
      <Footer />
      <GoogleAnalytics trackPageViews />
    </ChakraProvider>
  </>
}
