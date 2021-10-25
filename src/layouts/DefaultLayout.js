import { Box } from '@chakra-ui/react'
import Navbar from '@/components/shared/Navbar'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
    </>
  )
}

export default DefaultLayout
