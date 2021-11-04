import {
  Text,
  Stack,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'

const SignInBox = () => {
  return (
    <Stack spacing="32px" align="center" mb="4px">
      <Text textStyle="headline-3">Sign in</Text>
      <Stack spacing="16px">
        <FormControl>
          <InputGroup>
            <Input
              type="text"
              px="14px"
              py="16px"
              minH="48px"
              borderRadius="90px"
              variant="field"
              placeholder="Email"
            />
            <InputRightElement top={1}>
              <Icon icon="line-md:email" color="gray" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <Input
              type="password"
              px="14px"
              py="16px"
              minH="48px"
              borderRadius="90px"
              placeholder="Password"
            />
            <InputRightElement top={1}>
              <Icon icon="ic:outline-remove-red-eye" color="gray" />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button>Login</Button>
      </Stack>
      <Text textStyle="caption-2-bold" color="neutrals.3" fontWeight="bold">
        Forgot Password
      </Text>
    </Stack>
  )
}

export default SignInBox
