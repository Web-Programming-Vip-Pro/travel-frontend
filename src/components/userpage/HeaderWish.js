import {
  Box,
  Flex,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Stack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Divider,
  Select,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
const HeaderWish = ({ totalWishlist }) => {
  return (
    <Box
      px={{ mobile: '32px', tablet: '80px', desktop: '160px' }}
      mb={{ tablet: '-20px' }}
    >
      {/* Direction */}
      <Flex
        display={{ mobile: 'none', tablet: 'flex' }}
        h={{ desktop: '40px' }}
        justify="space-between"
        align="center"
        mb="48px"
      >
        <Link href="/" passHref>
          <Button
            leftIcon={<Icon icon="ic:round-keyboard-arrow-left" />}
            variant="light"
          >
            Go home
          </Button>
        </Link>

        <Breadcrumb
          spacing="8px"
          separator={
            <Icon icon="ic:round-keyboard-arrow-right" color="#B1B5C4" />
          }
        >
          <BreadcrumbItem>
            <Link href="/" passHref>
              <BreadcrumbLink href="#" color="neutrals.4" textStyle="button-2">
                Home
              </BreadcrumbLink>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="neutrals.5" textStyle="button-2">
              Wishlist
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
      {/* WishLists */}
      <Stack
        justify="space-between"
        align="center"
        direction={{ mobile: 'column', tablet: 'row' }}
        spacing="32px"
      >
        <Stack spacing="12px">
          <Text textStyle="headline-2" color="neutrals.2">
            Wishlist
          </Text>
          <Text textStyle="body-2-bold" color="neutrals.4">
            You added {totalWishlist} places to wishlist
          </Text>
        </Stack>
        {/* Only display in mobile */}
      </Stack>
    </Box>
  )
}

export default HeaderWish
