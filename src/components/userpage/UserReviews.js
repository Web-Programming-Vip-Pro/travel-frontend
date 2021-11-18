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
  InputRightElement,
  Input,
  Select,
  Avatar,
  Square,
} from '@chakra-ui/react'
import { useUserStore } from '@/store/user'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
})

const agencyInformation = {
  name: 'Kohaku Tora',
  avatarSrc: '/assets/userpage/Bg agencies.png',
  rate: 4.8,
  reviewNumbers: 256,
  socialNetwork: [
    { iconName: 'iconoir:twitter', directLink: { href: '#' } },
    { iconName: 'ant-design:instagram-outlined', directLink: { href: '#' } },
    { iconName: 'ph:facebook-logo-light', directLink: { href: '#' } },
  ],
  dateRegistered: 'Member since Mar 15, 2017',
}
const reportHostLink = { href: '#' }
const placeTitle = 'Spectacular views of Queenstown'

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
  const user = useUserStore((state) => state.user)
  const [avatar, setAvatar] = useState(() => {
    return {
      preview: `${agencyInformation.avatarSrc}`,
    }
  })
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
              <Avatar
                src={avatar.preview}
                name={agencyInformation.name}
                boxSize="160px"
              />
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
            <Flex direction="column">
              <Text _hover={{ cursor: 'pointer' }} textStyle="headline-4">
                {agencyInformation.name}
              </Text>
            </Flex>
          </Flex>
          <Flex justify="center" align="center">
            <HStack spacing="27.33px">
              {agencyInformation.socialNetwork.map((content, index) => (
                <LinkBox key={index} _hover={{ cursor: 'pointer' }}>
                  <LinkOverlay {...content.directLink}>
                    <Box color="neutrals.4" mr="10px">
                      <Icon icon={content.iconName} fontSize="16.67px" />
                    </Box>
                  </LinkOverlay>
                </LinkBox>
              ))}
            </HStack>
          </Flex>
          <Divider border="1px solid neutrals.6" />
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
    </Box>
  )
}

function Reviews() {
  const reviewType = ['Review about you']
  const [typeReview, setTypeReview] = useState(reviewType[0])
  let [textComment, setComment] = React.useState(
    'Described by Queenstown House & Garden magazine as having one of the best views weve ever seen you will love relaxing in this newly built'
  )
  let [ratingCount, setRatingCount] = React.useState(0)
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setComment(inputValue)
  }
  function changeRating(newRating) {
    setRatingCount(newRating)
  }
  function onChangeSortType(content) {}
  return (
    <Flex direction="column">
      <FormControl id="make-comment">
        <Flex
          direction={{ base: 'column-reverse', tablet: 'row' }}
          align="center"
        >
          <Text textStyle="body-1-bold">
            Hi, I&#39;m {agencyInformation.name}
          </Text>
          <Spacer />
          <Button mb={{ mobile: '24px', tablet: '0' }} variant="light">
            Edit your profile
          </Button>
        </Flex>
        <InputGroup my="40px">
          <Text textStyle="caption" color="neutrals.4">
            {textComment}
          </Text>
          {/* <Input
            type="text"
            value={textComment}
            onChange={handleInputChange}
            textStyle="body-2"
            placeholder="Share your thoughts"
            h="60px"
            pr="110px"
            wordBreak="break-all"
          /> */}
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
          {reviewType.map((item) => (
            <Button
              key={item}
              h="28px"
              bg={item === typeReview ? 'neutrals.3' : ''}
              variant={item !== typeReview ? 'ghost' : 'none'}
              onClick={() => setTypeReview(item)}
            >
              <Text
                textStyle="button-2"
                color={item === typeReview ? 'neutrals.8' : 'neutrals.4'}
              >
                {item}
              </Text>
            </Button>
          ))}
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
