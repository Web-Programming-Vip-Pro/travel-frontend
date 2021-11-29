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
} from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { addReview, useCanUserAddReview } from '@/services/review'
import { useSession } from 'next-auth/react'
import * as dayjs from 'dayjs'
const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
})
import DisplayComments from '@/components/shared/DisplayComments'

const PlaceReviews = ({ placeReviewsProps }) => {
  return (
    <Flex direction={{ base: 'column-reverse', tablet: 'row', desktop: 'row' }}>
      <Flex justify="center" mr={{ base: '0', tablet: '48px' }}>
        <AgencyInformation
          agencyInformation={placeReviewsProps.agencyInformation}
        />
      </Flex>
      <Box w="100%" py="30px">
        <Reviews placeId={placeReviewsProps.placeId} />
      </Box>
    </Flex>
  )
}

function AgencyInformation({ agencyInformation }) {
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
          <Flex justify="center">
            <Flex align="center" mr="22px">
              <Circle
                overflow="hidden"
                size="64px"
                position="relative"
                _hover={{ cursor: 'pointer' }}
                onClick={() => router.push(`/agency/${agencyInformation.id}`)}
              >
                <Image
                  unoptimized={true}
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
              {'Member since ' +
                dayjs(agencyInformation.dateRegistered).format('MMM DD, YYYY')}
            </Text>
          </Flex>
          <Link href="/contact" passHref>
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

function Reviews({ placeId }) {
  const { data, status } = useSession()
  const user = data && data.user
  const userId = user && user.id
  let [textComment, setComment] = useState('')
  let [ratingCount, setRatingCount] = useState(0)
  const [lockReview, setLockReview] = useState(false)
  const { canUserAddReview } = useCanUserAddReview(placeId, userId)
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setComment(inputValue)
  }
  function changeRating(newRating) {
    setRatingCount(newRating)
  }

  async function onSubmitReview() {
    const response = await addReview(placeId, userId, ratingCount, textComment)
    if (response.success) {
      setComment('')
      setRatingCount(0)
      setLockReview(true)
    }
  }
  return (
    <Flex direction="column">
      {status == 'authenticated' && canUserAddReview && !lockReview ? (
        <FormControl id="make-comment">
          <Text textStyle="body-1-bold">Add a review</Text>
          <Flex align="center" mt="16px">
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
          <InputGroup mt="16px" mb="40px">
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
                rightIcon={
                  <Icon fontSize="10px" icon="akar-icons:arrow-right" />
                }
                textStyle="button-2"
                py="10px"
                px="10px"
                onClick={onSubmitReview}
              >
                Post it!
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      ) : (
        <Box></Box>
      )}
      <DisplayComments placeId={placeId} />
    </Flex>
  )
}
export default PlaceReviews
