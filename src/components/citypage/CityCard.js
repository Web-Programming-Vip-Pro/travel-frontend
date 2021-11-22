import { Box, Text, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const CityCard = ({ city }) => {
  const router = useRouter()
  return (
    <Box
      cursor="pointer"
      px="24px"
      py="16px"
      minH="400px"
      rounded="2xl"
      background={`linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${city.image_cover})`}
      backgroundSize="cover"
      backgroundPosition="center"
      _hover={{
        transform: 'translateY(-8px)',
      }}
      transition="all 0.4s"
      onClick={() => router.push(`/city/${city.id}`)}
    >
      <Stack height="100%" justify="space-between">
        <Text
          textStyle="caption-1"
          color="white"
          fontWeight="bold"
          textTransform="uppercase"
        >
          {city.country.name}
        </Text>
        <Stack spacing="8px">
          <Text textStyle="body-1" fontWeight="bold" color="white">
            {city.name}
          </Text>
          <Text color="white">
            {city.total_places} {city.total_places > 1 ? 'places' : 'place'}
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export default CityCard
