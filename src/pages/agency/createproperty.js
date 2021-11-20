import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/react'
import CreatePropertyForm from '@/components/createPropertyFeature/createPropertyForm'
import SinglePlaceCard from '@/components/shared/SinglePlaceCard'
const item = {
  title: 'Entire serviced classy moutain house',
  wifi: 'Free wifi',
  breakfast: 'Breakfast included',
  imgSrc: '/assets/citypage/Stay 1.jpg',
  price: 548,
  reviews: 12,
  rate: 4.9,
}
const ListYourProperty = () => {
  return (
    <Flex
      p={{
        base: '32px 32px 64px',
        tablet: '80px 80px 136px',
        desktop: '80px 160px 136px',
      }}
    >
      <Box w="100%">
        <CreatePropertyForm />
      </Box>
      <Box ml="128px" display={{ base: 'none', desktop: 'block' }}>
        <Text mb="40px" textStyle="body-1-bold">
          Preview
        </Text>
        <SinglePlaceCard item={item} />
      </Box>
    </Flex>
  )
}

export default ListYourProperty
