import {
  Link,
  Button,
  Spacer,
  HStack,
  Circle,
  Divider,
  LinkOverlay,
  LinkBox,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react'

import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react'

const breadcrumbs = [
  { title: 'Home', link: { href: '#' } },
  { title: 'Stay', link: { href: '#' } },
  { title: 'New Zealand', link: { href: '#' } },
  { title: 'South Island', link: { href: '#' } },
]
const lastBreadcrumb = breadcrumbs?.pop()
const placeTitle = 'Spectacular views of Queenstown'
const placeDetails = {
  avatarIconSrc:
    'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
  rate: 4.8,
  reviewNumbers: 256,
  location: 'Queenstown, Otago, New Zealand',
  superHost: 'Superhost',
}

const homeBaseHref = { href: '/' }

const placePictures = {
  mainFigure:
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/storyimage_647_062215030547.jpg',
  subFigures: [
    {
      figureIndex: 'sub1',
      src: 'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    },
    {
      figureIndex: 'sub2',
      src: 'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    },
    {
      figureIndex: 'sub3',
      src: 'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    },
  ],
}
const images = [
  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/storyimage_647_062215030547.jpg',
  'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
  'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
  'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
]

function onUpload() {}
function onFavorite() {}
function onDelete() {}
const PlaceHeader = () => {
  return (
    <Box>
      <PlaceHeaderNavigations />
      <PlaceHeaderInformation />
      <Flex
        justify="center"
        mt={{ base: '32px', tablet: '64px', desktop: '64px' }}
      >
        <PlaceHeaderPictures />
      </Flex>
    </Box>
  )
}

function PlaceHeaderInformation() {
  return (
    <Flex wrap={{ base: 'wrap', tablet: 'nowrap', desktop: 'nowrap' }}>
      <Box>
        <Link {...homeBaseHref}>
          <Box
            mt="12.5px"
            mr="27px"
            display={{ base: 'block', tablet: 'none', desktop: 'none' }}
          >
            <Icon icon="dashicons:arrow-left-alt2"></Icon>
          </Box>
        </Link>
      </Box>
      <Box>
        <Text
          textStyle={{
            base: 'headline-4',
            tablet: 'headline-2',
            desktop: 'headline-2',
          }}
          w={{ base: '291px', tablet: '618px', desktop: '618px' }}
        >
          {placeTitle}
        </Text>
        <Flex
          mt={{ base: '10px', tablet: '16px', desktop: '16px' }}
          align="center"
        >
          <Circle
            _hover={{ cursor: 'pointer' }}
            overflow="hidden"
            size="25px"
            position="relative"
            mr="20px"
          >
            <Image layout="fill" src={placeDetails.avatarIconSrc} alt="icon" />
          </Circle>
          <Box color="secondary.3">
            <Icon icon="clarity:star-solid" />
          </Box>
          <Text mx="8px" textStyle="caption" color="neutrals.2">
            {placeDetails.rate}
          </Text>
          <Flex
            align="inherit"
            display={{ base: 'none', tablet: 'flex', desktop: 'flex' }}
          >
            <Text
              textStyle="caption"
              color="neutrals.4"
            >{`(${placeDetails.reviewNumbers} reviews)`}</Text>
            <Box ml="23px" mr="11px">
              <Icon icon="cil:flag-alt" />
            </Box>
            <Text textStyle="caption" color="neutrals.4">
              {placeDetails.location}
            </Text>
          </Flex>
          <Flex
            align="inherit"
            display={{ base: 'flex', tablet: 'none', desktop: 'none' }}
          >
            <Icon ml="27.5px" mr="15.5px" />
            <Text textStyle="caption" color="neutrals.4">
              {placeDetails.superHost}
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Spacer />
      <Divider
        my="32px"
        display={{ base: 'block', tablet: 'none', desktop: 'none' }}
        orientation="horizontal"
      />
      <HStack
        justify="center"
        w={{ base: '100%', tablet: 'auto', desktop: 'auto' }}
        align="baseline"
      >
        <Circle
          onClick={() => onUpload()}
          _hover={{ cursor: 'pointer', bg: 'neutrals.6' }}
          display={{ base: 'flex', tablet: 'none', desktop: 'flex' }}
          size="30px"
          borderColor="black"
          borderWidth="1px"
        >
          <Icon icon="feather:share"></Icon>
        </Circle>
        <Circle
          onClick={() => onFavorite()}
          _hover={{ cursor: 'pointer', bg: 'neutrals.6' }}
          display={{ base: 'flex', tablet: 'flex', desktop: 'flex' }}
          size="30px"
          borderColor="black"
          borderWidth="1px"
        >
          <Icon icon="clarity:heart-line" />
        </Circle>
        <Circle
          onClick={() => onDelete()}
          _hover={{ cursor: 'pointer', bg: 'neutrals.6' }}
          display={{ base: 'none', tablet: 'none', desktop: 'flex' }}
          size="30px"
          borderColor="black"
          borderWidth="1px"
        >
          <Icon icon="bi:x-lg" />
        </Circle>
      </HStack>
    </Flex>
  )
}

function PlaceHeaderNavigations() {
  return (
    <Flex
      justify="center"
      mt={{ base: '0', tablet: '28px', desktop: '28px' }}
      mb={{ base: '0', tablet: '52px', desktop: '52px' }}
    >
      <LinkBox>
        <LinkOverlay {...homeBaseHref}>
          <Button
            leftIcon={<Icon fontSize="10px" icon="dashicons:arrow-left-alt2" />}
            display={{ base: 'none', tablet: 'block', desktop: 'block' }}
            textStyle="button-2"
            py="10px"
            px="10px"
            colorScheme="gray"
            variant="outline"
          >
            Go Home
          </Button>
        </LinkOverlay>
      </LinkBox>
      <Spacer />
      <HStack
        display={{ base: 'none', tablet: 'flex', desktop: 'flex' }}
        spacing="17px"
      >
        {breadcrumbs.map((content, index) => (
          <HStack boxShadow="none" spacing="17.5px" key={index}>
            <Link
              {...content.link}
              _hover={{ cursor: 'pointer', color: 'neutrals.2' }}
              textStyle="button-2"
              color="neutrals.4"
              boxShadow="none !important"
            >
              {content.title}
            </Link>
            <Box color="neutrals.5">
              <Icon icon="dashicons:arrow-right-alt2" fontSize="9px" />
            </Box>
          </HStack>
        ))}
        ;
        <Link
          {...lastBreadcrumb.link}
          _hover={{ cursor: 'pointer', color: 'neutrals.2' }}
          textStyle="button-2"
          color="neutrals.5"
          boxShadow="none !important"
        >
          {lastBreadcrumb.title}
        </Link>
      </HStack>
    </Flex>
  )
}

function PlaceHeaderPictures() {
  return (
    <Box w="100%">
      <Flex justify="center">
        <Box
          w={{ tablet: 5 / 7, base: '100%' }}
          mb="8px"
          borderRadius="16px"
          overflow="hidden"
          mr="8px"
        >
          <Box
            position="relative"
            h={{ desktop: '784px', tablet: '540px', base: '476px' }}
            _hover={{ transform: 'scale(1.1)' }}
          >
            <Image
              src={placePictures.mainFigure}
              alt="Main Figure"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Box>
        <Flex
          display={{ desktop: 'flex', tablet: 'flex', base: 'none' }}
          direction="column"
          w={2 / 7}
        >
          {placePictures.subFigures.map((content, index) => (
            <Box mb="8px" key={index} borderRadius="16px" overflow="hidden">
              <Box
                position="relative"
                // w={{ desktop: '256px', tablet: '256px', base: '298px' }}

                h={{ desktop: '256px', tablet: '174.67px', base: '476px' }}
                objectFit="scale-down"
                _hover={{ transform: 'scale(1.1)' }}
              >
                <Image
                  src={content.src}
                  alt={`sub${index} figure`}
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default PlaceHeader
