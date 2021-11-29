import React from 'react'
import { Flex, Box, Stack } from '@chakra-ui/react'
import AgencyBackground from '@/components/agencyFeature/AgencyBackground'
import AgencyInforCard from '@/components/agencyFeature/AgencyInforCard'
import AgencyDescription from '@/components/agencyFeature/AgencyDescription'
import AgencyListing from '@/components/agencyFeature/AgencyListing'
import SEO from '@/components/shared/SEO'

export const getServerSideProps = async ({ params }) => {
  const { id } = params
  return {
    props: {
      id,
    },
  }
}
const Agency = ({ id }) => {
  return (
    <Box>
      <Box px={{ tablet: '40px', desktop: '80px' }}>
        <AgencyBackground />
      </Box>
      <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
        <Flex direction={{ base: 'column', desktop: 'row' }}>
          <Box
            mr={{ base: '0px', desktop: '80px' }}
            mt={{ base: '0', tablet: '30px', desktop: '20px' }}
            w={{ base: 'fit-content', tablet: '100%', desktop: 'fit-content' }}
          >
            <AgencyInforCard />
          </Box>
          <Stack
            spacing="64px"
            mt={{ base: '32px', tablet: '48px', desktop: '80px' }}
          >
            <Box>
              <AgencyDescription />
            </Box>
            <Box>
              <AgencyListing />
            </Box>
            {/* <Box>
              <DisplayComments commentsProperties={commentsProperties} />
            </Box> */}
          </Stack>
        </Flex>
      </Box>
    </Box>
  )
}

export default Agency
