import {
  Text,
  Stack,
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { login } from '@/services/auth'

const SignInBox = ({ onClose }) => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(null)
  async function onSubmit(data) {
    setIsLoading(true)
    setStatus(null)
    const response = await login(data)
    if (response.success) {
      setStatus({ success: true, message: 'Login successful' })
      setTimeout(() => {
        onClose()
      }, 1000)
    } else {
      setStatus({
        success: false,
        message: response.message?.data || 'Login failed',
      })
    }
    setIsLoading(false)
  }
  return (
    <Stack spacing="32px" align="center" mb="4px">
      <Text textStyle="headline-3">Sign in</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register('email', { required: true })}
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
                {...register('password', { required: true })}
              />
              <InputRightElement top={1}>
                <Icon icon="ic:outline-remove-red-eye" color="gray" />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Button type="submit" isLoading={isLoading}>
            Login
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
      )}
      <Text textStyle="caption-2-bold" color="neutrals.3" fontWeight="bold">
        Forgot Password
      </Text>
    </Stack>
  )
}

export default SignInBox
