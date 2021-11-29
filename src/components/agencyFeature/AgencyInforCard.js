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
  Avatar,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const AgencyInforCard = ({ agencyInformation }) => {
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
            <Avatar
              src={agencyInformation.avatarSrc}
              alt="avatar"
              name={agencyInformation.name}
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
                <Avatar
                  src={agencyInformation.avatarSrc}
                  alt="avatar"
                  name={agencyInformation.name}
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
            <Flex
              _hover={{ cursor: 'pointer' }}
              justify="center"
              align="center"
            >
              <Box mr="10px" color="neutrals.4">
                <Icon icon="cil:flag-alt" />
              </Box>
              <Link href="/contact" passHref>
                <Text textStyle="caption-2" color="neutrals.4">
                  Report this host
                </Text>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}

export default AgencyInforCard
