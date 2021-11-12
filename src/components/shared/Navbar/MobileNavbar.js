import { useRef } from 'react'
import { Stack, Button, Text, useOutsideClick } from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useUserStore } from '@/store/user'

const MotionStack = motion(Stack)

const MobileNavbar = ({ onClose }) => {
  const ref = useRef()
  useOutsideClick({
    ref,
    handler: () => onClose(),
  })
  const user = useUserStore((state) => state.user)

  return (
    <MotionStack
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      position="absolute"
      p="32px"
      w={{ base: '90vw', md: '80vw' }}
      top="48px"
      right={{ base: '-10px', tablet: '-20px' }}
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
      {!user && (
        <>
          <Button variant="light">Login</Button>
          <Button>Sign Up</Button>
        </>
      )}
    </MotionStack>
  )
}

export default MobileNavbar
