import {
  Stack,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Spacer,
  Select,
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
      <Select
        placeholder="Stay"
        display={{ mobile: 'block', tablet: 'none' }}
        border="none"
      >
        <option value="option1">Explore</option>
        <option value="option2">Food &amp; Drink</option>
      </Select>
      <Select
        placeholder="Recently added"
        w={{ tablet: '256px' }}
        border="none"
      >
        <option value="option1">The grand resort</option>
        <option value="option2">The grand resort</option>
        <option value="option3">The grand resort</option>
      </Select>
    </Stack>
  )
}

export default Discovery
