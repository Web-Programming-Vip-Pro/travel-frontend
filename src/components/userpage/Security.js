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
} from '@chakra-ui/react'

const Security = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const historyData = [
    {
      type: 'Session',
      date: 'May 14, 2021 at 08:36pm',
    },
    {
      type: 'macOs Big Sur, Chrome',
      date: 'May 14, 2021 at 08:36pm',
    },
    {
      type: 'Session',
      date: 'May 14, 2021 at 08:36pm',
    },
  ]
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
                        placeholder="Old Password"
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
                        placeholder="New Password"
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
                        placeholder="Confirm New Password"
                      />
                    </InputGroup>
                  </FormControl>
                  <Button type="submit">Set Password</Button>
                </Stack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Box>
      <Divider my="64px" />
      <Box>
        <Text textStyle="body-1-bold">Device history</Text>
        {historyData.map((item, index) => (
          <Box key={index}>
            <Flex justify="space-between" mt="16px">
              <Stack>
                <Text textStyle="caption-bold">{item.type}</Text>
                <Text textStyle="caption-2" color="neutrals.4">
                  {item.date}
                </Text>
              </Stack>
              <Button fontSize="14px" h="40px" variant="light">
                Log out device
              </Button>
            </Flex>
            <Divider my="16px" />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Security
