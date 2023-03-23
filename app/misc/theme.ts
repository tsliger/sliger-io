import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendBaseTheme({
  config,
  components: {
    Button,
  },
})

export default theme;