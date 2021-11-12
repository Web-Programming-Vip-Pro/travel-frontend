import React from 'react'
import { HStack, Text, Flex, Box, Stack, Button } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import UtilityNav from '@/components/shared/UtilityNav'
import PlaceCardList from '@/components/shared/PlayCardList'
import { useState } from 'react'

const gridColumnsQty = { mobile: 1, tablet: 3, desktop: 2 }
const serviceList = ['Stay', 'Explore']
const listPlace = {
  stay: [
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
  ],
  explore: [
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
  ],
}
const agencyListingTitle = 'Zoe Towne’s listing'

const AgencyListing = () => {
  const [show, setShow] = useState(false)
  const [service, setService] = useState('Stay')
  return (
    <Box>
      <Text textStyle="body-1-bold">{agencyListingTitle}</Text>
      <Stack direction="row" spacing="16px" align="center" mt="36px" mb="44px">
        {serviceList.map((item) => (
          <Button
            key={item}
            leftIcon={
              <Icon
                icon="bx:bx-dollar-circle"
                color={item !== service ? '#777E90' : ''}
              />
            }
            px="10px"
            py="6px"
            bg={item === service ? 'neutrals.3' : ''}
            variant={item !== service ? 'ghost' : 'none'}
            onClick={() => setService(item)}
          >
            <Text
              textStyle="button-2"
              color={item === service ? 'neutrals.8' : 'neutrals.4'}
            >
              {item}
            </Text>
          </Button>
        ))}
      </Stack>
      <PlaceCardList
        columns={gridColumnsQty}
        data={service == 'Stay' ? listPlace?.stay : listPlace?.explore}
        typeName={service}
        show={show}
      />
      <Flex justify="center">
        <Button
          leftIcon={<Icon icon="icon-park-outline:loading-one" />}
          variant="outline"
          border="2px"
          mt="64px"
          onClick={() => setShow(!show)}
        >
          {show ? 'Hide' : 'View All'}
        </Button>
      </Flex>
    </Box>
  )
}

export default AgencyListing
