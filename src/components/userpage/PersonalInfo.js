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
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
const PersonalInfo = () => {
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
            <Input value="tam@ui8.net" placeholder="" />
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
        <Stack
          mt="32px"
          direction={{ mobile: 'column', tablet: 'row' }}
          spacing="20px"
        >
          <Box flex="1">
            <FormLabel htmlFor="live">
              <Text textStyle="hairline-2" color="neutrals.5">
                Lives in
              </Text>
            </FormLabel>
            <Select id="live" placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box flex="1">
            <FormLabel htmlFor="speak">
              <Text textStyle="hairline-2" color="neutrals.5">
                Speak
              </Text>
            </FormLabel>
            <Select id="speak" placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Stack>
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
            <Input id="twitter" value="" placeholder="@twitter username" />
          </Box>
        </Stack>
        <Divider my="48px" />
        <Flex>
          <Button fontSize="16px">Update profile</Button>
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
