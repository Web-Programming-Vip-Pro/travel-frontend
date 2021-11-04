import {
  Stack,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  chakra,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'

const SignUpBox = () => {
  return (
    <Stack spacing="32px" align="center">
      <Stack spacing="12px" align="center">
        <Text textStyle="headline-3">Sign Up on Travel</Text>
        <Text textStyle="body-2" color="neutrals.4">
          Use Your Email to Sign up
        </Text>
      </Stack>
      <Stack>
        <InputGroup>
          <Input
            type="text"
            borderRadius="90px"
            size="lg"
            placeholder="Enter your email"
            fontSize="14"
            _placeholder={{
              fontSize: 14
            }}
          />
          <InputRightElement height="100%" right="1">
            <IconButton
              icon={
                <Icon
                  icon="tabler:arrow-narrow-right"
                  color="white"
                  width="20px"
                  height="20px"
                />
              }
              isRound
              size="md"
              px="0"
              py="0"
            />
          </InputRightElement>
        </InputGroup>
      </Stack>
      <Text textStyle="caption-2" fontWeight="bold">
        Already have an account? <chakra.span color="primary.1">Login</chakra.span>
      </Text>
    </Stack>
  )
}

export default SignUpBox
