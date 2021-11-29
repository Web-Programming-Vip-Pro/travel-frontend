import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme/index'
import DefaultLayout from '@/layouts/DefaultLayout'
import { SessionProvider } from 'next-auth/react'
import SEO from '@/components/shared/SEO'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SEO />
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <ChakraProvider theme={theme}>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ChakraProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
