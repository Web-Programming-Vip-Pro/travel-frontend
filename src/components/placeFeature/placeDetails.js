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
  Stack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { useSession } from 'next-auth/react'
import {
  addTransaction,
  useTransactionStatus,
  mutateTransactionStatus,
} from '@/services/transaction'

function ButtonReserve({ transactionStatus, placeId, userId }) {
  const toast = useToast()
  let buttonState = {
    text: 'Reverse',
    bg: 'primary.1',
  }
  if (transactionStatus && transactionStatus === '0') {
    buttonState = { text: 'Wait for confirmation', bg: 'yellow.500' }
  }
  if (transactionStatus && transactionStatus === '1') {
    buttonState = { text: 'Booking', bg: 'green.500' }
  }

  async function handleReserve() {
    const response = await addTransaction({ placeId })
    if (response.success) {
      toast({
        title: 'Success',
        description: 'Your booking request has been sent to the host',
        status: 'success',
        isClosable: true,
      })
    } else {
      toast({
        title: 'Error',
        description: response.message,
        status: 'error',
        isClosable: true,
      })
    }
    mutateTransactionStatus(placeId, userId)
  }

  return (
    <Flex justify="center" my="32px">
      <Button
        height="48px"
        width="full"
        rightIcon={<Icon icon="bx:bx-shopping-bag" />}
        textStyle="button-1"
        color="neutrals.8"
        disabled={buttonState.text !== 'Reverse'}
        bg={buttonState.bg}
        onClick={handleReserve}
      >
        {buttonState.text}
      </Button>
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

function PlaceDetailRight({ agencyAvatarSrc, rightSectionProps, placeId }) {
  const { data: session, status } = useSession()
  const isLoggedIn = status === 'authenticated'
  const userId = isLoggedIn ? session?.user?.id : null
  const { transactionStatus } = useTransactionStatus(placeId, userId)

  return (
    <Box
      p="32px"
      width={{ base: 'full', tablet: '500px' }}
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
      {isLoggedIn && (
        <ButtonReserve
          transactionStatus={transactionStatus}
          placeId={placeId}
          userId={userId}
        />
      )}
      <ListAmentities amentities={rightSectionProps.amentities} />
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

const PlaceDetails = ({ placeDetailsProps }) => {
  return (
    <Flex justify="center">
      <Stack
        w="100%"
        spacing="48px"
        direction={{ base: 'column', tablet: 'row' }}
      >
        <PlaceDetailLeft
          agencyAvatarSrc={placeDetailsProps.agencyAvatarSrc}
          leftSectionProps={placeDetailsProps.leftSectionProps}
        />
        <Spacer />
        <PlaceDetailRight
          agencyAvatarSrc={placeDetailsProps.agencyAvatarSrc}
          rightSectionProps={placeDetailsProps.rightSectionProps}
          placeId={placeDetailsProps.id}
        />
      </Stack>
    </Flex>
  )
}

export default PlaceDetails
