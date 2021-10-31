import { Box } from '@chakra-ui/react'
import PlaceHeader from '@/components/place-feature/place-header'
import PlaceDetails from '@/components/place-feature/place-details'
import PlaceReviews from '@/components/place-feature/place-reviews'
import SimilarPlaces from '@/components/place-feature/place-similars'

const PlacePage = () => {
  return (
    <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
      <Box>
        <PlaceHeader />
      </Box>
      <Box py="65px">
        <PlaceDetails />
      </Box>
      <Box py={{base: '65px', tablet: '80px'}}>
        <PlaceReviews />
      </Box>
      <Box>
        <SimilarPlaces />
      </Box>
    </Box>
  )
}

export default PlacePage
