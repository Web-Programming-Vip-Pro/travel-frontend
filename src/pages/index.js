import { Button, Box, Text } from '@chakra-ui/react'

export default function Index() {
  return (
    <Box>
      <Button size="medium" disabled>
        ABC
      </Button>
      <Button size="small">ABC</Button>
      <Button size="medium" variant="light">
        ABC
      </Button>
      <Button size="small" variant="light">
        ABC
      </Button>
    </Box>
  )
}
