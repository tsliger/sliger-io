import { Html, Head, Main, NextScript } from 'next/document'
import { useColorMode } from '@chakra-ui/react'

export default function Document() {
  const { colorMode } = useColorMode();

  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href={colorMode === 'light' ? "/favicon.ico" : "/favicon_dark.ico"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
