import {
  Box,
  Flex,
  Text,
  Badge,
  Divider,
  Spacer,
  HStack,
  SimpleGrid,
  Button,
  InputGroup,
  Input,
  IconButton,
  InputRightElement,
} from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useState } from 'react'

const SinglePlaceCard = ({ item }) => {
  return (
    <Flex justify="space-around" _hover={{ cursor: 'pointer' }}>
      <Box
        borderRadius="20px"
        w={{ tablet: '266px', desktop: '352px' }}
        h={{ tablet: '411px', desktop: '417px' }}
        overflow="hidden"
        bg="neutrals.8"
      >
        <Box
          width={{ mobile: '311px', tablet: '266px', desktop: '352px' }}
          height={{ mobile: '240px', desktop: '240px' }}
          position="relative"
        >
          <Image
            src={item.imgSrc}
            alt={item.title}
            layout="fill"
            objectFit="cover"
            position="absolute"
          />
          <Badge
            position="absolute"
            top="16px"
            left="16px"
            textStyle="hairline-2"
            bg="neutrals.8"
            p="8px"
          >
            Stay
          </Badge>
        </Box>

        <Box p="20px">
          <Flex justify="space-between" align="center" pb="8px">
            <Text
              textStyle="body-2-bold"
              color="neutrals.1"
              w="186px"
              wordBreak="break-all"
            >
              {item.title}
            </Text>

            <Badge
              w="48px"
              h="26px"
              variant="outline"
              colorScheme="green"
              textAlign="center"
              lineHeight="26px"
              boxShadow="0 0 0 3px #58C27D;
                    "
            >
              $ {item.price}
            </Badge>
          </Flex>
          <HStack textStyle="caption-2" color="neutrals.4">
            <Icon icon="icon-park-outline:router" />
            <Text>{item.wifi}</Text>
            <Icon icon="ion:fast-food-outline" />
            <Text>{item.breakfast}</Text>
          </HStack>
          <Divider pt="16px" />
          <Flex pt="16px" justify="center">
            <Flex direction="row" align="center" pr="8px">
              <Icon icon="fluent:star-12-filled" color="#FFD166" width="12px" />
              <Text textStyle="caption-2-bold" color="neutrals-2" pl="4px">
                {item.rate}
              </Text>
            </Flex>
            <Text textStyle="caption-2" color="neutrals.4">
              ({item.reviews} reviews)
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default SinglePlaceCard
