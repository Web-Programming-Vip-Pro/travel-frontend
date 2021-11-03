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
import { useState } from 'react'
import { Icon } from '@iconify/react'
const Discovery = () => {
  const [service, setService] = useState('Stay')
  const serviceList = ['Stay', 'Explore', ` Food & Drink`]
  return (
    <Stack direction={{ mobile: 'column', tablet: 'row' }} pb="48px">
      <Stack
        display={{ mobile: 'none', tablet: 'flex' }}
        direction="row"
        spacing="16px"
        align="center"
      >
        {serviceList.map((item) => (
          <Button
            key={item}
            leftIcon={
              <Icon
                icon="bx:bx-dollar-circle"
                color={item !== service ? '#777E90' : ''}
              />
            }
            px="10px"
            py="6px"
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
