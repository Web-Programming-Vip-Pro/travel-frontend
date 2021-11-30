import { Box, Flex } from '@chakra-ui/react'
import PlaceHeader from '@/components/placeFeature/placeHeader'
import PlaceDetails from '@/components/placeFeature/placeDetails'
import PlaceReviews from '@/components/placeFeature/placeReviews'
import { usePlace } from '@/services/places'
import SEO from '@/components/shared/SEO'

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
  const placeHeaderProps = {
    id: place?.id,
    placeTitle: place?.title,
    placeDetails: {
      avatarIconSrc: place?.author?.avatar,
      rate: place?.stars ?? 0,
      reviewNumbers: place?.reviews ?? 0,
      location: place?.location,
      superHost: 'Superhost',
    },
    placePictures: {
      mainFigure: place?.images?.cover,
      subFigures: place?.images?.lists,
    },
  }
  const placeDetailsProps = {
    id: place?.id,
    agencyAvatarSrc: place?.author?.avatar,
    agency: place?.author,
    leftSectionProps: {
      title: place?.title,
      agencyName: place?.author?.name,
      agencyDetails: place?.description,
    },
    rightSectionProps: {
      price: place?.price,
      rate: place?.stars ?? 0,
      reviewNumbers: place?.reviews ?? 0,
      amentities: place?.amenities,
      reportPropertyLink: { href: '#' },
    },
  }
  const placeReviewsProps = {
    agencyInformation: {
      id: place?.author?.id,
      name: place?.author?.name,
      avatarSrc: place?.author?.avatar,
      reviewNumbers: place?.reviews,
      shortDescription: place?.author?.bio,
      socialNetwork: [
        {
          iconName: 'ph:facebook-logo-light',
          directLink: { href: place?.author?.social?.facebook || '#' },
        },
        {
          iconName: 'ant-design:instagram-outlined',
          directLink: { href: place?.author?.social?.instagram || '#' },
        },
      ],
      dateRegistered: place?.author?.created_at,
    },
    placeId: id,
  }
  if (isLoading) {
    return (
      <Flex align="center" justify="center">
        Loading....
      </Flex>
    )
  }

  return (
    <>
      <SEO title={place?.title} />
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
      </Box>
    </>
  )
}

export default PlacePage
