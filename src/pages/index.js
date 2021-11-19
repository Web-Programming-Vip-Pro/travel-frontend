import { Box } from '@chakra-ui/react'
import Hero from '@/components/homepage/Hero'
import Adventure from '@/components/homepage/Adventure'
import PlaceList from '@/components/homepage/PlaceList'
import BestAgencies from '@/components/homepage/BestAgencies'

export default function Index() {
  return (
    <>
      <Box px={{ mobile: '16px', tablet: '40px', desktop: '80px' }}>
        <Hero
          slogan="Air,sleep,dream"
          description="Find and book a great experience"
        />
        <Adventure
          title="Let's go on an adventure"
          description="Find and book a great experience"
        />
        <PlaceList
          title="Go somewhere"
          description="Let's go on an Adventure"
        />
        <BestAgencies header="Best agencies of the" />
      </Box>
    </>
  )
}
