import {
  Box,
  Flex,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Divider,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  InputGroup,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { updateInfo } from '@/services/user'
import { useEffect, useState } from 'react'
import { login } from '@/services/auth'

const PersonalInfo = () => {
  const { data } = useSession()
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const user = data.user
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, reset, getValues } = useForm({
    defaultValues: user,
  })

  useEffect(() => {
    // reset password if modal is closed, but other fields are keeped
    reset({ ...getValues(), password: '' })
    setError(null)
  }, [isOpen])

  async function onSubmit(data) {
    console.log(data)
    setError(null)
    setIsLoading(true)
    const response = await updateInfo(data)
    if (!response.success) {
      setError(response.message || 'Something went wrong')
    } else {
      const { email, password } = data
      await login({ email, password })
      setError(false)
      setTimeout(() => {
        onClose()
      }, [500])
    }
    setIsLoading(false)
  }

  return (
    <Box flex="1" mt={{ mobile: '32px', tablet: '' }}>
      <FormControl>
        <Flex justify="space-between" align="flex-start">
          <Text textStyle={{ mobile: 'headline-4', tablet: 'headline-2' }}>
            Personal info
          </Text>
          <Button w="112px" h="40px" variant="light" fontSize="14px">
            View profile
          </Button>
        </Flex>
        <Text
          textStyle="body-2-bold"
          mt={{ mobile: '32px', tablet: '64px' }}
          fontWeight="500"
        >
          Account info
        </Text>
        <FormLabel mt="32px" textStyle="hairline-2" color="neutrals.5">
          <Text textStyle="hairline-2" color="neutrals.5">
            Display name
          </Text>
        </FormLabel>
        <Input
          {...register('name', { required: true })}
          placeholder="Enter your display name"
          required
        />
        <Stack
          mt="32px"
          direction={{ mobile: 'column', tablet: 'row' }}
          spacing="20px"
        >
          <Box flex="1">
            <FormLabel
              htmlFor="email"
              textStyle="hairline-2"
              color="neutrals.5"
            >
              <Text id="email" textStyle="hairline-2" color="neutrals.5">
                Email
              </Text>
            </FormLabel>
            <Input
              {...register('email', { required: true })}
              placeholder=""
              required
            />
          </Box>
        </Stack>
        <Box mt="32px">
          <FormLabel htmlFor="bio">
            <Text textStyle="hairline-2" color="neutrals.5">
              Bio
            </Text>
          </FormLabel>
          <Textarea
            id="bio"
            placeholder="About yourself in a few words"
            minH="156px"
            {...register('bio')}
          />
        </Box>
        <Text my="48px" textStyle="body-2-bold">
          Social
        </Text>
        <Stack direction={{ mobile: 'column', tablet: 'row' }} spacing="20px">
          <Box flex="1">
            <FormLabel
              htmlFor="twitter"
              textStyle="hairline-2"
              color="neutrals.5"
            >
              <Text textStyle="hairline-2" color="neutrals.5">
                Instagram
              </Text>
            </FormLabel>
            <Input
              id="twitter"
              placeholder="@instagram username"
              {...register('social.instagram')}
            />
          </Box>
          <Box flex="1">
            <FormLabel
              htmlFor="facebook"
              textStyle="hairline-2"
              color="neutrals.5"
            >
              <Text textStyle="hairline-2" color="neutrals.5">
                Facebook
              </Text>
            </FormLabel>
            <Input
              id="facebook"
              placeholder="@facebook username"
              {...register('social.facebook')}
            />
          </Box>
        </Stack>
        <Divider my="48px" />
        <Flex>
          <Button onClick={onOpen} fontSize="16px" type="button">
            Update profile
          </Button>
          {/* Modal Update password */}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirm Password</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack p="16px" py="36px" spacing="16px">
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
                        placeholder="Confirm Password"
                        {...register('password', { required: true })}
                      />
                    </InputGroup>
                  </FormControl>
                  <Button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isLoading}
                  >
                    Confirm Password
                  </Button>
                </Stack>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Button
            variant="light"
            border="0"
            mx="10px"
            leftIcon={<Icon icon="bx:bx-lock" />}
            fontSize="16px"
            color="neutrals.4"
            type="button"
            onClick={() => reset()}
          >
            Clear all
          </Button>
        </Flex>
      </FormControl>
    </Box>
  )
}

export default PersonalInfo
