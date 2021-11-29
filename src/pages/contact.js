import {
  Box,
  Flex,
  Stack,
  Text,
  FormControl,
  Input,
  Button,
  Textarea,
  Alert,
  AlertTitle,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react'
import { sendContact } from '@/services/app'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import SEO from '@/components/shared/SEO'

const Contact = () => {
  const { data, status } = useSession()
  const user = data && data.user
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      email: user && user.email,
      name: user && user.name,
    },
  })
  useEffect(() => {
    if (status === 'authenticated') {
      reset({
        email: user.email,
        name: user.name,
      })
    }
  }, [data, user, status])
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  async function obSubmit(data) {
    setIsLoading(true)
    setResponse(null)
    const res = await sendContact(data)
    setResponse(res)
    setIsLoading(false)
  }
  return (
    <>
      <SEO title="Contact us" />
      <Box>
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
                Contact Us
              </Text>
            </Stack>
            <FormControl
              as="form"
              p="16px"
              bg="white"
              rounded="xl"
              onSubmit={handleSubmit(obSubmit)}
            >
              {response && (
                <Alert
                  status={response.success ? 'success' : 'error'}
                  variant="left-accent"
                  mb={4}
                >
                  <AlertIcon />
                  <AlertTitle mr={2}>
                    {response.success ? 'Success' : 'Error'}
                  </AlertTitle>
                  <AlertDescription>{response.message}</AlertDescription>
                </Alert>
              )}
              <Stack spacing="16px" mt="16px">
                <Input
                  type="text"
                  placeholder="Name"
                  required
                  {...register('name', { required: true })}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  {...register('email', { required: true })}
                />
                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  {...register('subject', { required: true })}
                />
                <Textarea
                  placeholder="Message"
                  rows="5"
                  required
                  {...register('message', { required: true })}
                />
                <Button mt="16px" type="submit" disabled={isLoading}>
                  Send
                </Button>
              </Stack>
            </FormControl>
          </Stack>
        </Flex>
      </Box>
    </>
  )
}
export default Contact
