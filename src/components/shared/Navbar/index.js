import {
  Box,
  Text,
  Flex,
  Avatar,
  Stack,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import Notification from './Notification'
import MobileNavbar from './MobileNavbar'
import AuthenticationModal from './AuthenticationModal'
import { useState } from 'react'

function UserNav({ user, openModal }) {
  if (user)
    return (
      <>
        <Notification />
        <Avatar name={user.name} src={user.avatarSrc} />
      </>
    )
  return (
    <Stack
      direction="row"
      display={{ base: 'none', tablet: 'flex' }}
      spacing="18px"
    >
      <Button variant="light" onClick={() => openModal(true)}>
        Login
      </Button>
      <Button onClick={() => openModal(false)}>Sign Up</Button>
    </Stack>
  )
}

const Navbar = ({ user, logoImageSrc }) => {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const {
    isOpen: isOpenModal,
    onClose: onCloseModal,
    onOpen: onOpenModal,
  } = useDisclosure()
  const [isSignInModal, setIsSignInModal] = useState(false)
  function openModal(isSignIn) {
    setIsSignInModal(isSignIn)
    onOpenModal()
  }

  return (
    <Flex
      px={{ mobile: '40px', tablet: '80px', desktop: '160px' }}
      py="24px"
      align="center"
      justify="space-between"
    >
      <Image
        src={logoImageSrc}
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
          display={{ base: 'none', tablet: 'flex' }}
        >
          <Text
            color="neutrals.4"
            _hover={{ color: 'black' }}
            transition="color 0.15s ease-in-out"
          >
            <Link href="/city">Discovery</Link>
          </Text>
          <Text
            color="neutrals.4"
            _hover={{ color: 'black' }}
            transition="color 0.15s ease-in-out"
          >
            <Link href="/helpcenter">Help Center</Link>
          </Text>
        </Stack>
        <Stack direction="row" spacing="36px" align="center">
          <UserNav user={user} openModal={openModal} />
        </Stack>
        <Box
          display={{ mobile: 'block', tablet: 'none' }}
          position="relative"
          zIndex={2}
        >
          <Icon icon="mdi:menu" width="32" height="32" onClick={onToggle} />
          <AnimatePresence exitBeforeEnter>
            {isOpen && <MobileNavbar onClose={onClose} />}
          </AnimatePresence>
        </Box>
      </Stack>
      <AuthenticationModal
        isOpen={isOpenModal}
        onClose={onCloseModal}
        isSignIn={isSignInModal}
      />
    </Flex>
  )
}

export default Navbar
