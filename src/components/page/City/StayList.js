import {
  Box,
  Flex,
  Text,
  Badge,
  Divider,
  Spacer,
  HStack,
  SimpleGrid,
  Button,
  InputGroup,
  Input,
  IconButton,
  InputRightElement,
} from '@chakra-ui/react'
import Image from 'next/image'
import UtilityNav from '@/components/shared/UtilityNav'
import { Icon } from '@iconify/react'
function PlaceCardList({ data }) {
  return (
    <SimpleGrid
      columns={{ mobile: 1, tablet: 3 }}
      spacingY="32px"
      maxH={{ mobile: '1761px', tablet: 'none' }}
      overflow="hidden"
    >
      {data.map((item, index) => (
        <Flex key={index} justify="space-around">
          <Box
            borderRadius="20px"
            w={{ tablet: '266px', desktop: '352px' }}
            h={{ tablet: '411px', desktop: '417px' }}
            overflow="hidden"
            bg="neutrals.8"
          >
            <Box
              width={{ mobile: '311px', tablet: '266px', desktop: '352px' }}
              height={{ mobile: '240px', desktop: '240px' }}
              position="relative"
            >
              <Image
                src={item.imgSrc}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                position="absolute"
              />
              <Badge
                position="absolute"
                top="16px"
                left="16px"
                textStyle="hairline-2"
                bg="neutrals.8"
                p="8px"
              >
                Stay
              </Badge>
            </Box>

            <Box p="20px">
              <Flex justify="space-between" align="center" pb="8px">
                <Text
                  textStyle="body-2-bold"
                  color="neutrals.1"
                  w="186px"
                  wordBreak="break-all"
                >
                  {item.title}
                </Text>

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
              <HStack textStyle="caption-2" color="neutrals.4">
                <Icon icon="icon-park-outline:router" />
                <Text>{item.wifi}</Text>
                <Icon icon="ion:fast-food-outline" />
                <Text>{item.breakfast}</Text>
              </HStack>
              <Divider pt="16px" />
              <Flex pt="16px" justify="center">
                <Flex direction="row" align="center" pr="8px">
                  <Icon
                    icon="fluent:star-12-filled"
                    color="#FFD166"
                    width="12px"
                  />
                  <Text textStyle="caption-2-bold" color="neutrals-2" pl="4px">
                    {item.rate}
                  </Text>
                </Flex>
                <Text textStyle="caption-2" color="neutrals.4">
                  ({item.reviews} reviews)
                </Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  )
}
const StayList = () => {
  const listPlace = [
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',
      imgSrc: '/assets/citypage/Stay 1.jpg',
      price: 548,
      reviews: 12,
      rate: 4.9,
    },
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',
      imgSrc: '/assets/citypage/Stay 2.jpg',
      price: 548,
      reviews: 12,
      rate: 4.9,
    },
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',

      imgSrc: '/assets/citypage/Stay 3.jpg',
      price: 548,
      reviews: 12,
      rate: 4.9,
    },
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',

      imgSrc: '/assets/citypage/Stay 4.jpg',
      price: 548,
      reviews: 12,
      rate: 4.9,
    },
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',
      reviews: 12,
      imgSrc: '/assets/citypage/Stay 5.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',
      reviews: 12,
      imgSrc: '/assets/citypage/Stay 6.jpg',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',
      reviews: 12,
      imgSrc: '/assets/citypage/Stay 7.jpg',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',
      reviews: 12,
      imgSrc: '/assets/citypage/Stay 8.jpeg',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'Entire serviced classy moutain house',
      wifi: 'Free wifi',
      breakfast: 'Breakfast included',
      reviews: 12,
      imgSrc: '/assets/citypage/Stay 9.jpeg',
      price: 548,
      reviews: 12,
      rate: 4.9,
    },
  ]
  return (
    <Box minH={{ mobile: '2164px', tablet: '1446px' }}>
      <Box
        minH="1286px"
        overflow="hidden"
        px={{ mobile: '16px', tablet: '40px', desktop: '80px' }}
        pt={{ mobile: '32px', tablet: '32px', desktop: '48px' }}
      >
        <UtilityNav />
        <InputGroup pb="48px" size="lg">
          <Input placeholder="Search everything"></Input>
          <InputRightElement>
            <IconButton
              icon={<Icon icon="bx:bx-search" width="13px" height="13px" />}
              w="32px"
              height="32px"
              px="0"
              py="0"
            />
          </InputRightElement>
        </InputGroup>
        <PlaceCardList data={listPlace} />
        <Flex justify="center">
          <Button
            leftIcon={<Icon icon="icon-park-outline:loading-one" />}
            variant="outline"
            border="2px"
            my="64px"
          >
            View All
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default StayList
