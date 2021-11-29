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
      </Stack>
    </Box>
  )
}

export default AgencyDescription
