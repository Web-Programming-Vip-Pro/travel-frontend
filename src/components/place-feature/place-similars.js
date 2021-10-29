import { Text, Flex, Box } from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const similarPlacesTitle = 'Explore mountains in New Zealand'
const similarPlaces = [
  {
    figureSrc:
      'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    minPrice: 230,
    name: 'Mountain house',
    avalableHouse: 650596,
  },
  {
    figureSrc:
      'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    minPrice: 230,
    name: 'Mountain house',
    avalableHouse: 650596,
  },
  {
    figureSrc:
      'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    minPrice: 230,
    name: 'Mountain house',
    avalableHouse: 650596,
  },
  {
    figureSrc:
      'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    minPrice: 230,
    name: 'Mountain house',
    avalableHouse: 650596,
  },
  {
    figureSrc:
      'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    minPrice: 230,
    name: 'Mountain house',
    avalableHouse: 650596,
  },
  {
    figureSrc:
      'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    minPrice: 230,
    name: 'Mountain house',
    avalableHouse: 650596,
  },
  {
    figureSrc:
      'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    minPrice: 230,
    name: 'Mountain house',
    avalableHouse: 650596,
  },
  {
    figureSrc:
      'http://chefjob.vn/wp-content/uploads/2020/04/homestay-duoc-nhieu-du-khach-lua-chon.jpg',
    minPrice: 230,
    name: 'Mountain house',
    avalableHouse: 650596,
  },
]

const SimilarPlaces = () => {
  return (
    <Box>
      <Text textStyle="headline-4">{similarPlacesTitle}</Text>
      <Flex wrap="wrap" justify="space-around">
        {similarPlaces.map((content, index) => (
          <Box m="20px" key={index}>
            <Box
              m="10px"
              p="8px"
              bg="neutrals.2"
              boxShadow="0px 8px 16px -8px rgba(15, 15, 15, 0.1)"
              borderRadius="32px"
              zIndex={2}
              position="absolute"
            >
              <Text
                textStyle="hairline-2"
                color="neutrals.8"
              >{`FROM $${content.minPrice}`}</Text>
            </Box>
            <Box
              _hover={{ cursor: 'pointer' }}
              borderRadius="16px"
              overflow="hidden"
            >
              <Box
                w="300px"
                h="300px"
                position="relative"
                _hover={{ transform: 'scale(1.1)' }}
              >
                <Image
                  layout="fill"
                  src={content.figureSrc}
                  alt="similar place"
                />
              </Box>
            </Box>
            <Text
              _hover={{ cursor: 'pointer' }}
              mt="12px"
              textStyle="body-2-bold"
            >
              {content.name}
            </Text>
            <Flex mt="8px">
              <Flex align="center" color="neutrals.4">
                <Icon fontSize="14px" icon="ph:house-line-light" />
                <Text ml="7px" color="neutrals.4" textStyle="caption-2-bold">
                  {content.avalableHouse}
                </Text>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}

export default SimilarPlaces
