import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useSearchPlaces } from '@/services/places'
import { useDebounce, useClickAway, useToggle } from 'react-use'
import Link from 'next/link'

function Results({ places, onToggle }) {
  const ref = useRef(null)
  useClickAway(ref, () => onToggle(false))
  function PlaceList() {
    return (
      <>
        {places.map((place, index) => (
          <Box
            key={index}
            p="12px"
            py="24px"
            borderBottom="1px solid #eaeaea"
            cursor="pointer"
            _hover={{ bg: 'neutrals.6' }}
            rounded="lg"
            transition="all 0.4s"
          >
            <Link href={`/place/${place.id}`} passHref>
              <Text textStyle="caption-1" fontWeight="bold">
                {place.title}
              </Text>
            </Link>
          </Box>
        ))}
      </>
    )
  }

  return (
    <Box
      position="absolute"
      bottom="140px"
      left="10px"
      right="10px"
      bg="white"
      shadow="lg"
      rounded="xl"
      p="24px"
      zIndex={2}
      ref={ref}
    >
      {places && places.length > 0 ? <PlaceList /> : 'No results found'}
    </Box>
  )
}

function SearchInput({ onValueChange, onValueInput }) {
  const [text, setText] = useState('')
  useEffect(() => {
    onValueInput()
  }, [text])
  useDebounce(
    () => {
      if (text.length > 0) {
        onValueChange(text)
      }
    },
    500,
    [text]
  )
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" height="100%">
        <Icon
          icon="typcn:location-arrow-outline"
          width="20px"
          height="20px"
          color="#B1B5C3"
        />
      </InputLeftElement>
      <Input
        height="100%"
        size="lg"
        placeholder="Location"
        border="none"
        bgColor="neutrals.8"
        fontSize="24px"
        fontWeight="600"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <InputRightElement height="100%">
        <IconButton
          icon={<Icon icon="bx:bx-search" width="20px" height="20px" />}
          size="lg"
          px="0"
          py="0"
        />
      </InputRightElement>
    </InputGroup>
  )
}

function SearchBox() {
  const [searchText, setSearchText] = useState('')
  const { places, isLoading, error } = useSearchPlaces(searchText)
  const [isOpen, setIsOpen] = useToggle(false)
  return (
    <>
      <Flex
        // w={{ mobile: '335px', tablet: '864px', desktop: '1120px' }}
        w={{ mobile: '98%', tablet: '90%' }}
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
        <SearchInput
          onValueChange={(text) => {
            setSearchText(text)
            setIsOpen(true)
          }}
          onValueInput={() => setIsOpen(false)}
        />
      </Flex>
      {isOpen && <Results places={places} onToggle={setIsOpen} />}
    </>
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
            objectFit="cover"
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
            mobile: ' linear-gradient(180deg, #d9d9d9 0%, #f6f2f2 100%);',
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
            textAlign={{ mobile: 'center', tablet: 'left' }}
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
        <SearchBox />
      </Flex>
    </Box>
  )
}

export default Hero
