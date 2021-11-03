import { useRef } from 'react'
import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  useOutsideClick,
} from '@chakra-ui/react'
import Link from 'next/link'

const MobileNavbar = ({ onClose }) => {
  const ref = useRef()
  useOutsideClick({
    ref,
    handler: () => onClose(),
  })
  return (
    <Stack
      position="absolute"
      p="32px"
      w="95vw"
      top="48px"
      right="0px"
      bg="white"
      zIndex={2}
      shadow="2xl"
      borderRadius="24px"
      spacing="24px"
      ref={ref}
    >
      <Text textStyle="body-1-bold" color="neutrals.4">
        <Link href="/city">Discovery</Link>
      </Text>
      <Text textStyle="body-1-bold" color="neutrals.4">
        <Link href="/about">About</Link>
      </Text>
      <Text textStyle="body-1-bold" color="neutrals.4">
        <Link href="/helpcenter">Help Center</Link>
      </Text>
      <Button variant="light">Login</Button>
      <Button>Sign Up</Button>
    </Stack>
  )
}

export default MobileNavbar
