import {
  Box,
  Flex,
  Text,
  Badge,
  Divider,
  Stack,
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
function PlaceCardList({ listPlace }) {
  return (
    <SimpleGrid
      columns={{ mobile: 1, tablet: 3 }}
      spacingY="32px"
      overflow="hidden"
    >
      {listPlace &&
        listPlace.map((item, index) => (
          <Flex
            key={index}
            justify="space-around"
            _hover={{ cursor: 'pointer' }}
          >
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
                  src={item.images.cover}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  position="absolute"
                  unoptimized
                />
                <Badge
                  position="absolute"
                  top="16px"
                  left="16px"
                  textStyle="hairline-2"
                  bg="neutrals.8"
                  p="8px"
                >
                  {item.type === '0'
                    ? 'Stay'
                    : item.type === '1'
                    ? 'Explore'
                    : 'Food & Drink'}
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
                    ${item.price}
                  </Badge>
                </Flex>
                <HStack textStyle="caption-2" color="neutrals.4">
                  <Icon icon="icon-park-outline:router" />
                  <Text>Free wifi</Text>
                  <Icon icon="ion:fast-food-outline" />
                  <Text>Breakfast included</Text>
                </HStack>
                <Divider pt="16px" />
                <Flex pt="16px" justify="center">
                  <Flex direction="row" align="center" pr="8px">
                    <Icon
                      icon="fluent:star-12-filled"
                      color="#FFD166"
                      width="12px"
                    />
                    <Text
                      textStyle="caption-2-bold"
                      color="neutrals-2"
                      pl="4px"
                    >
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
        ))}
    </SimpleGrid>
  )
}
const StayList = ({ children, listPlace, isLoading, triggerPage, limit }) => {
  const [show, setShow] = useState(false)
  return (
    <Box h="fit-content">
      <Box
        overflow="hidden"
        px={{ mobile: '32px', tablet: '80px', desktop: '160px' }}
        pt={{ mobile: '32px', tablet: '32px', desktop: '48px' }}
      >
        {children}
        <InputGroup pb="48px" size="lg">
          <Input placeholder="Search everything"></Input>
          <InputRightElement>
            <IconButton
              icon={<Icon icon="bx:bx-search" width="13px" height="13px" />}
              w="32px"
              height="32px"
              px="0"
              py="0"
            />
          </InputRightElement>
        </InputGroup>
        {isLoading ? (
          <Stack justify="center" align="center">
            <Icon icon="eos-icons:bubble-loading" fontSize="50px" />
          </Stack>
        ) : (
          <Box>
            <PlaceCardList listPlace={listPlace} show={show} />
            <Flex justify="center">
              <Button
                leftIcon={<Icon icon="icon-park-outline:loading-one" />}
                variant="outline"
                border="2px"
                my="64px"
                onClick={triggerPage}
              >
                {listPlace.length < limit ? 'Hide' : 'View All'}
              </Button>
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default StayList
