import Country from '@/components/citypage/Country'
import StayList from '@/components/shared/StayList'
import UtilityNav from '@/components/shared/UtilityNav'
import { usePlaces } from '@/services/places'
import { useState, useEffect } from 'react'
import { getCity } from '@/services/city'
import { useBreakpointValue } from '@chakra-ui/react'
import getCountryCode from '@/utils/country'
export const getServerSideProps = async ({ params }) => {
  const { id } = params
  const response = await getCity(id)
  if (response.success) {
    return {
      props: {
        cities: response.message,
        id,
      },
    }
  }
  return {
    props: {
      redirect: {
        destination: '/404',
      },
    },
  }
}
export default function City({ cities, id }) {
  const variant = useBreakpointValue({ sm: 4, md: 6, lg: 6 })
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(variant)
  //  order = 'recent' | 'rating' | 'max-price' | 'min-price'
  const [order, setOrder] = useState('recent')
  const [type, setType] = useState(0)
  const { places, isLoading, error } = usePlaces(0, limit, order, type, id)
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
  // Get Isocode of Country
  const handleType = (index) => {
    setPage(1)
    setLimit(variant)
    setType(index)
  }
  const isoCode = getCountryCode(cities.country.name)
  const Bgdata = {
    imgSrc: `${cities.image_cover}`,
    name: `${cities.name}`,
    description: `${cities.description}`,
    flag: isoCode,
    nation: `${cities.country.name}`,
  }
  return (
    <>
      <Country data={Bgdata} />
      <StayList
        limit={limit}
        listPlace={places}
        isLoading={isLoading}
        triggerPage={() => {
          // Show more
          if (limit <= places.length) {
            setPage((prev) => prev + 1)
            setLimit(limit * (page + 1))
          }
          // Hide
          else {
            setLimit(variant)
          }
        }}
      >
        <UtilityNav triggerOrder={handleOrder} triggerType={handleType} />
      </StayList>
    </>
  )
}
