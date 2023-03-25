import { extendTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
     main: "#ff5500",
     100: "#1e40af",
   }
 }
})

export default theme;