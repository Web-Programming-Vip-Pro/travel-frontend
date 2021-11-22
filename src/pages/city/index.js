import { useState } from 'react'
import { getAllCities, searchCities } from '@/services/city'
import {
  Box,
  Text,
  Stack,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Grid,
} from '@chakra-ui/react'
import Image from 'next/image'
import CityCard from '@/components/citypage/CityCard'
import { Icon } from '@iconify/react'
import { useBreakpointValue } from '@chakra-ui/react'

export const getServerSideProps = async () => {
  const PAGE = 0
  const LIMIT = -1
  const response = await getAllCities(PAGE, LIMIT)
  if (response.success) {
    return {
      props: {
        cities: response.message,
      },
    }
  }
  return {
    props: {
      redirect: {
        destination: '/',
        permanent: false,
      },
    },
  }
}

const Cities = ({ cities }) => {
  const templateColumns = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(4, 1fr)',
  })
  const showImage = useBreakpointValue({ base: false, lg: true })
  const [search, setSearch] = useState('')
  const [filteredCities, setFilteredCities] = useState(cities)
  async function handleSearch() {
    const response = await searchCities(search)
    if (response.success) {
      setFilteredCities(response.message)
    }
  }
  return (
    <>
      <Box bg="primary.1">
        <Stack spacing="8px" direction="row" justify="center" align="center">
          <Stack
            w={2 / 3}
            spacing="36px"
            px={{ mobile: '40px', tablet: '80px', desktop: '160px' }}
            py={{ mobile: '40px', md: '120px', desktop: '160px' }}
          >
            <Text
              textStyle="headline-2"
              color="white"
              textAlign={showImage ? 'left' : 'center'}
            >
              Explore the world
            </Text>
            <Stack direction="row">
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Type a city name (e.g. Hanoi)"
                  size="lg"
                  rounded="full"
                  boxShadow="none"
                  px="24px"
                  py="24px"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>
              <IconButton
                variant="neutrals"
                bg="white"
                color="primary.1"
                size="small"
                icon={<Icon icon="mdi:search" width="24px" height="24px" />}
                onClick={handleSearch}
              ></IconButton>
            </Stack>
          </Stack>
          {showImage && (
            <Stack w={1 / 3}>
              <Image
                src="/assets/citypage/travel-person.png"
                alt="city-bg"
                height={512}
                width={512}
              />
            </Stack>
          )}
        </Stack>
      </Box>
      <Box px={{ mobile: '16px', tablet: '80px', desktop: '160px' }} py="48px">
        <Grid templateColumns={templateColumns} gap="24px">
          {filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Cities
