import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const agencyBackgroundFigure =
  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/storyimage_647_062215030547.jpg'

const AgencyBackground = ({ backgroundSrc }) => {
  return (
    <Box
      w="100%"
      borderRadius="16px"
      overflow="hidden"
      display={{ base: 'none', tablet: 'block' }}
    >
      <Box position="relative" h="400px">
        <Image
          src={backgroundSrc || agencyBackgroundFigure}
          alt="agency background figure"
          layout="fill"
          objectFit="cover"
          unoptimized
        />
      </Box>
    </Box>
  )
}

export default AgencyBackground
