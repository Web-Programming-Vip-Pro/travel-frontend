import React from 'react'
import { Flex, Box, Stack } from '@chakra-ui/react'
import AgencyBackground from '@/components/agencyFeature/AgencyBackground'
import AgencyInforCard from '@/components/agencyFeature/AgencyInforCard'
import AgencyDescription from '@/components/agencyFeature/AgencyDescription'
import AgencyListing from '@/components/agencyFeature/AgencyListing'
import SEO from '@/components/shared/SEO'
import { getUser } from '@/services/user'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const getServerSideProps = async ({ params }) => {
  const { id } = params
  const ROLE = 1
  const response = await getUser(id, ROLE)
  if (!response.success) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: {
      agency: response.message,
    },
  }
}
const Agency = ({ agency }) => {
  const agencyInformation = {
    name: agency.name,
    avatarSrc: agency.avatar,
    shortDescription: agency.bio,
    socialNetwork: [
      {
        iconName: 'ph:facebook-logo-light',
        directLink: { href: agency?.facebook || '#' },
      },
      {
        iconName: 'ant-design:instagram-outlined',
        directLink: { href: agency?.instagram || '#' },
      },
    ],
    dateRegistered: dayjs(agency.created_at).fromNow(),
  }
  return (
    <>
      <SEO title={agency.name} />
      <Box>
        <Box px={{ tablet: '40px', desktop: '80px' }}>
          <AgencyBackground backgroundSrc={agency.image_cover} />
        </Box>
        <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
          <Flex direction={{ base: 'column', desktop: 'row' }}>
            <Box
              mr={{ base: '0px', desktop: '80px' }}
              mt={{ base: '0', tablet: '30px', desktop: '20px' }}
              w={{
                base: 'fit-content',
                tablet: '100%',
                desktop: 'fit-content',
              }}
            >
              <AgencyInforCard agencyInformation={agencyInformation} />
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
    </>
  )
}

export default Agency
