import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/theme/index'
import DefaultLayout from '@/layouts/DefaultLayout'
import { useUser } from '@/services/auth'
import { useUserStore } from '@/store/user'

function MyApp({ Component, pageProps }) {
  const { user, isLoading, isError } = useUser()
  if (!isLoading && !isError) {
    useUserStore.getState().setUser(user)
  }
  return (
    <ChakraProvider theme={theme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}

export default MyApp
