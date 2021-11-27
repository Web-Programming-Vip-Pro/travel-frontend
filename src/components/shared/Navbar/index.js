import { useState, useRef } from 'react'
import {
  Box,
  Text,
  Flex,
  Avatar,
  Stack,
  Button,
  Divider,
  useDisclosure,
  useTheme,
  useOutsideClick,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'
import AuthenticationModal from './AuthenticationModal'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

const MotionStack = motion(Stack)
const MotionText = motion(Text)
const MotionBox = motion(Box)

function Dropdown({ onClose }) {
  const router = useRouter()
  function Field({ icon, text, link }) {
    const theme = useTheme()
    const variants = {
      hover: {
        color: theme.colors.neutrals[2],
        duration: 0.15,
      },
    }
    return (
      <MotionStack
        direction="row"
        align="center"
        color="neutrals.4"
        whileHover="hover"
        cursor="pointer"
        px="20px"
        minHeight="48px"
        onClick={() => {
          router.push(link)
        }}
      >
        <motion.span variants={variants}>
          <Icon icon={icon} height={20} width={20} />
        </motion.span>
        <MotionText
          color="neutrals.4"
          variants={variants}
          fontWeight="semibold"
        >
          {text}
        </MotionText>
      </MotionStack>
    )
  }
  const ref = useRef(null)
  useOutsideClick({ ref, handler: () => onClose(false) })
  return (
    <Stack bg="white" shadow="md" borderRadius="20px" p="16px" ref={ref}>
      <Field
        icon="bx:bx-message-square-detail"
        text="Bookings"
        link="/user/bookings"
      />
      <Field
        icon="heroicons-outline:home"
        text="Wishlist"
        link="/user/wishlist"
      />
      <Divider />
      <Stack direction="row">
        <Link href="/user" passHref>
          <Button fontSize="14px">Account</Button>
        </Link>
        <Button
          fontSize="14px"
          variant="light"
          onClick={() => signOut({ redirect: false })}
        >
          Log Out
        </Button>
      </Stack>
    </Stack>
  )
}

function UserNav({ openModal }) {
  const { data: user } = useSession()
  const { isOpen, onClose, onToggle } = useDisclosure()
  if (user)
    return (
      <>
        <Stack position="relative">
          <Avatar
            name={user.user.name}
            src={user.user.avatar}
            onClick={onToggle}
            cursor="pointer"
          />
          <AnimatePresence exitBeforeEnter>
            {isOpen && (
              <MotionBox
                position="absolute"
                top="72px"
                right={{ base: '-84px', tablet: '-28px', desktop: '-68px' }}
                zIndex={2}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
              >
                <Dropdown onClose={onClose} />
              </MotionBox>
            )}
          </AnimatePresence>
        </Stack>
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

const Navbar = ({ logoImageSrc }) => {
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
      <Link href="/" passHref>
        <a>
          <Image
            src={logoImageSrc}
            alt="Logo"
            width={106}
            height={38}
            unoptimized
          />
        </a>
      </Link>
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
            <Link href="/contact">Contact Us</Link>
          </Text>
        </Stack>
        <Stack direction="row" spacing="36px" align="center">
          <UserNav openModal={openModal} />
        </Stack>
        <Box
          display={{ mobile: 'block', tablet: 'none' }}
          position="relative"
          zIndex={2}
        >
          <Icon icon="mdi:menu" width="32" height="32" onClick={onToggle} />
          <AnimatePresence exitBeforeEnter>
            {isOpen && <MobileNavbar openModal={openModal} onClose={onClose} />}
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
