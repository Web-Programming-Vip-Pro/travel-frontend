import {
  Link,
  Button,
  Spacer,
  HStack,
  Circle,
  Divider,
  Text,
  Flex,
  Box,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import {
  toggleToWishlist,
  usePlaceIsInUserWishlist,
} from '@/services/places/wishlist'
import { useSession } from 'next-auth/react'

const homeBaseHref = { href: '/' }

function WishlistButton({ placeId }) {
  const { isPlaceInWishlist, error, mutate } = usePlaceIsInUserWishlist(placeId)
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
  async function handleToggle() {
    if (isLoading) return
    setIsLoading(true)
    const response = await toggleToWishlist(placeId)
    toast({
      position: 'top-right',
      title: response.message,
      status: 'success',
      isClosable: true,
    })
    setIsLoading(false)
    mutate()
  }
  return (
    <HStack
      justify="center"
      w={{ base: '100%', tablet: 'auto', desktop: 'auto' }}
      align="baseline"
    >
      <Circle
        onClick={handleToggle}
        _hover={{ cursor: 'pointer', bg: 'neutrals.6' }}
        display={{ base: 'flex', tablet: 'flex', desktop: 'flex' }}
        size="30px"
        borderColor={isPlaceInWishlist ? 'red' : 'black'}
        borderWidth="1px"
        opacity={isLoading ? 0.5 : 1}
      >
        <Icon
          icon="clarity:heart-line"
          color={isPlaceInWishlist ? 'red' : 'black'}
        />
      </Circle>
    </HStack>
  )
}
function PlaceHeaderInformation({ placeId, placeTitle, placeDetails }) {
  const { data } = useSession()
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
            <Image
              unoptimized={true}
              layout="fill"
              src={placeDetails.avatarIconSrc}
              alt="icon"
            />
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
      {data && <WishlistButton placeId={placeId} />}
    </Flex>
  )
}

function PlaceHeaderNavigations() {
  const router = useRouter()
  return (
    <Flex
      justify="center"
      mt={{ base: '0', tablet: '28px', desktop: '28px' }}
      mb={{ base: '0', tablet: '52px', desktop: '52px' }}
    >
      <Button
        leftIcon={<Icon fontSize="10px" icon="dashicons:arrow-left-alt2" />}
        display={{ base: 'none', tablet: 'block', desktop: 'block' }}
        textStyle="button-2"
        py="10px"
        px="10px"
        colorScheme="gray"
        variant="outline"
        onClick={() => router.push('/')}
      >
        Go Home
      </Button>
      <Spacer />
      <HStack
        display={{ base: 'none', tablet: 'flex', desktop: 'flex' }}
        spacing="17px"
      ></HStack>
    </Flex>
  )
}

function PlaceHeaderPictures({ placePictures }) {
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
              unoptimized={true}
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
                h={{ desktop: '256px', tablet: '174.67px', base: '476px' }}
                objectFit="scale-down"
                _hover={{ transform: 'scale(1.1)' }}
              >
                <Image
                  unoptimized={true}
                  src={content}
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

const PlaceHeader = ({ placeHeaderProps }) => {
  const placeId = placeHeaderProps.id
  const placeTitle = placeHeaderProps.placeTitle
  const placeDetails = placeHeaderProps.placeDetails
  const placePictures = placeHeaderProps.placePictures
  return (
    <Box>
      <PlaceHeaderNavigations />
      <PlaceHeaderInformation
        placeId={placeId}
        placeTitle={placeTitle}
        placeDetails={placeDetails}
      />
      <Flex
        justify="center"
        mt={{ base: '32px', tablet: '64px', desktop: '64px' }}
      >
        <PlaceHeaderPictures placePictures={placePictures} />
      </Flex>
    </Box>
  )
}

export default PlaceHeader
