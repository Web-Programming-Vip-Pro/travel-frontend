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
function PlaceCardList({ data }) {
  return (
    <SimpleGrid
      columns={{ mobile: 1, tablet: 3, desktop: 4 }}
      justify="space-between"
      spacingY="32px"
      maxH={{ mobile: '2350px', tablet: '762px' }}
      overflow="hidden"
    >
      {data.map((item, index) => (
        <Flex key={index} justify="center">
          <Box
            borderRadius="20px"
            w="256px"
            h="365px"
            overflow="hidden"
            bg="neutrals.8"
          >
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={256}
              height={228}
            />
            <Box p="20px">
              <Flex justify="space-between" align="center">
                <Flex direction="column">
                  <Text textStyle="body-2-bold" color="neutrals.1">
                    {item.title}
                  </Text>
                  <Text textStyle="caption-2" color="neutrals.3">
                    {item.subTitle}
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
              <Flex pt="16px">
                <Text textStyle="caption-2" color="neutrals.4">
                  {item.timeLine}
                </Text>
                <Spacer />
                <Flex direction="row" align="center">
                  <Icon
                    icon="fluent:star-12-filled"
                    color="#FFD166"
                    width="12px"
                  />
                  <Text textStyle="caption-2-bold" color="neutrals-2" pl="4px">
                    {item.rate}
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  )
}
const PlaceList = ({ title, description }) => {
  const listPlace = [
    {
      title: 'The grand resort',
      subTitle: 'Karinesie',
      imgSrc: '/assets/homepage/Place Snow.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'The grand resort',
      subTitle: 'Karinesie',
      imgSrc: '/assets/homepage/Place Beach.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'The grand resort',
      subTitle: 'Karinesie',
      imgSrc: '/assets/homepage/Place Field.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'The grand resort',
      subTitle: 'Karinesie',
      imgSrc: '/assets/homepage/Place Fog.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'The grand resort',
      subTitle: 'Karinesie',
      imgSrc: '/assets/homepage/Place Wave.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'The grand resort',
      subTitle: 'Karinesie',
      imgSrc: '/assets/homepage/Place Bay.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'The grand resort',
      subTitle: 'Karinesie',
      imgSrc: '/assets/homepage/Place Snow.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
    {
      title: 'The grand resort',
      subTitle: 'Karinesie',
      imgSrc: '/assets/homepage/Place Sky.png',
      price: 548,
      timeLine: '8:00 - 18.00',
      rate: 4.9,
    },
  ]
  return (
    <Box minH={{ mobile: '2858px', tablet: '1446px' }}>
      <Box
        bgColor="neutrals.7"
        borderRadius={{ tablet: '20px' }}
        minH="1286px"
        overflow="hidden"
        mx={{ mobile: '-16px', tablet: '0' }}
        px={{ mobile: '16px', tablet: '40px', desktop: '80px' }}
        pt={{ mobile: '64px', tablet: '40px', desktop: '80px' }}
      >
        <Box
          textStyle={{ mobile: 'headline-3', tablet: 'headline-2' }}
          color="neutrals.2"
        >
          <Text>{title}</Text>
        </Box>
        <Box
          textStyle={{ mobile: 'body-2', tablet: 'body-1' }}
          color="neutrals.4"
          pb="64px"
        >
          <Text>{description}</Text>
        </Box>
        <UtilityNav />
        <PlaceCardList data={listPlace} />
        <Flex justify="center">
          <Button variant="outline" border="2px" my="64px">
            View All
          </Button>
        </Flex>
      </Box>
    </Box>
  )
}

export default PlaceList
