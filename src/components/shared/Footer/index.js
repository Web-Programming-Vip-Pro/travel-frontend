import { Stack, Text, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

function Menu({ menu }) {
  return (
    <Stack spacing="8px">
      <Text textStyle="body-1-bold">{menu.title}</Text>
      {menu.data.map((content, index) => (
        <Text
          key={index}
          color="neutrals.4"
          _hover={{ color: 'neutrals.1' }}
          transition="color 0.15s ease-in-out"
        >
          <Link {...content.linkProps}>{content.title}</Link>
        </Text>
      ))}
    </Stack>
  )
}

const Footer = ({ logoImageSrc, copyright }) => {
  const menuData = [
    {
      title: 'Company',
      data: [
        { title: 'About us', linkProps: { href: '/about' } },
        { title: 'Blog', linkProps: { href: '/blog' } },
        { title: 'Press', linkProps: { href: '/press' } },
        { title: 'Contact Us', linkProps: { href: '/contact' } },
      ],
    },
    {
      title: 'Support',
      data: [
        { title: 'Help Center', linkProps: { href: '/helpcenter' } },
        { title: 'Report', linkProps: { href: '/report' } },
      ],
    },
    {
      title: 'Legal',
      data: [
        { title: 'Cookies Policy', linkProps: { href: '/policy' } },
        { title: 'Privacy Policy', linkProps: { href: '/privacy' } },
        { title: 'Terms of Service', linkProps: { href: '/tos' } },
      ],
    },
  ]
  return (
    <Stack
      px={{ mobile: '40px', tablet: '80px', desktop: '160px' }}
      pt={{ mobile: '64px', tablet: '80px' }}
      bg="neutrals.8"
      spacing="24px"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'start', md: 'space-between' }}
        spacing={{ base: '24px', md: 'none' }}
        align="start"
      >
        <Stack>
          <Image
            src={logoImageSrc}
            alt="Logo"
            width={106}
            height={38}
            unoptimized
          />
        </Stack>
        <Menu menu={menuData[0]} />
        <Menu menu={menuData[1]} />
        <Menu menu={menuData[2]} />
      </Stack>
      <Divider colorScheme="neutrals.1" />
      <Text textAlign="center">{copyright}</Text>
    </Stack>
  )
}

export default Footer
