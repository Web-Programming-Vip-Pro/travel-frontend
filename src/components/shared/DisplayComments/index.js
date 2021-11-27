import {
  Spacer,
  HStack,
  Circle,
  Divider,
  Text,
  Flex,
  Box,
  Select,
  Button,
  Stack,
  Avatar,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import dynamic from 'next/dynamic'
import { useReviewsInPlace } from '@/services/review'
import { useState } from 'react'
import * as dayjs from 'dayjs'
const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
})

const DisplayComments = ({ placeId }) => {
  const sortOptions = ['Recently', 'Most Rated', 'Least Rated']
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(3)
  const [order, setOrder] = useState('recent')
  const { reviews, isLoading, error } = useReviewsInPlace(
    placeId,
    page,
    limit,
    order
  )
  const handleOrder = (item) => {
    const option = item.target.value
    let order
    switch (option) {
      case 'Recently':
        order = 'recent'
        break
      case 'Most Rated':
        order = 'most-rated'
        break
      case 'Least Rated':
        order = 'least-rated'
        break
    }
    setOrder(order)
  }
  const handleShow = () => {
    if (limit <= reviews.length) {
      setPage((prev) => prev + 1)
      setLimit(limit * (page + 1))
    }
  }
  return (
    <Stack>
      <Flex
        align="center"
        display={{ base: 'none', tablet: 'flex', desktop: 'flex' }}
      >
        {/* <Text textStyle="body-1-bold">{`${commentsProperties.totalCount} comments`}</Text> */}
        <Spacer />
        <Select
          boxShadow="none !important"
          _hover={{ cursor: 'pointer' }}
          w="150px"
          h="50px"
          border="2px"
          onChange={handleOrder}
        >
          {sortOptions.map((content, index) => (
            <option value={content} key={index}>
              {content}
            </option>
          ))}
          ;
        </Select>
      </Flex>
      {error && <h1>Loading Failure</h1>}
      {isLoading ? (
        <Stack justify="center" align="center">
          <Icon icon="eos-icons:bubble-loading" fontSize="50px" />
        </Stack>
      ) : (
        <Box my="40px">
          {!reviews ? (
            <Box>No data</Box>
          ) : (
            reviews.map((content, index) => (
              <Box w="100%" key={index}>
                <Flex w="100%">
                  <Circle
                    overflow="hidden"
                    size="48px"
                    position="relative"
                    mr="20px"
                    _hover={{ cursor: 'pointer' }}
                  >
                    <Avatar
                      src={content.user.avatar}
                      name={content.user.name}
                    />
                  </Circle>
                  <Box w="100%">
                    <Flex>
                      <Text
                        _hover={{ cursor: 'pointer' }}
                        textStyle="caption-bold"
                        color="neutrals.1"
                      >
                        {content?.user?.name}
                      </Text>
                      <Spacer />
                      <StarRatings
                        rating={Number(content?.rate)}
                        starRatedColor="#FFD166"
                        numberOfStars={5}
                        name="rating"
                        starDimension="13px"
                        starSpacing="5px"
                      />
                    </Flex>
                    <Text
                      mt="4px"
                      mb="8px"
                      textStyle="caption"
                      color="neutrals.3"
                    >
                      {content?.comment}
                    </Text>
                    <HStack spacing="16px">
                      <Text textStyle="caption-2" color="neutrals.4">
                        {dayjs(content?.created_at).format('MMM DD, YYYY')}
                      </Text>
                    </HStack>
                  </Box>
                </Flex>
                <Divider mt="27px" mb="32px" />
              </Box>
            ))
          )}
        </Box>
      )}
      <Flex justify="center">
        <Button variant="outline" border="2px" my="20px" onClick={handleShow}>
          {'Load More'}
        </Button>
      </Flex>
    </Stack>
  )
}

export default DisplayComments
