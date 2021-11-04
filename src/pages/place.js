import { Box } from '@chakra-ui/react'
import PlaceHeader from '@/components/placeFeature/placeHeader'
import PlaceDetails from '@/components/placeFeature/placeDetails'
import PlaceReviews from '@/components/placeFeature/placeReviews'
import SimilarPlaces from '@/components/placeFeature/placeSimilars'

const PlacePage = () => {
  return (
    <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
      <Box>
        <PlaceHeader />
      </Box>
      <Box py="65px">
        <PlaceDetails />
      </Box>
      <Box py={{ base: '65px', tablet: '80px' }}>
        <PlaceReviews />
      </Box>
      <Box>
        <SimilarPlaces />
      </Box>
    </Box>
  )
}

export default PlacePage
