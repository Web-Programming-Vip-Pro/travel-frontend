import {
  Text,
  Flex,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'

const title = 'Support'
const shortDescription =
  'Stacks is a production-ready library of stackable content blocks built in React Native.'
var textSearch

function searchHelp(event) {}

function handleChange(event) {
  textSearch = event.target.value
}
const HelpHero = () => {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      align="center"
      justify="center"
    >
      <Stack w={{ desktop: '586px', tablet: '586px', base: '283px' }}>
        <Stack spacing="16px" align="center" textAlign="center">
          <Text textStyle="hero">{title}</Text>
          <Text w={{ base: '283px', tablet: '482px', desktop: '482px' }}>
            {shortDescription}
          </Text>
        </Stack>
        <form onSubmit={searchHelp}>
          <InputGroup>
            <Input
              type="text"
              onChange={handleChange}
              value={textSearch}
              textStyle="body-2"
              h="72px"
              borderRadius="64px"
              border="2px solid #F4F5F6"
              boxShadow="0px 40px 32px -24px rgba(15, 15, 15, 0.12)"
              placeholder="Search anything"
              isFullWidth="true"
            />
            <InputRightElement
              type="submit"
              color="primary.1"
              rotate="270deg"
              position="relative"
              top="18px"
              right="50px"
            >
              <Icon
                icon="el:search-alt"
                borderRadius="full"
                type="submit"
                fontSize="40px"
              />
            </InputRightElement>
          </InputGroup>
        </form>
      </Stack>
    </Flex>
  )
}

export default HelpHero
