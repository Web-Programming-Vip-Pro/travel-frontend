import { Flex, Text, Box, Button } from '@chakra-ui/react'
import HolidaySummer from './svgrImgHome/Holiday Summer 1'
import HolidayTravel from './svgrImgHome/Holiday Travel'
import HolidayPool from './svgrImgHome/Holiday Pool'
import { usePlacesStatistic } from '@/services/places'

function Category({ data }) {
  return (
    <Flex
      w={{ mobile: '292px', tablet: '312px', desktop: '350px' }}
      h={{ mobile: '144px', tablet: '152px', desktop: '192px' }}
      justify="center"
      align="center"
    >
      {data.imgSrc == 'HolidaySummer' ? (
        <HolidaySummer width="132px" height="120px" />
      ) : data.imgSrc == 'HolidayTravel' ? (
        <HolidayTravel width="132px" height="120px" />
      ) : (
        <HolidayPool width="132px" height="120px" />
      )}
      <Flex direction="column">
        <Box textStyle="body-2-bold" color="neutrals.2" pb="8px">
          {data.type}
        </Box>
        <Button bgColor="neutrals.6" variant="solid">
          <Text textStyle="hairline-2" color="neutrals.3">
            {data.numPlaces} PLACES
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}
const Adventure = ({ title, description }) => {
  const { statistics } = usePlacesStatistic()
  const data = [
    {
      imgSrc: 'HolidaySummer',
      type: 'Stay',
      numPlaces: statistics && statistics[0].total,
    },
    {
      imgSrc: 'HolidayTravel',
      type: 'Explore',
      numPlaces: statistics && statistics[1].total,
    },
    {
      imgSrc: 'HolidayPool',
      type: 'Food & Drink',
      numPlaces: statistics && statistics[2].total,
    },
  ]
  return (
    <Flex minH="468px" direction="column">
      <Flex
        direction="column"
        align="center"
        pt="64px"
        pb="48px"
        textAlign="center"
      >
        <Text textStyle="headline-2">{title}</Text>
        <Text
          textStyle={{ mobile: 'body-2', tablet: 'body-1' }}
          color="neutrals.4"
        >
          {description}
        </Text>
      </Flex>
      {/* Type of adventure  */}
      <Flex
        justify="center"
        direction={{ mobile: 'column', tablet: 'row' }}
        align="center"
      >
        {data.map((data, index) => (
          <Category data={data} key={index} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Adventure
