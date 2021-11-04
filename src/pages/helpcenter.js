import { Box } from '@chakra-ui/react'
import HelpContent from '@/components/helpCenterFeature/helpContent.js'
import HelpHero from '@/components/helpCenterFeature/helpHero.js'
const HelpCenterPage = () => {
  return (
    <Box>
      <HelpHero />
      <HelpContent />
    </Box>
  )
}
export default HelpCenterPage
