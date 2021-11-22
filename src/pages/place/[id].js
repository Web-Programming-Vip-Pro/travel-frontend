import { Box, Flex } from '@chakra-ui/react'
import PlaceHeader from '@/components/placeFeature/placeHeader'
import PlaceDetails from '@/components/placeFeature/placeDetails'
import PlaceReviews from '@/components/placeFeature/placeReviews'
import SimilarPlaces from '@/components/placeFeature/placeSimilars'
import { usePlace } from '@/services/places'

export const getServerSideProps = async ({ params }) => {
  const { id } = params
  return {
    props: {
      id,
    },
  }
}
const PlacePage = ({ id }) => {
  const { place, isLoading, error } = usePlace(id)
  console.log(place?.data)
  const placeData = place?.data
  const placeHeaderProps = {
    placeTitle: placeData?.title,
    placeDetails: {
      avatarIconSrc: placeData?.author?.avatar,
      rate: placeData?.stars ?? 0,
      reviewNumbers: placeData?.reviews ?? 0,
      location: placeData?.location,
      superHost: 'Superhost',
    },
    placePictures: {
      mainFigure: placeData?.images?.cover,
      subFigures: placeData?.images?.lists,
    },
  }
  const placeDetailsProps = {
    agencyAvatarSrc: placeData?.author?.avatar,
    leftSectionProps: {
      title: placeData?.title,
      agencyName: placeData?.author?.name,
      agencyDetails: placeData?.description,
    },
    rightSectionProps: {
      price: placeData?.price,
      rate: placeData?.stars ?? 0,
      reviewNumbers: placeData?.reviews ?? 0,
      amentities: placeData?.amenities,
      reportPropertyLink: { href: '#' },
    },
  }
  const placeReviewsProps = {
    agencyInformation: {
      name: placeData?.author?.name,
      avatarSrc: placeData?.author?.avatar,
      reviewNumbers: placeData?.reviews,
      shortDescription: placeData?.description,
      linkWebsite: { urlName: 'https://abc.net', directLink: { href: '#' } },
      socialNetwork: [
        { iconName: 'iconoir:twitter', directLink: { href: '#' } },
        {
          iconName: 'ant-design:instagram-outlined',
          directLink: { href: '#' },
        },
        { iconName: 'ph:facebook-logo-light', directLink: { href: '#' } },
      ],
      dateRegistered: placeData?.author?.created_at,
    },
    placeId: id,
  }
  if (isLoading) {
    return (
      <Flex align="center" justify="center">
        Loading....
      </Flex>
    )
  } else if (place.data === null) {
    return (
      <Flex align="center" justify="center">
        No data
      </Flex>
    )
  }
  return (
    <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
      <Box>
        <PlaceHeader placeHeaderProps={placeHeaderProps} />
      </Box>
      <Box py="65px">
        <PlaceDetails placeDetailsProps={placeDetailsProps} />
      </Box>
      <Box py={{ base: '65px', tablet: '80px' }}>
        <PlaceReviews placeReviewsProps={placeReviewsProps} />
      </Box>
      <Box>
        <SimilarPlaces />
      </Box>
    </Box>
  )
}

export default PlacePage
