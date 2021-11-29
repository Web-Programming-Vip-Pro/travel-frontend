import {
  Button,
  Spacer,
  HStack,
  Divider,
  Text,
  Flex,
  Box,
  Stack,
  FormControl,
  InputGroup,
  Avatar,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useSession } from 'next-auth/react'
import dayjs from 'dayjs'

function AgencyInformation() {
  const { data } = useSession()
  const user = data.user
  const socials = user.social
    ? Object.keys(user.social).map((key) => {
        if (key === 'facebook')
          return {
            icon: 'ph:facebook-logo-light',
            link: user.social[key],
          }
        if (key === 'instagram')
          return {
            icon: 'ant-design:instagram-outlined',
            link: user.social[key],
          }
      })
    : []
  return (
    <Box
      p="32px"
      w={{ base: '100%', tablet: '343px', desktop: '343px' }}
      borderRadius="24px"
      border="1px solid #E6E8EC"
      h="fit-content"
      position="relative"
      top={{ tablet: '-10px' }}
      background="neutrals.8"
      boxShadow=" rgba(100, 100, 111,0.2) 0px 7px 29px 0px "
    >
      <Flex direction="column" align="center">
        <Stack spacing="32px">
          <Flex direction="column" justify="center" align="center">
            <Flex direction="column" align="center">
              <Avatar src={user.avatar} name={user.name} boxSize="160px" />
            </Flex>
            <Flex direction="column" align="center" pt="20px">
              <Text _hover={{ cursor: 'pointer' }} textStyle="headline-4">
                {user.name}
              </Text>
            </Flex>
          </Flex>
          <Flex justify="center" align="center">
            <HStack spacing="27.33px">
              {socials.map((social, index) => (
                <Box key={index} color="neutrals.4" mr="10px">
                  <a href={social.link} target="_blank" rel="noreferrer">
                    <Icon icon={social.icon} fontSize="16.67px" />
                  </a>
                </Box>
              ))}
            </HStack>
          </Flex>
          <Divider border="1px solid neutrals.6" />
          <Flex justify="center">
            <Text textStyle="caption-2" color="neutrals.4">
              {`Member since ${dayjs(user.created_at).format('MMMM D, YYYY')}`}
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  )
}

function Reviews() {
  const { data } = useSession()
  const user = data.user
  return (
    <Flex direction="column">
      <FormControl id="make-comment">
        <Flex
          direction={{ base: 'column-reverse', tablet: 'row' }}
          align="center"
        >
          <Text textStyle="body-1-bold">Hi, I&#39;m {user.name}</Text>
          <Spacer />
          <Button mb={{ mobile: '24px', tablet: '0' }} variant="light">
            <Link href="/user/settings">Edit your profile</Link>
          </Button>
        </Flex>
        <InputGroup my="40px">
          <Text textStyle="caption" color="neutrals.4">
            {user.bio}
          </Text>
        </InputGroup>
      </FormControl>
    </Flex>
  )
}
const UserReviews = () => {
  return (
    <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
      <Flex direction={{ base: 'column', tablet: 'row', desktop: 'row' }}>
        <Flex justify="center" mr={{ base: '0', tablet: '48px' }}>
          <AgencyInformation />
        </Flex>
        <Box w="100%" py="30px">
          <Reviews />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserReviews
