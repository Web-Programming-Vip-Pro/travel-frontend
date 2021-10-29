import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Circle,
  Spacer,
  IconButton,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useBreakpointValue } from '@chakra-ui/react'
function SearchLocate({ location, title }) {
  return (
    <Flex
      w={{ mobile: '335px', tablet: '864px', desktop: '1120px' }}
      h="136px"
      direction="row"
      pos="absolute"
      bgColor="neutrals.8"
      borderRadius="24px"
      opacity="0.98"
      px="40px"
      py="20px"
      top={{ tablet: '75%' }}
      bottom={{ mobile: '4px', tablet: 'none' }}
      boxShadow="lg"
      justify="space-between"
    >
      {/* Location  */}
      <Flex h="96px" align="center">
        <Flex>
          <Box display={{ mobile: 'none', tablet: 'block' }}>
            <Icon
              icon="typcn:location-arrow-outline"
              width="20px"
              height="20px"
              color="#B1B5C3"
            />
          </Box>
          <Flex direction="column" ml="16px">
            <Text color="neutrals.2" textStyle="body-1-bold">
              {location}
            </Text>
            <Text color="neutrals.4" textStyle="body-2">
              {title}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Search ButtonIcon */}
      <Flex h="104px" justify="flex-end" align="center">
        <IconButton
          icon={<Icon icon="bx:bx-search" width="20px" height="20px" />}
          w="64px"
          h="64px"
          px="0"
          py="0"
        />
      </Flex>
    </Flex>
  )
}
const Hero = ({ slogan, description }) => {
  return (
    <Box
      h={{ mobile: '812px', tablet: '729px', desktop: '936px' }}
      pb={{ tablet: '119px', desktop: '160px' }}
      pos="relative"
    >
      <Flex direction={{ mobile: 'column-reverse', tablet: 'column' }}>
        {/* Background of Hero*/}
        <Box
          w="100%"
          h={{ mobile: '442px', tablet: '610px', desktop: '776px' }}
          pos="relative"
          borderRadius={{ tablet: '24px' }}
          borderBottomStartRadius="24px"
          borderBottomEndRadius="24px"
          overflow="hidden"
        >
          <Image
            pos="absolute"
            src="/assets/homepage/Hero Background.png"
            alt="Image Background"
            layout="fill"
            objectFit="objectFit"
          />
        </Box>
        {/*  Slogan and Desciption of Hero */}
        <Flex
          direction="column"
          h={{ mobile: '370px', tablet: 'none' }}
          pos={{ tablet: 'absolute' }}
          top={{ tablet: '98px' }}
          left={{ tablet: '80px' }}
          align={{ mobile: 'center', tablet: 'flex-start' }}
          justify={{ mobile: 'center', tablet: 'flex-start' }}
          bgGradient={{
            mobile: 'linear(to-b,#F4F5F6,#F4F4F5)',
            tablet: 'none',
          }}
          borderTopStartRadius="24px"
          borderTopEndRadius="24px"
        >
          <Flex
            zIndex={1}
            direction="column"
            w={{ mobile: '312px', desktop: '447px' }}
            wordBreak="break-all"
            color="neutrals.2"
          >
            <Text
              textStyle={{
                mobile: 'headline-1',
                tablet: 'headline-1',
                desktop: 'hero',
              }}
              color="neutrals.2"
              pb="16px"
            >
              {slogan}
            </Text>
            <Text
              textStyle={{ mobile: 'body-2-bold', desktop: 'body-1-bold' }}
              color="neutrals.2"
              pb="24px"
            >
              {description}
            </Text>
          </Flex>
          {/* Button Start */}
          <Button w="182px" h="48px">
            <Text px="24px" py="16px" color="neutrals.8">
              Start your search
            </Text>
          </Button>
        </Flex>
      </Flex>
      {/* Find Location */}
      <Flex justify="center">
        <SearchLocate location="Location" title="Where are you going" />
      </Flex>
    </Box>
  )
}

export default Hero
