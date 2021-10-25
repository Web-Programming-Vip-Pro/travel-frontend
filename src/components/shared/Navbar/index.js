import {
  Box,
  Text,
  Flex,
  Avatar,
  Stack,
  useDisclosure,
  Divider,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useOutsideClick } from '@chakra-ui/hooks'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

function Notification({ isNewMessage }) {
  function NewMessageDot() {
    return (
      <Box
        position="absolute"
        w={3}
        h={3}
        borderRadius="full"
        bg="primary.4"
        top={-2}
        right={-2}
      ></Box>
    )
  }

  function MessageBox() {
    function Message() {
      return (
        <Stack
          direction="row"
          spacing="24px"
          p="16px"
          _hover={{ bg: 'neutrals.7' }}
          transitionProperty="background"
          transitionDuration="0.2s"
          transitionTimingFunction="ease-in-out"
          borderRadius="24px"
        >
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Stack spacing="8px" minW="300px">
            <Text textStyle="subheading">First Agency</Text>
            <Text>Your booking is confirmed</Text>
          </Stack>
        </Stack>
      )
    }
    return (
      <Stack
        px="32px"
        py="40px"
        borderRadius="24px"
        boxShadow="0px 16px 64px -24px rgb(31 47 70 / 40%)"
        position="absolute"
        top="calc(100% + 32px)"
        right={{ mobile: null, tablet: '-96px', desktop: '-144px' }}
        spacing="16px"
      >
        <Text textStyle="body-1-bold">Notification</Text>
        <Divider />
        <Flex direction="column">
          <Message />
          <Message />
          <Message />
        </Flex>
      </Stack>
    )
  }
  const { isOpen, onToggle, onClose } = useDisclosure()
  const notificationIconRef = useRef()
  useOutsideClick({
    ref: notificationIconRef,
    handler: () => onClose(),
  })

  return (
    <>
      <Box position="relative" ref={notificationIconRef}>
        <Box
          color={isOpen ? 'black' : 'gray'}
          onClick={onToggle}
          background="white"
          px="0"
          py="0"
        >
          <Icon icon="clarity:notification-line" width="24" height="24" />
        </Box>
        <NewMessageDot />
        {isOpen && <MessageBox />}
      </Box>
    </>
  )
}

function UserNav({ user }) {
  const isMobileScreen = useBreakpointValue({
    base: true,
    tablet: false,
  })
  if (user)
    return (
      <>
        <Notification />
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </>
    )
  return (
    <>
      <Button variant="light" display={{ mobile: 'none', tablet: 'block' }}>
        Login
      </Button>
      <Button size={isMobileScreen ? 'small' : 'medium'}>Sign Up</Button>
    </>
  )
}

const Navbar = ({ user }) => {
  return (
    <Flex
      px={{ mobile: '40px', tablet: '80px', desktop: '160px' }}
      py="24px"
      align="center"
      justify="space-between"
    >
      <Image
        src="https://ui8-fleet-html.herokuapp.com/img/logo-dark.svg"
        alt="Logo"
        width={106}
        height={38}
        unoptimized
      />
      <Stack direction="row" align="center" spacing="36px">
        <Stack
          direction="row"
          spacing="36px"
          align="center"
          display={{ mobile: 'none', tablet: 'flex' }}
        >
          <Link href="/city" passHref>
            <Text>Discovery</Text>
          </Link>
          <Link href="/helpcenter" passHref>
            <Text>Help Center</Text>
          </Link>
        </Stack>
        <Stack direction="row" spacing={user ? '36px' : '18px'} align="center">
          <UserNav user={user} />
        </Stack>
        <Box display={{ mobile: 'block', tablet: 'none' }}>
          <Icon icon="mdi:menu" width="32" height="32" />
        </Box>
      </Stack>
    </Flex>
  )
}

export default Navbar
