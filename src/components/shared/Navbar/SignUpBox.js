import { useState } from 'react'
import {
  Stack,
  Text,
  InputGroup,
  Input,
  Button,
  chakra,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { signUp } from '@/services/auth'

const SignUpBox = ({ onClose }) => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(null)
  async function onSubmit(data) {
    setIsLoading(true)
    setStatus(null)
    const response = await signUp(data)
    if (response.success) {
      setStatus({ success: true, message: 'Sign Up successful' })
      setTimeout(() => {
        onClose()
      }, 1000)
    } else {
      setStatus({
        success: false,
        message: response.message?.data || 'Sign Up failed',
      })
    }
    setIsLoading(false)
  }
  return (
    <Stack spacing="32px" justify="center" align="center">
      <Stack spacing="12px" align="center">
        <Text
          textStyle={{ base: 'headline-4', tablet: 'headline-3' }}
          textAlign="center"
        >
          Sign Up on Fleety
        </Text>
        <Text textStyle="body-2" color="neutrals.4">
          Use Your Email to Sign up
        </Text>
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <InputGroup>
            <Input
              type="text"
              borderRadius="90px"
              size="md"
              placeholder="Enter your email"
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
              type="password"
              borderRadius="90px"
              size="md"
              placeholder="Enter your password"
              required
              {...register('password', { required: true })}
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="password"
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
      {status && (
        <Stack>
          <Alert status={status.success ? 'success' : 'error'}>
            <AlertIcon />
            <AlertTitle>{status.message}</AlertTitle>
          </Alert>
        </Stack>
      )}{' '}
      <Text textStyle="caption-2" fontWeight="bold">
        Already have an account?{' '}
        <chakra.span color="primary.1">Login</chakra.span>
      </Text>
    </Stack>
  )
}

export default SignUpBox
