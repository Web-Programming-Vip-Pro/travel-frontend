import React from 'react'
import {
  Button,
  Spacer,
  HStack,
  Circle,
  Divider,
  Text,
  Flex,
  Box,
  LinkBox,
  LinkOverlay,
  Stack,
  FormControl,
  InputGroup,
  InputRightElement,
  Input,
} from '@chakra-ui/react'
import Image from 'next/image'

const agencyBackgroundFigure =
  'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201506/storyimage_647_062215030547.jpg'

const AgencyBackground = () => {
  return (
    <Box
      w="100%"
      borderRadius="16px"
      overflow="hidden"
      display={{ base: 'none', tablet: 'block' }}
    >
      <Box position="relative" h="400px">
        <Image
          src={agencyBackgroundFigure}
          alt="agency background figure"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Box>
  )
}

export default AgencyBackground
