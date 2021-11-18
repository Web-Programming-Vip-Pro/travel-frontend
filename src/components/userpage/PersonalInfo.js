import {
  Box,
  Flex,
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
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
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { useUserStore } from '@/store/user'
const PersonalInfo = () => {
  const user = useUserStore((state) => state.user)
  console.log(user)
  const { isOpen, onOpen, onClose } = useDisclosure()
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
        <Input placeholder="Enter your display name" />
        <Stack
          mt="32px"
          direction={{ mobile: 'column', tablet: 'row' }}
          spacing="20px"
        >
          <Box flex="1">
            <FormLabel htmlFor="name">
              <Text textStyle="hairline-2" color="neutrals.5">
                Phone
              </Text>
            </FormLabel>
            <Input id="name" placeholder="Phone number" />
          </Box>
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
            <Input defaultValue="tam@123" placeholder="" isDisabled />
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
          />
        </Box>
        <Text my="48px" textStyle="body-2-bold">
          Social
        </Text>
        <Stack direction={{ mobile: 'column', tablet: 'row' }} spacing="20px">
          <Box flex="1">
            <FormLabel htmlFor="web">
              <Text textStyle="hairline-2" color="neutrals.5">
                Website
              </Text>
            </FormLabel>
            <Input id="web" placeholder="Your site URL" />
          </Box>
          <Box flex="1">
            <FormLabel
              htmlFor="twitter"
              textStyle="hairline-2"
              color="neutrals.5"
            >
              <Text textStyle="hairline-2" color="neutrals.5">
                Twitter
              </Text>
            </FormLabel>
            <Input id="twitter" placeholder="@twitter username" />
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
            <Input id="facebook" placeholder="@facebook username" />
          </Box>
        </Stack>
        <Divider my="48px" />
        <Flex>
          <Button onClick={onOpen} fontSize="16px">
            Update profile
          </Button>
          {/* Modal Update password */}
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Password</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack spacing="16px">
                  <FormControl>
                    <InputGroup>
                      <Input
                        type="password"
                        px="14px"
                        py="16px"
                        minH="48px"
                        borderRadius="90px"
                        variant="field"
                        placeholder="Password"
                      />
                    </InputGroup>
                  </FormControl>
                  <Button type="submit">Confirm Password</Button>
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
          >
            Clear all
          </Button>
        </Flex>
      </FormControl>
    </Box>
  )
}

export default PersonalInfo
