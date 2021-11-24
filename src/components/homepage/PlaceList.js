import {
  Box,
  Flex,
  Stack,
  Text,
  Badge,
  Divider,
  Spacer,
  SimpleGrid,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import UtilityNav from '@/components/shared/UtilityNav'
import { Icon } from '@iconify/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePlaces } from '@/services/places'
function PlaceCardList({ data }) {
  return (
    <SimpleGrid
      columns={{ mobile: 1, tablet: 3, desktop: 4 }}
      justify="space-between"
      spacingY="32px"
      overflow="hidden"
    >
      {data.map((item, index) => (
        <Link href={`/place/${item.id}`} key={index} passHref={true}>
          <Flex
            justify="center"
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Box
              borderRadius="20px"
              w="256px"
              h="380px"
              overflow="hidden"
              bg="neutrals.8"
            >
              <Image
                src={item.images.cover}
                alt={item.title}
                width={256}
                height={228}
                unoptimized
                layout="responsive"
                objectFit="cover"
              />
              <Box p="20px">
                <Flex justify="space-between" align="center" h="60px">
                  <Flex direction="column" w="142px" wordBreak="break-all">
                    <Text textStyle="body-2-bold" color="neutrals.1">
                      {item.title}
                    </Text>
                    <Text textStyle="caption-2" color="neutrals.3">
                      {item.city.name}
                    </Text>
                  </Flex>
                  <Badge
                    w="48px"
                    h="26px"
                    variant="outline"
                    colorScheme="green"
                    textAlign="center"
                    lineHeight="26px"
                    boxShadow="0 0 0 3px #58C27D;
                  "
                  >
                    ${item.price}
                  </Badge>
                </Flex>
                <Divider pt="16px" />
                <Flex pt="16px" align="center" justify="center">
                  <Icon
                    icon="fluent:star-12-filled"
                    color="#FFD166"
                    width="12px"
                  />
                  <Text textStyle="caption-2-bold" color="neutrals-2" pl="4px">
                    {item.stars}
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Link>
      ))}
    </SimpleGrid>
  )
}
const PlaceList = ({ title, description }) => {
  const [page, setPage] = useState(1)
  const variant = useBreakpointValue({ base: 6, md: 6, lg: 8 })
  const [limit, setLimit] = useState(variant)
  //  order = 'recent' | 'rating' | 'max-price' | 'min-price'
  const [order, setOrder] = useState('recent')
  const [type, setType] = useState(0)
  const { places, isLoading, error } = usePlaces(0, limit, order, type)
  useEffect(() => {
    setLimit(variant)
  }, [variant])
  const handleOrder = (item) => {
    let order
    switch (item) {
      case 'Recently Added':
        order = 'recent'
        break
      case 'Most Ratings':
        order = 'rating'
        break
      case 'High Price':
        order = 'max-price'
        break
      case 'Low Price':
        order = 'min-price'
        break
    }
    setOrder(order)
  }
  const handleType = (index) => {
    setPage(1)
    setLimit(variant)
    setType(index)
  }
  const [show, setShow] = useState(false)
  const handleShow = () => {
    if (limit <= places.length) {
      setPage((prev) => prev + 1)
      setLimit(limit * (page + 1))
    } else {
      setLimit(variant)
    }
  }

  return (
    <Box h="fit-content">
      <Box
        bgColor="neutrals.7"
        borderRadius={{ tablet: '20px' }}
        overflow="hidden"
        mx={{ mobile: '-16px', tablet: '0' }}
        px={{ mobile: '16px', tablet: '40px', desktop: '80px' }}
        pt={{ mobile: '64px', tablet: '40px', desktop: '80px' }}
      >
        <Box
          textStyle={{ mobile: 'headline-3', tablet: 'headline-2' }}
          color="neutrals.2"
          textAlign={{ mobile: 'center', tablet: 'left' }}
        >
          <Text>{title}</Text>
        </Box>
        <Box
          textStyle={{ mobile: 'body-2', tablet: 'body-1' }}
          color="neutrals.4"
          pb="64px"
          textAlign={{ mobile: 'center', tablet: 'left' }}
        >
          <Text>{description}</Text>
        </Box>
        <UtilityNav triggerOrder={handleOrder} triggerType={handleType} />
        {error && <h1>Loading Failure</h1>}
        {isLoading ? (
          <Stack justify="center" align="center">
            <Icon icon="eos-icons:bubble-loading" fontSize="50px" />
          </Stack>
        ) : (
          <Box>
            {/* <PlaceCardList data={listPlace} show={show} /> */}
            <PlaceCardList data={places} show={show} />
            <Flex justify="center">
              <Button
                variant="outline"
                border="2px"
                my="64px"
                onClick={handleShow}
              >
                {places.length < limit ? 'Hide' : 'View All'}
              </Button>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default PlaceList
