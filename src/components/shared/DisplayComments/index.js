import {
  Spacer,
  HStack,
  Circle,
  Divider,
  Text,
  Flex,
  Box,
  Select,
  useDisclosure,
  Button,
  Stack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import dynamic from 'next/dynamic'
const StarRatings = dynamic(() => import('react-star-ratings'), {
  ssr: false,
})

const DisplayComments = ({ commentsProperties }) => {
  const { isOpen, onToggle } = useDisclosure()
  const commentAmountInHideMode = 3
  const firstComments = commentsProperties?.comments.slice(
    0,
    commentAmountInHideMode
  )
  const fullComments = commentsProperties?.comments

  return (
    <Stack>
      <Flex
        align="center"
        display={{ base: 'none', tablet: 'flex', desktop: 'flex' }}
      >
        <Text textStyle="body-1-bold">{`${commentsProperties.totalCount} comments`}</Text>
        <Spacer />
        <Select
          boxShadow="none !important"
          _hover={{ cursor: 'pointer' }}
          w="150px"
          h="50px"
          border="2px"
        >
          {commentsProperties.sortOptions.map((content, index) => (
            <option onClick={() => onChangeSortType(content)} key={index}>
              {content}
            </option>
          ))}
          ;
        </Select>
      </Flex>
      <Box my="40px">
        {(isOpen ? fullComments : firstComments).map((content, index) => (
          <Box w="100%" key={index}>
            <Flex w="100%">
              <Circle
                overflow="hidden"
                size="48px"
                position="relative"
                mr="20px"
                _hover={{ cursor: 'pointer' }}
              >
                <Image layout="fill" src={content.avatarSrc} alt="avatar" />
              </Circle>
              <Box w="100%">
                <Flex>
                  <Text
                    _hover={{ cursor: 'pointer' }}
                    textStyle="caption-bold"
                    color="neutrals.1"
                  >
                    {content.name}
                  </Text>
                  <Spacer />
                  <StarRatings
                    rating={content.rate}
                    starRatedColor="#FFD166"
                    numberOfStars={5}
                    name="rating"
                    starDimension="13px"
                    starSpacing="5px"
                  />
                </Flex>
                <Text mt="4px" mb="8px" textStyle="caption" color="neutrals.3">
                  {content.commentDetails}
                </Text>
                <HStack spacing="16px">
                  <Text textStyle="caption-2" color="neutrals.4">
                    {content.timeStamp}
                  </Text>
                  <Text
                    _hover={{ cursor: 'pointer' }}
                    textStyle="caption-2-bold"
                  >
                    {' '}
                    Reply{' '}
                  </Text>
                </HStack>
              </Box>
            </Flex>
            <Divider mt="27px" mb="32px" />
          </Box>
        ))}
      </Box>
      <Flex
        display={
          commentsProperties?.comments.length > commentAmountInHideMode
            ? 'flex'
            : 'none'
        }
        justify="center"
      >
        <Button
          leftIcon={<Icon icon="icon-park-outline:loading-one" />}
          variant="outline"
          border="2px"
          my="20px"
          onClick={onToggle}
        >
          {isOpen ? 'Less' : 'Load More'}
        </Button>
      </Flex>
    </Stack>
  )
}

export default DisplayComments
