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
} from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
// import StarRatings from 'react-star-ratings'
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
})
import DisplayComments from '@/components/shared/DisplayComments'

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
const placeTitle = 'Spectacular views of Queenstown'

const commentsProperties = {
  totalCount: 3,
  sortOptions: ['Newest', 'Most Rated', 'Least Rated'],
  comments: [
    {
      avatarSrc:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      name: 'Myrtie Runolfsson',
      commentDetails:
        'We had the most spectacular view. Unfortunately it was very hot in the room from 2-830 pm due to no air conditioning and no shade.',
      timeStamp: 'about 1 hour ago',
      rate: 5,
    },
    {
      avatarSrc:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      name: 'Osbaldo Beahan',
      commentDetails:
        'Stunning views of Queenstown. Very peaceful. Love it so much. Definitely gonna come back and visit.',
      timeStamp: 'about 1 hour ago',
      rate: 4,
    },
    {
      avatarSrc:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      name: 'Tobin Hackett',
      commentDetails: 'Best place I stayed in all of NZ. 🙌 🎉 😎',
      timeStamp: '1 day ago',
      rate: 1,
    },
  ],
}
const PlaceReviews = () => {
  return (
    <Flex direction={{ base: 'column-reverse', tablet: 'row', desktop: 'row' }}>
      <Flex justify="center" mr={{ base: '0', tablet: '48px' }}>
        <AgencyInformation />
      </Flex>
      <Box w="100%" py="30px">
        <Reviews />
      </Box>
    </Flex>
  )
}

function AgencyInformation() {
  return (
    <Box
      p="32px"
      w={{ base: '100%', tablet: '343px', desktop: '343px' }}
      borderRadius="24px"
      border="1px solid #E6E8EC"
      boxShadow="0px 64px 64px -48px rgba(15, 15, 15, 0.08)"
      h="fit-content"
    >
      <Flex direction="column" align="center">
        <Stack spacing="32px">
          <Flex>
            <Flex align="center" mr="22px">
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
            <Flex direction="column">
              <Text _hover={{ cursor: 'pointer' }} textStyle="headline-4">
                {agencyInformation.name}
              </Text>
              <HStack mt="10px" spacing="8px">
                <Box color="secondary.3">
                  <Icon icon="clarity:star-solid" />
                </Box>
                <Text textStyle="caption-bold">{agencyInformation.rate}</Text>
                <Text
                  textStyle="caption"
                  color="neutrals.4"
                >{`(${agencyInformation.reviewNumbers} reviews)`}</Text>
              </HStack>
            </Flex>
          </Flex>
          <Text textStyle="caption" color="neutrals.4" align="center">
            {agencyInformation.shortDescription}
          </Text>
          <LinkBox>
            <LinkOverlay
              w="max-content"
              _hover={{ cursor: 'pointer' }}
              {...agencyInformation.linkWebsite.directLink}
            >
              <Flex justify="center" align="center">
                <Box color="neutrals.4" mr="10px">
                  <Icon icon="mdi:web" fontSize="13.33px" />
                </Box>
                <Text textStyle="button-2">
                  {agencyInformation.linkWebsite.urlName}
                </Text>
              </Flex>
            </LinkOverlay>
          </LinkBox>
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
          <Flex justify="center">
            <Divider px={{ base: '56px', tablet: '72px' }} />
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
    </Box>
  )
}

function Reviews() {
  let [textComment, setComment] = React.useState('')
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
        <Text textStyle="body-1-bold">Add a Reivew</Text>
        <Flex direction={{ base: 'column', tablet: 'column', desktop: 'row' }}>
          <Flex>
            <Text textStyle="caption" color="neutrals.4" mr="3px">
              Be the first to review
            </Text>
            <Text display="inline-block" textStyle="caption-bold">
              {placeTitle}
            </Text>
          </Flex>
          <Spacer />
          <StarRatings
            rating={ratingCount}
            starRatedColor="#FFD166"
            changeRating={changeRating}
            numberOfStars={5}
            name="rating"
            starDimension="20px"
            starSpacing="7px"
            starHoverColor="#FFD166"
          />
        </Flex>
        <InputGroup my="40px">
          <Input
            type="text"
            value={textComment}
            onChange={handleInputChange}
            textStyle="body-2"
            placeholder="Share your thoughts"
            h="60px"
            pr="110px"
          />

          <InputRightElement w="max-content" h="100%" pr="10px">
            <Button
              rightIcon={<Icon fontSize="10px" icon="akar-icons:arrow-right" />}
              textStyle="button-2"
              py="10px"
              px="10px"
            >
              Post it!
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <DisplayComments commentsProperties={commentsProperties} />
    </Flex>
  )
}
export default PlaceReviews
