import {
  Button,
  Spacer,
  HStack,
  Circle,
  Divider,
  Text,
  Flex,
  Box,
  LinkBox,
  LinkOverlay,
  Stack,
  FormControl,
  InputGroup,
  Avatar,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
})
import { useSession } from 'next-auth/react'
import dayjs from 'dayjs'

const commentsProperties = {
  totalCount: 3,
  sortOptions: ['Newest', 'Most Rated', 'Least Rated'],
  comments: [
    {
      avatarSrc: '/assets/userpage/Bg client1.png',
      name: 'Tobin Hackett',
      commentDetails:
        'I enjoyed my communication with them and wish them only the best!',
      timeStamp: '1 day ago',
      rate: 5,
    },
    {
      avatarSrc: '/assets/userpage/Bg client2.png',
      name: 'Myrtie Runolfsoon',
      commentDetails:
        'Kohaku and her husband were great guests. I enjoyed my communication with them and wish them only the best!',
      timeStamp: 'about 1 hour ago',
      rate: 4,
    },
  ],
}
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
  const handleImageUser = () => {
    var linkURL = prompt('Please copy the image URL and fill in here ')
  }
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
          <Flex direction="column">
            <Flex direction="column" align="center">
              <Avatar src={user.avatar} name={user.name} boxSize="160px" />
              <Stack
                direction="row"
                justify="center"
                align="center"
                color="neutrals.4"
                textStyle="caption-2-bold"
              >
                <Icon icon="line-md:pencil" />
                <label
                  style={{
                    display: 'block',
                    padding: '10px 0',
                  }}
                  htmlFor="image_user"
                >
                  Update avatar
                </label>
                <input
                  pos="absolute"
                  id="image_user"
                  name="image_user"
                  hidden
                  onClick={handleImageUser}
                />
              </Stack>
            </Flex>
            <Flex direction="column" align="center">
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
      <Flex
        direction={{ mobile: 'column', tablet: 'row' }}
        align={{ tablet: 'center' }}
        pt={{ mobile: '40px', tablet: '108px', desktop: '64px' }}
      >
        <Text textStyle="body-1-bold">{`${commentsProperties.totalCount} reviews`}</Text>
        <Spacer />
        <HStack justify="center">
          <Button h="28px" bg="neutrals.3">
            <Text textStyle="button-2" color="neutrals.8">
              Reviews by you
            </Text>
          </Button>
        </HStack>
      </Flex>
      <Box my="40px">
        <DislayComments />
      </Box>
    </Flex>
  )
}
function DislayComments() {
  return (
    <Box>
      {commentsProperties.comments.map((content, index) => (
        <Box w="100%" key={index}>
          <Flex w="100%">
            <Circle
              overflow="hidden"
              size="48px"
              position="relative"
              mr="20px"
              _hover={{ cursor: 'pointer' }}
            >
              <Image layout="fill" src={content.avatarSrc} alt="avatar" />
            </Circle>
            <Box w="100%">
              <Flex>
                <Text
                  _hover={{ cursor: 'pointer' }}
                  textStyle="caption-bold"
                  color="neutrals.1"
                >
                  {content.name}
                </Text>
                <Spacer />
                <StarRatings
                  rating={content.rate}
                  starRatedColor="#FFD166"
                  numberOfStars={5}
                  name="rating"
                  starDimension="13px"
                  starSpacing="5px"
                />
              </Flex>
              <Text mt="4px" mb="8px" textStyle="caption" color="neutrals.3">
                {content.commentDetails}
              </Text>
              <HStack spacing="16px">
                <Text textStyle="caption-2" color="neutrals.4">
                  {content.timeStamp}
                </Text>
              </HStack>
            </Box>
          </Flex>
          <Divider mt="27px" mb="32px" />
        </Box>
      ))}
    </Box>
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
