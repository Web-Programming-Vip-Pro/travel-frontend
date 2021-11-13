import { Box, Stack, Flex, Text, Select } from '@chakra-ui/react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useState } from 'react'
const Setting = ({ children }) => {
  const [type, setType] = useState('Personal info')
  const typeSetting = [
    {
      icon: 'carbon:user',
      href: '/user/settings',
      type: 'Personal info',
    },
    {
      icon: 'bx:bx-lock',
      href: '/user/settings/login',
      type: 'Login and security',
    },
    {
      icon: 'fluent:payment-28-regular',
      href: '/user/settings',
      type: 'Payments',
    },
    {
      icon: 'grommet-icons:notification',
      href: '/user/settings/notification',
      type: 'Notification',
    },
  ]
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
          boxShadow="0px 64px 64px -48px rgba(15, 15, 15, 0.08);"
          borderRadius="16px"
          bg="neutrals.8"
        >
          {typeSetting.map((item, index) => (
            <Flex
              align="center"
              key={index}
              color={item.type == type ? 'neutrals.2' : 'neutrals.4'}
            >
              <Icon icon={item.icon} />
              <Link href={item.href}>
                <Text
                  ml="20px"
                  textStyle="button-2"
                  fontWeight="700"
                  color={item.type == type ? 'neutrals.2' : 'neutrals.4'}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => {
                    setType(item.type)
                  }}
                >
                  {item.type}
                </Text>
              </Link>
            </Flex>
          ))}
        </Stack>
        <Box display={{ mobile: 'block', tablet: 'none' }}>
          <Select>
            {typeSetting.map((item, index) => (
              <Link key={index} href={item.href}>
                <option value={item.type}>{item.type}</option>
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
