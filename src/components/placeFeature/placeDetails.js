import {
  Button,
  Spacer,
  HStack,
  Circle,
  Divider,
  Text,
  Flex,
  ListItem,
  Box,
  List,
  Collapse,
} from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'

const agencyAvatarSrc =
  'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg'
const reportHostLink = { href: '#' }

const leftSectionProps = {
  title: 'Private room in house',
  agencyName: 'Zoe Towne',
  agencyDetails:
    "Described by Queenstown House & Garden magazine as having 'one of the best views we've ever seen' you will love relaxing in this newly built, architectural house sitting proudly on Queenstown Hill.paragraphIndex: 2 Enjoy breathtaking 180' views of Lake Wakatipu from your well appointed & privately accessed bedroom with modern en suite and floor-to-ceiling windows 'Your private patio takes in the afternoon sun, letting you soak up unparalleled lake and mountain views by day and the stars & city lights by night.' 'Your private patio takes in the afternoon sun, letting you soak up unparalleled lake and mountain views by day and the stars & city lights by night.' 'Your private patio takes in the afternoon sun, letting you soak up unparalleled lake and mountain views by day and the stars & city lights by night.' 'Your private patio takes in the afternoon sun, letting you soak up unparalleled lake and mountain views by day and the stars & city lights by night.",
}
const rightSectionProps = {
  price: 102,
  rate: 4.8,
  reviewNumbers: 256,
  amentities: [
    { icon: 'ph:toilet-paper-light', title: 'Free clean bathroom' },
    { icon: 'la:hamburger', title: 'Breakfast included' },
    { icon: 'gg:modem', title: 'Free wifi 24/7' },
    { icon: 'eva:monitor-outline', title: 'Free computer' },
  ],
  reportPropertyLink: { href: '#' },
}
const PlaceDetails = ({ placeDetailsProps }) => {
  return (
    <Flex justify="center">
      <HStack w="100%" spacing="48px">
        <PlaceDetailLeft
          agencyAvatarSrc={placeDetailsProps.agencyAvatarSrc}
          leftSectionProps={placeDetailsProps.leftSectionProps}
        />
        <Spacer />
        <PlaceDetailRight
          agencyAvatarSrc={placeDetailsProps.agencyAvatarSrc}
          rightSectionProps={placeDetailsProps.rightSectionProps}
        />
      </HStack>
    </Flex>
  )
}

function PlaceDetailLeft({ agencyAvatarSrc, leftSectionProps }) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Text textStyle="headline-4">{leftSectionProps.title}</Text>
      <Flex _hover={{ cursor: 'pointer' }} align="center">
        <Box display={{ base: 'block', tablet: 'block', desktop: 'none' }}>
          <Text textStyle="caption" color="neutrals.4">
            Hosted by
          </Text>
        </Box>
        <Box display={{ base: 'none', tablet: 'none', desktop: 'block' }}>
          <Text textStyle="caption" color="neutrals.4">
            Agency:
          </Text>
        </Box>
        <Circle
          overflow="hidden"
          size="25px"
          position="relative"
          ml="4px"
          mr="12px"
        >
          <Image
            unoptimized={true}
            layout="fill"
            src={agencyAvatarSrc}
            alt="avatar"
          />
        </Circle>
        <Text textStyle="body-2-bold">{leftSectionProps.agencyName}</Text>
      </Flex>
      <Divider mt="24px" mb="40px" />
      <Collapse in={!isOpen} startingHeight="100px">
        <Text
          wordBreak="break-word"
          textStyle="body-2"
          color="neutrals.4"
          py="15px"
        >
          {leftSectionProps.agencyDetails}
        </Text>
      </Collapse>
      <Button
        onClick={onToggle}
        textStyle="button-2"
        mt="60px"
        colorScheme="gray"
        variant="outline"
      >
        {isOpen ? 'Less' : 'More Detail'}
      </Button>
    </Box>
  )
}

function PlaceDetailRight({ agencyAvatarSrc, rightSectionProps }) {
  return (
    <Box
      p="32px"
      display={{ base: 'none', tablet: 'block', desktop: 'block' }}
      w={{ base: '0', tablet: '378px', desktop: '448px' }}
      borderRadius="24px"
      border="1px solid #E6E8EC"
      boxShadow="0px 64px 64px -48px rgba(15, 15, 15, 0.08)"
      h="max-content"
    >
      <Flex>
        <Flex direction="column">
          <Text textStyle="headline-4">{`$${rightSectionProps.price}`}</Text>
          <HStack mt="10px" spacing="8px">
            <Box color="secondary.3">
              <Icon icon="clarity:star-solid" />
            </Box>
            <Text textStyle="caption-bold">{rightSectionProps.rate}</Text>
            <Text
              textStyle="caption"
              color="neutrals.4"
            >{`(${rightSectionProps.reviewNumbers} reviews)`}</Text>
          </HStack>
        </Flex>
        <Spacer />
        <Flex align="center">
          <Circle
            overflow="hidden"
            size="64px"
            position="relative"
            _hover={{ cursor: 'pointer' }}
          >
            <Image
              unoptimized={true}
              layout="fill"
              src={agencyAvatarSrc}
              alt="avatar"
            />
          </Circle>
        </Flex>
      </Flex>
      <Flex justify="center" my="32px">
        <Button
          h="48px"
          w="auto"
          mr="8px"
          rightIcon={<Icon icon="ant-design:plus-outlined" />}
          textStyle="button-1"
          colorScheme="gray"
          variant="outline"
        >
          Save
        </Button>
        <Button
          h="48px"
          w={{ tablet: '193px', desktop: '263px' }}
          rightIcon={<Icon icon="bx:bx-shopping-bag" />}
          textStyle="button-1"
          color="neutrals.8"
          bg="primary.1"
        >
          Reserve
        </Button>
      </Flex>
      <ListAmentities amentities={rightSectionProps.amentities} />
      <Link {...rightSectionProps.reportPropertyLink}>
        <Flex _hover={{ cursor: 'pointer' }} justify="center" align="center">
          <Box mr="8px" color="neutrals.4">
            <Icon icon="cil:flag-alt" />
          </Box>
          <Text textStyle="caption-2" color="neutrals.4">
            Report this property
          </Text>
        </Flex>
      </Link>
    </Box>
  )
}

function ListAmentities({ amentities }) {
  return (
    <Box>
      <Text textStyle="body-1-bold">Amentities</Text>
      <List my="32px" spacing="24px">
        {amentities.map((content, index) => (
          <ListItem
            key={index}
            transition="color 0.15s ease-in-out"
            w="max-content"
          >
            <Flex align="center">
              <Box color="neutrals.4" mr="18px">
                <Icon fontSize="20px" icon={content.icon} />
              </Box>
              <Text
                textStyle="body-2-bold"
                color="neutrals.4"
                display="inline-block"
              >
                {content.title}
              </Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
export default PlaceDetails
