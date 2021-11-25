import {
  Text,
  Flex,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  FormControl,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'

const title = 'Contact Us'

const HelpHero = () => {
  let [textSearch, setTextSearch] = useState('')

  function handleChange(event) {
    var keyWord = event.target.value
    setTextSearch(keyWord)
  }
  return (
    <Flex
      width="full"
      height="100vh"
      background="linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(https://i.imgur.com/r1vgyaY.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      align="center"
      justify="center"
    >
      <Stack justify="center">
        <Stack
          justify="center"
          spacing="16px"
          align="center"
          textAlign="center"
        >
          <Text
            w={{ tablet: '586px', base: '283px' }}
            textStyle={{ tablet: 'hero', base: 'headline-2' }}
            color="white"
          >
            {title}
          </Text>
        </Stack>
        <FormControl></FormControl>
      </Stack>
    </Flex>
  )
}

export default HelpHero
