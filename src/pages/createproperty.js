import React from 'react'
import { Flex, Box, Stack } from '@chakra-ui/react'
import CreatePropertyForm from '@/components/createPropertyFeature/createPropertyForm'

const ListYourProperty = () => {
  return (
    <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
      <Box>
        <CreatePropertyForm />
      </Box>
    </Box>
  )
}

export default ListYourProperty
