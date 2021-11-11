import React from 'react'
import { HStack, Text, Flex, Box, Stack } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const agencyDescriptionProps = {
  title: 'About Zoe Towne',
  shortDescription: `Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you will love relaxing in this newly built`,
  localeInfor: {
    livingLocation: 'Auckland, New Zealand',
    languages: 'English, Nederland',
    date: { href: '#' },
  },
}
const AgencyDescription = () => {
  return (
    <Box>
      <Stack spacing="24px">
        <Text textStyle="body-1-bold">{agencyDescriptionProps?.title}</Text>
        <Text textStyle="caption" color="neutrals.4">
          {agencyDescriptionProps?.shortDescription}
        </Text>
        <Stack>
          <Flex>
            <HStack w="140px" spacing="17px" justify="start" align="center">
              <Icon icon="carbon:home" fontSize="17px" />
              <Text textStyle="caption" color="neutrals.4">
                Lives in
              </Text>
            </HStack>
            <Text textStyle="caption-bold">
              {agencyDescriptionProps?.localeInfor?.livingLocation}
            </Text>
          </Flex>
          <Flex display={{ base: 'flex', desktop: 'none' }}>
            <HStack w="140px" spacing="17px" justify="start" align="center">
              <Icon icon="eos-icons:route" fontSize="17px" />
              <Text textStyle="caption" color="neutrals.4">
                Date:
              </Text>
            </HStack>
            <Link {...agencyDescriptionProps?.localeInfor?.date}>
              <Text color="primary.1" textStyle="caption-bold">
                Get direction
              </Text>
            </Link>
          </Flex>
          <Flex>
            <HStack w="140px" spacing="17px" justify="start" align="center">
              <Icon icon="bx:bx-comment-detail" fontSize="17px" />
              <Text textStyle="caption" color="neutrals.4">
                Speak
              </Text>
            </HStack>
            <Text textStyle="caption-bold">
              {agencyDescriptionProps?.localeInfor?.languages}
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  )
}

export default AgencyDescription
