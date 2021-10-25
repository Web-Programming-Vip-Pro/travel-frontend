import {
  Box,
  Text,
  Flex,
  Avatar,
  Stack,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import Notification from './Notification'

function UserNav({ user }) {
  const isMobileScreen = useBreakpointValue({
    base: true,
    tablet: false,
  })
  if (user)
    return (
      <>
        <Notification />
        <Avatar name={user.name} src={user.avatarSrc} />
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

const Navbar = ({ user, logoImageSrc }) => {
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
          display={{ mobile: 'none', tablet: 'flex' }}
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
