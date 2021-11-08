import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import AgencyBackground from '@/components/agencyFeature/AgencyBackground'
import AgencyInforCard from '@/components/agencyFeature/AgencyInforCard'
import AgencyDescription from '@/components/agencyFeature/AgencyDescription'

const Agency = () => {
  return (
    <Box>
      <Box px={{ tablet: '40px', desktop: '80px' }}>
        <AgencyBackground />
      </Box>
      <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
        <Flex direction={{ base: 'column', desktop: 'row' }}>
          <Box
            mr={{ base: '0px', desktop: '80px' }}
            w={{ base: 'fit-content', tablet: '100%', desktop: 'fit-content' }}
          >
            <AgencyInforCard />
          </Box>
          <Box>
            <AgencyDescription />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Agency
