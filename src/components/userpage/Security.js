import {
  Box,
  Text,
  Stack,
  Divider,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  FormControl,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { updatePassword } from '@/services/user'
import { login } from '@/services/auth'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const Security = () => {
  const [error, setError] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { handleSubmit, register, reset } = useForm()
  const { data } = useSession()
  const userEmail = data.user.email

  async function handleUpdate(data) {
    setError(null)
    const response = await updatePassword(data)
    if (!response.success) {
      setError(response.message || 'Something went wrong')
    } else {
      await login({ email: userEmail, password: data.newPassword })
      setError(false)
      setTimeout(() => {
        onClose()
      }, 500)
    }
  }

  useEffect(() => {
    reset()
    setError(null)
  }, [isOpen])

  return (
    <Box flex="1" mt="32px">
      <Text textStyle={{ mobile: 'headline-4', tablet: 'headline-2' }}>
        Login and security
      </Text>
      <Box mt={{ mobile: '32px', tablet: '64px' }}>
        <Text textStyle="body-1-bold">Login</Text>
        <Flex
          direction={{ mobile: 'column', tablet: 'row' }}
          justify="space-between"
          mt="16px"
        >
          <Stack>
            <Text textStyle="caption-bold">Password</Text>
            <Text textStyle="caption-2" color="neutrals.4">
              Last updated 1 month ago
            </Text>
          </Stack>
          <Button
            onClick={onOpen}
            fontSize="14px"
            w="151px"
            h="40px"
            variant="light"
            mt="8px"
          >
            Update password
          </Button>
          {/* Modal Update password */}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Change Password</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack px="16px" py="36px" spacing="16px">
                  {error !== null && (
                    <Alert status={error ? 'error' : 'success'}>
                      <AlertIcon />
                      <AlertTitle>
                        {error ? error : 'Update success!'}
                      </AlertTitle>
                    </Alert>
                  )}
                  <FormControl>
                    <InputGroup>
                      <Input
                        type="password"
                        px="14px"
                        py="16px"
                        minH="48px"
                        borderRadius="90px"
                        variant="field"
                        placeholder="Old Password"
                        {...register('oldPassword', { required: true })}
                      />
                    </InputGroup>
                  </FormControl>
                  <Divider />
                  <FormControl>
                    <InputGroup>
                      <Input
                        type="password"
                        px="14px"
                        py="16px"
                        minH="48px"
                        borderRadius="90px"
                        placeholder="New Password"
                        {...register('newPassword', { required: true })}
                      />
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
                        placeholder="Repeat New Password"
                        {...register('confirmNewPassword', { required: true })}
                      />
                    </InputGroup>
                  </FormControl>
                  <Button type="submit" onClick={handleSubmit(handleUpdate)}>
                    Set Password
                  </Button>
                </Stack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
      <Divider my="64px" />
    </Box>
  )
}

export default Security
