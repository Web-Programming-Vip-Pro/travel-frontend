import { login, forgetPassword } from '@/services/auth'
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

const SignInBox = ({ onClose }) => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState(null)
  const [isForgetPassword, setIsForgetPassword] = useState(false)

  async function handleLogin(data) {
    const response = await login(data)
    if (response.ok) {
      setStatus({ success: true, message: 'Login successful' })
      setTimeout(() => {
        onClose()
      }, 1000)
    } else {
      setStatus({
        success: false,
        message: 'Login failed',
      })
    }
  }

  async function handleForgetPassword(data) {
    const response = await forgetPassword(data)
    if (response.success) {
      setStatus({ success: true, message: response.message })
    } else {
      setStatus({
        success: false,
        message: response.message,
      })
    }
  }

  async function onSubmit(data) {
    setIsLoading(true)
    setStatus(null)
    if (isForgetPassword) {
      await handleForgetPassword(data)
    } else {
      await handleLogin(data)
    }
    setIsLoading(false)
  }
  return (
    <Stack spacing="32px" align="center" mb="4px">
      <Text
        textStyle={{ base: 'headline-4', tablet: 'headline-3' }}
        textAlign="center"
      >
        {isForgetPassword ? 'Forget Password' : 'Sign In'}
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="16px">
          <FormControl>
            <InputGroup>
              <Input
                type="email"
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
          {!isForgetPassword && (
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
              </InputGroup>
            </FormControl>
          )}
          <Button type="submit" isLoading={isLoading}>
            {isForgetPassword ? 'Send' : 'Sign In'}
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
      <Text
        textStyle="caption-2-bold"
        color="primary.1"
        fontWeight="bold"
        cursor="pointer"
        onClick={() => setIsForgetPassword(!isForgetPassword)}
      >
        {isForgetPassword ? 'Back to login' : 'Forget password?'}
      </Text>
    </Stack>
  )
}

export default SignInBox
