import { Box, Stack, Flex, Text, Select } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
const Setting = ({ children }) => {
  const router = useRouter()
  const [menu, setMenu] = useState([
    {
      icon: 'carbon:user',
      href: '/user/settings',
      type: 'Personal info',
      active: true,
    },
    {
      icon: 'bx:bx-lock',
      href: '/user/settings/login',
      type: 'Login and security',
      active: false,
    },
  ])
  function activeRoute(currentRoute) {
    setMenu(
      menu.map((item) => ({
        ...item,
        active: item.href === currentRoute,
      }))
    )
  }
  useEffect(() => {
    activeRoute(router.pathname)
  }, [router.pathname])

  return (
    <>
      <Stack
        py={{ mobile: '32px', tablet: '64px', desktop: '80px' }}
        px={{ mobile: '32px', tablet: '80px', desktop: '160px' }}
        spacing={{ tablet: '32px', desktop: '128px' }}
        direction={{ mobile: 'column', tablet: 'row' }}
      >
        <Stack
          display={{ mobile: 'none', tablet: 'flex' }}
          border="1px solid #F4F5F6"
          spacing="40px"
          h="fit-content"
          p="48px"
          shadow="xl"
          borderRadius="16px"
          bg="neutrals.8"
        >
          {menu.map((item, index) => (
            <Flex
              align="center"
              key={index}
              color={item.active ? 'neutrals.2' : 'neutrals.4'}
            >
              <Icon icon={item.icon} />
              <Link href={item.href} passHref>
                <Text
                  ml="20px"
                  textStyle="button-2"
                  fontWeight="700"
                  color={item.active ? 'neutrals.2' : 'neutrals.4'}
                  _hover={{ cursor: 'pointer' }}
                >
                  {item.type}
                </Text>
              </Link>
            </Flex>
          ))}
        </Stack>
        <Box display={{ mobile: 'block', tablet: 'none' }}>
          <Select
            onChange={(e) => router.push(e.target.value)}
            defaultValue={router.pathname}
          >
            {menu.map((item, index) => (
              <Link key={index} href={item.href} passHref>
                <option value={item.href}>{item.type}</option>
              </Link>
            ))}
          </Select>
        </Box>
        {children}
      </Stack>
    </>
  )
}

export default Setting
