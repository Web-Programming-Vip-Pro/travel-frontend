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
} from '@chakra-ui/react'
import Image from 'next/image'
import UtilityNav from '@/components/shared/UtilityNav'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import Link from 'next/link'
import { usePlaces } from '@/services/places'
function PlaceCardList({ data, show }) {
  return (
    <SimpleGrid
      columns={{ mobile: 1, tablet: 3, desktop: 4 }}
      justify="space-between"
      spacingY="32px"
      maxH={show ? {} : { mobile: '2350px', tablet: '762px' }}
      overflow="hidden"
    >
      {data.map((item, index) => (
        <Link href={`\place\/${item.id}`} key={index}>
          <Flex
            justify="center"
            _hover={{
              cursor: 'pointer',
            }}
          >
            <Box
              borderRadius="20px"
              w="256px"
              h="365px"
              overflow="hidden"
              bg="neutrals.8"
            >
              <Image
                src={item.images.cover}
                alt={item.title}
                width={256}
                height={228}
                unoptimized
              />
              <Box p="20px">
                <Flex justify="space-between" align="center">
                  <Flex direction="column">
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
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(6)
  //  order = 'recent' | 'rating' | 'max-price' | 'min-price'
  const [order, setOrder] = useState('recent')
  const [type, setType] = useState(0)
  const { places, isLoading, error } = usePlaces(page, limit, order, type)
  console.log(page, limit, order, type)
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
    setType(index)
  }
  const [show, setShow] = useState(false)
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
                onClick={() => setShow(!show)}
              >
                {show ? 'Hide' : 'View All'}
              </Button>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default PlaceList
