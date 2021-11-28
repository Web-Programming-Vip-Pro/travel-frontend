import { Stack, Text, Divider } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'

const NEXT_PUBLIC_AGENCY_URL = process.env.NEXT_PUBLIC_AGENCY_URL

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
        { title: 'About', linkProps: { href: '/about' } },
        { title: 'Agency', linkProps: { href: NEXT_PUBLIC_AGENCY_URL } },
        { title: 'Contact Us', linkProps: { href: '/contact' } },
      ],
    },
    {
      title: 'Legal',
      data: [
        { title: 'Privacy Policy', linkProps: { href: '/privacy-policy' } },
        { title: 'Term of Services', linkProps: { href: '/term-of-services' } },
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
        direction={{ base: 'column', sm: 'row' }}
        justify={{ base: 'start', sm: 'space-between' }}
        spacing={{ base: '24px', sm: 'none' }}
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
      </Stack>
      <Divider colorScheme="neutrals.1" />
      <Stack pb="24px">
        <Text textAlign="center">{copyright}</Text>
      </Stack>
    </Stack>
  )
}

export default Footer
