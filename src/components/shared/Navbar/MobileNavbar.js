import { useRef } from 'react'
import { Stack, Button, Text, useOutsideClick } from '@chakra-ui/react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'

const MotionStack = motion(Stack)

const MobileNavbar = ({ openModal, onClose }) => {
  const { status } = useSession()
  const ref = useRef()
  useOutsideClick({
    ref,
    handler: () => onClose(),
  })

  return (
    <MotionStack
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      position="absolute"
      p="32px"
      w={{ base: '85vw', sm: '90vw', md: '80vw' }}
      top="72px"
      right={{ base: '-12px', tablet: '-20px' }}
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
      {status !== 'authenticated' && (
        <>
          <Button variant="light" onClick={() => openModal(true)}>
            Login
          </Button>
          <Button onClick={() => openModal(false)}>Sign Up</Button>
        </>
      )}
    </MotionStack>
  )
}

export default MobileNavbar
