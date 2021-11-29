import React from 'react'
import { HStack, Text, Flex, Box, Stack, Button } from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import UtilityNav from '@/components/shared/UtilityNav'
import PlaceCardList from '@/components/shared/PlayCardList'
import { useState } from 'react'

const gridColumnsQty = { mobile: 1, tablet: 3, desktop: 2 }
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
  const PAGE = 0
  const [limit, setLimit] = useState(10)
  const [type, setType] = useState(0)
  const [order, setOrder] = useState('recent')
  const [show, setShow] = useState(false)
  const [service, setService] = useState('Stay')
  return (
    <Box>
      <Text textStyle="body-1-bold">{agencyListingTitle}</Text>
      <Stack
        direction="row"
        spacing="16px"
        align="center"
        justify="space-between"
        mt="36px"
        mb="44px"
      >
        <UtilityNav
          triggerOrder={(order) => setOrder(order)}
          triggerType={(type) => setType(type)}
          defaultOrder={order}
          defaultType={type}
        />
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
