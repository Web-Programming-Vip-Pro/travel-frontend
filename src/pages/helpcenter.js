import { Box } from '@chakra-ui/react'
import HelpContent from '@/components/help-center-feature/help-content.js'
import HelpHero from '@/components/help-center-feature/help-hero.js'
const HelpCenterPage = () => {
  return (
    <Box>
      <HelpHero />
      <HelpContent />
    </Box>
  )
}
export default HelpCenterPage
