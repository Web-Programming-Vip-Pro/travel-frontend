import Country from '@/components/citypage/Country'
import StayList from '@/components/shared/StayList'
import UtilityNav from '@/components/shared/UtilityNav'
import { usePlaces } from '@/services/places'
import { useState } from 'react'
export const getServerSideProps = async ({ params }) => {
  const { id } = params
  return {
    props: {
      id,
    },
  }
}
export default function City({ id }) {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(8)
  //  order = 'recent' | 'rating' | 'max-price' | 'min-price'
  const [order, setOrder] = useState('recent')
  const [type, setType] = useState(0)
  const { places, isLoading, error } = usePlaces(page, limit, order, type, id)
  console.log(page, places)
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
  const Bgdata = [
    {
      imgSrc: '/assets/citypage/Bg City.jpg',
      location: 'South Island',
      nation: 'New Zealand',
      flag: '/assets/citypage/flag.png',
    },
  ]
  return (
    <>
      <Country data={Bgdata} />
      <StayList
        listPlace={places}
        isLoading={isLoading}
        triggerPage={() => setPage(page + 1)}
      >
        <UtilityNav triggerOrder={handleOrder} triggerType={handleType} />
      </StayList>
    </>
  )
}
