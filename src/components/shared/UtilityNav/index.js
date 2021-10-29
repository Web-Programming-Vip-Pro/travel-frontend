import {
  Stack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
const Discovery = () => {
  return (
    <Stack direction={{ mobile: 'column', tablet: 'row' }} pb="48px">
      <Stack
        display={{ mobile: 'none', tablet: 'flex' }}
        direction="row"
        spacing="16px"
        align="center"
      >
        <Button
          leftIcon={<Icon icon="bx:bx-dollar-circle" />}
          px="0"
          py="0"
          w="80px"
          h="28px"
          bg="neutrals.3"
          variant="none"
        >
          <Text textStyle="button-2" color="neutrals.8">
            Stay
          </Text>
        </Button>
        <Button
          leftIcon={<Icon icon="bx:bx-dollar-circle" color="#777E90" />}
          px="0"
          py="0"
          w="80px"
          h="28px"
          variant="ghost"
        >
          <Text textStyle="button-2" color="neutrals.4">
            Explore
          </Text>
        </Button>
        <Button
          leftIcon={<Icon icon="bx:bx-dollar-circle" color="#777E90" />}
          px="0"
          py="0"
          w="135px"
          h="28px"
          variant="ghost"
        >
          <Text textStyle="button-2" color="neutrals.4">
            Food &amp; Drink
          </Text>
        </Button>
      </Stack>
      <Spacer />
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon icon="ic:round-keyboard-arrow-down" />}
          variant="light"
          display={{ mobile: 'flex', tablet: 'none' }}
        >
          Stay
        </MenuButton>
        <MenuList>
          <MenuItem>The grand resort</MenuItem>
          <MenuItem>The grand resort</MenuItem>
          <MenuItem>The grand resort</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<Icon icon="ic:round-keyboard-arrow-down" />}
          variant="light"
        >
          Recently added
        </MenuButton>
        <MenuList>
          <MenuItem>The grand resort</MenuItem>
          <MenuItem>The grand resort</MenuItem>
          <MenuItem>The grand resort</MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  )
}

export default Discovery
