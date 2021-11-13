import { Box, Stack, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import Setting from '@/components/shared/Setting'
import PersonalInfo from '@/components/userpage/PersonalInfo'
const Settings = ({ children }) => {
  return (
    <>
      <Setting>
        <PersonalInfo />
      </Setting>
    </>
  )
}

export default Settings
