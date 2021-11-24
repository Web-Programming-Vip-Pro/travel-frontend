import Country from '@/components/citypage/Country'
import StayList from '@/components/shared/StayList'
import UtilityNav from '@/components/shared/UtilityNav'
import { usePlaces } from '@/services/places'
import { useState, useEffect } from 'react'
import { getCity } from '@/services/city'
import { useBreakpointValue } from '@chakra-ui/react'
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
  const variant = useBreakpointValue({ mobile: 4, tablet: 6 })
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(variant)
  //  order = 'recent' | 'rating' | 'max-price' | 'min-price'
  const [order, setOrder] = useState('recent')
  const [type, setType] = useState(0)
  const { places, isLoading, error } = usePlaces(0, limit, order, type, id)
  useEffect(() => {
    setLimit(variant)
  }, [variant])

  const handleType = (index) => {
    setPage(1)
    setLimit(variant)
    setType(index)
  }
  const Bgdata = [
    {
      imgSrc: `${cities.image_cover}`,
      description: `${cities.description}`,
      nation: `${cities.name}`,
      flag: '/assets/citypage/flag.png',
    },
  ]
  return (
    <>
      <Country data={Bgdata} />
      <StayList
        listPlace={places}
        isLoading={isLoading}
        triggerPage={() => {
          if (limit <= places.length) {
            setPage((prev) => prev + 1)
            setLimit(limit * (page + 1))
          } else {
            setLimit(variant)
          }
        }}
      >
        <UtilityNav triggerOrder={setOrder} triggerType={handleType} />
      </StayList>
    </>
  )
}
