import React from 'react'
import {
  HStack,
  Circle,
  Divider,
  Text,
  Flex,
  Box,
  LinkBox,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const agencyInformation = {
  name: 'Zoe towne',
  avatarSrc:
    'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
  rate: 4.8,
  reviewNumbers: 256,
  shortDescription:
    "Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you will love relaxing in this newly built",
  linkWebsite: { urlName: 'https://abc.net', directLink: { href: '#' } },
  socialNetwork: [
    { iconName: 'iconoir:twitter', directLink: { href: '#' } },
    { iconName: 'ant-design:instagram-outlined', directLink: { href: '#' } },
    { iconName: 'ph:facebook-logo-light', directLink: { href: '#' } },
  ],
  dateRegistered: 'Member since Mar 15, 2017',
}

const reportHostLink = { href: '#' }

const AgencyInforCard = () => {
  return (
    <Box
      p="32px"
      w={{ base: '100%', tablet: '100%', desktop: '343px' }}
      borderRadius="24px"
      border="1px solid #E6E8EC"
      boxShadow="0px 64px 64px -48px rgba(15, 15, 15, 0.08)"
      h="fit-content"
    >
      <Flex
        direction={{ base: 'column', tablet: 'row', desktop: 'column' }}
        align="center"
      >
        <Flex display={{ base: 'none', tablet: 'flex' }} align="center">
          <Circle
            overflow="hidden"
            size="160px"
            position="relative"
            _hover={{ cursor: 'pointer' }}
          >
            <Image
              layout="fill"
              src={agencyInformation.avatarSrc}
              alt="avatar"
              objectFit="cover"
            />
          </Circle>
        </Flex>
        <Flex
          ml={{ base: '0px', tablet: '80px', desktop: '0px' }}
          direction="column"
        >
          <Flex mt="16px" justify="center">
            <Flex display={{ base: 'block', tablet: 'none' }} mr="22px">
              <Circle
                overflow="hidden"
                size="64px"
                position="relative"
                _hover={{ cursor: 'pointer' }}
              >
                <Image
                  layout="fill"
                  src={agencyInformation.avatarSrc}
                  alt="avatar"
                />
              </Circle>
            </Flex>
            <Stack
              align={{ base: 'center', tablet: 'start', desktop: 'center' }}
              w={{ base: 'auto', tablet: 'max-content', desktop: 'auto' }}
            >
              <Text _hover={{ cursor: 'pointer' }} textStyle="headline-4">
                {agencyInformation.name}
              </Text>
              <HStack spacing="8px">
                <Box color="secondary.3">
                  <Icon icon="clarity:star-solid" />
                </Box>
                <Text textStyle="caption-bold">{agencyInformation.rate}</Text>
                <Text
                  textStyle="caption"
                  color="neutrals.4"
                >{`(${agencyInformation.reviewNumbers} reviews)`}</Text>
              </HStack>
            </Stack>
          </Flex>
          <Text
            mt="32px"
            display={{ base: 'block', tablet: 'none' }}
            textStyle="caption"
            color="neutrals.4"
            align="center"
          >
            {agencyInformation.shortDescription}
          </Text>
          <LinkBox my={{ base: '32px', tablet: '16px', desktop: '32px' }}>
            <LinkOverlay
              w="max-content"
              _hover={{ cursor: 'pointer' }}
              {...agencyInformation.linkWebsite.directLink}
            >
              <Flex
                justify={{ base: 'center', tablet: 'start', desktop: 'center' }}
                align="center"
              >
                <Box color="neutrals.4" mr="10px">
                  <Icon icon="mdi:web" fontSize="13.33px" />
                </Box>
                <Text textStyle="button-2">
                  {agencyInformation.linkWebsite.urlName}
                </Text>
              </Flex>
            </LinkOverlay>
          </LinkBox>
        </Flex>
        <Flex w="100%" justify={{ base: 'center', desktop: 'baseline' }}>
          <Stack
            w="100%"
            spacing={{ base: '32px', tablet: '16px', desktop: '32px' }}
          >
            <Flex justify="center" align="center">
              <HStack spacing="27.33px">
                {agencyInformation.socialNetwork.map((content, index) => (
                  <LinkBox key={index} _hover={{ cursor: 'pointer' }}>
                    <LinkOverlay {...content.directLink}>
                      <Box color="neutrals.4">
                        <Icon icon={content.iconName} fontSize="16.67px" />
                      </Box>
                    </LinkOverlay>
                  </LinkBox>
                ))}
              </HStack>
            </Flex>
            <Flex justify="center">
              <Divider
                px={{ base: '56px', desktop: '72px' }}
                display={{ base: 'block', tablet: 'none', desktop: 'block' }}
              />
            </Flex>
            <Flex justify="center">
              <Text textStyle="caption-2" color="neutrals.4">
                {agencyInformation.dateRegistered}
              </Text>
            </Flex>
            <Link {...reportHostLink}>
              <Flex
                _hover={{ cursor: 'pointer' }}
                justify="center"
                align="center"
              >
                <Box mr="10px" color="neutrals.4">
                  <Icon icon="cil:flag-alt" />
                </Box>
                <Text textStyle="caption-2" color="neutrals.4">
                  Report this host
                </Text>
              </Flex>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default AgencyInforCard
