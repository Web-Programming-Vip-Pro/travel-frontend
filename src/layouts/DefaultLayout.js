import { Box } from '@chakra-ui/react'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar logoImageSrc="https://ui8-fleet-html.herokuapp.com/img/logo-dark.svg" />
      <Box>{children}</Box>
      <Footer
        logoImageSrc="https://ui8-fleet-html.herokuapp.com/img/logo-dark.svg"
        copyright="Copyright 2021 @ Fleet"
      />
    </>
  )
}

export default DefaultLayout
