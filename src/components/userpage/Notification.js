import {
  Box,
  Text,
  Flex,
  Stack,
  Button,
  Switch,
  Divider,
} from '@chakra-ui/react'
function Message({ title }) {
  return (
    <Box mt={{ mobile: '32px', tablet: '64px' }}>
      <Text textStyle="body-1-bold">{title}</Text>
      <Flex justify="space-between" mt="16px">
        <Stack>
          <Text textStyle="caption-bold">Email</Text>
          <Text textStyle="caption-2" color="neutrals.4">
            Recevice notification via email
          </Text>
        </Stack>
        <Switch size="lg" />
      </Flex>
      <Divider my="24px" />
      <Flex justify="space-between" mt="16px">
        <Stack>
          <Text textStyle="caption-bold">Text messages</Text>
          <Text textStyle="caption-2" color="neutrals.4">
            Recevice notification via via mobile phone
          </Text>
        </Stack>
        <Switch size="lg" />
      </Flex>
      <Divider my="24px" />
      <Flex justify="space-between" mt="16px">
        <Stack>
          <Text textStyle="caption-bold">Email</Text>
          <Text textStyle="caption-2" color="neutrals.4">
            Recevice notification via browse
          </Text>
        </Stack>
        <Switch size="lg" />
      </Flex>
    </Box>
  )
}
const Notification = () => {
  return (
    <Box flex="1" mt="32px">
      <Text textStyle={{ mobile: 'headline-4', tablet: 'headline-2' }}>
        Notification setting
      </Text>
      <Message title="Messages" />
      <Divider my="64px" />
      <Message title="Promotions" />
      <Divider my="64px" />
      <Message title="Reminders" />
    </Box>
  )
}

export default Notification
