import { ThemeProvider, CSSReset } from '@chakra-ui/react'

import '../styles/globals.css'
import theme from "../components/theme";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
