import {
  Box,
  Text,
  Flex,
  Avatar,
  Stack,
  useDisclosure,
  Divider,
} from '@chakra-ui/react'
import { useOutsideClick } from '@chakra-ui/hooks'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import { useRef } from 'react'

function NewMessageDot() {
  return (
    <Box
      position="absolute"
      w={3}
      h={3}
      borderRadius="full"
      bg="primary.4"
      top={-2}
      right={-2}
    ></Box>
  )
}
function MessageBox({ messages }) {
  function Message({ title, content, agency }) {
    return (
      <Stack
        direction="row"
        spacing="24px"
        p="16px"
        _hover={{ bg: 'neutrals.7' }}
        transitionProperty="background"
        transitionDuration="0.2s"
        transitionTimingFunction="ease-in-out"
        borderRadius="24px"
      >
        <Avatar name={agency.name} src={agency.avatarSrc} />
        <Stack spacing="8px" minW="300px">
          <Text textStyle="subheading">{title}</Text>
          <Text>{content}</Text>
        </Stack>
      </Stack>
    )
  }
  return (
    <Stack
      px="32px"
      py="40px"
      borderRadius="24px"
      boxShadow="0px 16px 64px -24px rgb(31 47 70 / 40%)"
      position="absolute"
      top="calc(100% + 32px)"
      right={{ mobile: null, tablet: '-96px', desktop: '-144px' }}
      spacing="16px"
    >
      <Text textStyle="body-1-bold">Notification</Text>
      <Divider />
      <Flex direction="column">
        {messages.map((message, index) => (
          <Message
            key={index}
            title={message.title}
            content={message.content}
            agency={message.agency}
          />
        ))}
      </Flex>
    </Stack>
  )
}
const Notification = ({ messages }) => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const notificationIconRef = useRef()
  useOutsideClick({
    ref: notificationIconRef,
    handler: () => onClose(),
  })

  return (
    <>
      <Box position="relative" ref={notificationIconRef}>
        <Box
          color={isOpen ? 'black' : 'gray'}
          onClick={onToggle}
          background="white"
          px="0"
          py="0"
        >
          <Icon icon="clarity:notification-line" width="24" height="24" />
        </Box>
        <NewMessageDot />
        {/* {isOpen && <MessageBox messages={messages} />} */}
      </Box>
    </>
  )
}

export default Notification
