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
import { Icon } from '@iconify/react'
import { useState } from 'react'
const HeaderWish = ({ serviceType }) => {
  const [service, setService] = useState(serviceType[0])
  return (
    <Box
      px={{ mobile: '32px', tablet: '80px', desktop: '160px' }}
      mb={{ tablet: '-20px', desktop: '260px' }}
    >
      {/* Direction */}
      <Flex
        display={{ mobile: 'none', tablet: 'flex' }}
        h={{ desktop: '40px' }}
        justify="space-between"
        align="center"
        mb="48px"
      >
        <Button
          leftIcon={<Icon icon="ic:round-keyboard-arrow-left" />}
          variant="light"
        >
          Go home
        </Button>
        <Breadcrumb
          spacing="8px"
          separator={
            <Icon icon="ic:round-keyboard-arrow-right" color="#B1B5C4" />
          }
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="neutrals.4" textStyle="button-2">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#" color="neutrals.5" textStyle="button-2">
              WishList
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
            Wishlists
          </Text>
          <Text textStyle="body-2-bold" color="neutrals.4">
            You added 8 items to wishlist
          </Text>
        </Stack>
        <Stack
          direction={{ mobile: 'column', tablet: 'row' }}
          display={{ mobile: 'none', tablet: 'flex' }}
        >
          {serviceType.map((item) => (
            <Button
              key={item}
              h="28px"
              bg={item === service ? 'neutrals.3' : ''}
              variant={item !== service ? 'ghost' : 'none'}
              onClick={() => setService(item)}
            >
              <Text
                textStyle="button-2"
                color={item === service ? 'neutrals.8' : 'neutrals.4'}
              >
                {item}
              </Text>
            </Button>
          ))}
        </Stack>
        {/* Only display in mobile */}
        <Divider display={{ tablet: 'none' }} border="1px" width="100vw" />
        {/* <Menu>
          <MenuButton
            as={Button}
            rightIcon={<Icon icon="ic:round-keyboard-arrow-down" />}
            variant="light"
            display={{ mobile: 'flex', tablet: 'none' }}
            w="100%"
          >
            Stays
          </MenuButton>
          <MenuList>
            <MenuItem>The grand resort</MenuItem>
            <MenuItem>The grand resort</MenuItem>
            <MenuItem>The grand resort</MenuItem>
          </MenuList>
        </Menu>
         */}
        <Select
          display={{ mobile: 'block', tablet: 'none' }}
          placeholder="Stays"
        >
          <option value="option2">Flight</option>
          <option value="option3">Cars</option>
          <option value="option4">Thing to do</option>
        </Select>
      </Stack>
    </Box>
  )
}

export default HeaderWish
