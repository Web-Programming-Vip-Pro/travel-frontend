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
import AgencyBackground from '@/components/agencyFeature/AgencyBackground'
import AgencyInforCard from '@/components/agencyFeature/AgencyInforCard'

const Agency = () => {
  return (
    <Box>
      <Box px={{ tablet: '40px', desktop: '80px' }}>
        <AgencyBackground />
      </Box>
      <Box px={{ base: '32px', tablet: '80px', desktop: '160px' }}>
        <Flex>
          <Box w="100%">
            <AgencyInforCard />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Agency
