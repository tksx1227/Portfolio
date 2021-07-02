import { ChakraProvider } from '@chakra-ui/react'

import '../styles/globals.css'
import theme from "../components/theme";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
