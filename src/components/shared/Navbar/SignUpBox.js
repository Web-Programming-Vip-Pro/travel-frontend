import { useState } from 'react'
import {
  Stack,
  Text,
  InputGroup,
  Input,
  Button,
  chakra,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { signUp, verifyUser } from '@/services/auth'

const SignUpBox = () => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  async function onSubmit(data) {
    setIsLoading(true)
    const response = await signUp(data)
    if (response.success) {
      const user = await verifyUser()
      console.log(user)
    }
    setIsLoading(false)
  }
  return (
    <Stack spacing="32px" align="center">
      <Stack spacing="12px" align="center">
        <Text textStyle="headline-3">Sign Up on Fleety</Text>
        <Text textStyle="body-2" color="neutrals.4">
          Use Your Email to Sign up
        </Text>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <InputGroup>
            <Input
              type="email"
              borderRadius="90px"
              size="md"
              placeholder="Enter your email"
              required
              {...register('email', { required: true })}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              borderRadius="90px"
              size="md"
              placeholder="Enter your name"
              required
              {...register('name', { required: true })}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              borderRadius="90px"
              size="md"
              placeholder="Enter your password"
              required
              {...register('password', { required: true })}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="text"
              borderRadius="90px"
              size="md"
              placeholder="Re-enter your password"
              required
              {...register('repassword', { required: true })}
            />
          </InputGroup>
          <Button type="submit" isLoading={isLoading}>
            Sign Up
          </Button>
        </Stack>
      </form>
      <Text textStyle="caption-2" fontWeight="bold">
        Already have an account?{' '}
        <chakra.span color="primary.1">Login</chakra.span>
      </Text>
    </Stack>
  )
}

export default SignUpBox
