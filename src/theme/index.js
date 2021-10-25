import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { typo } from './typo'
import { Text, Input, Button } from './components'

const colors = {
  primary: {
    1: '#3B71FE',
    2: '#8BC5E5',
    3: '#92A5EF',
    4: '#58C27D',
    variant: '#2956bf',
  },
  secondary: {
    1: '#A4CDE3',
    2: '#E4D7CF',
    3: '#FFD166',
    4: '#FA8F54',
  },
  neutrals: {
    1: '#141416',
    2: '#23262F',
    3: '#353945',
    4: '#777E90',
    5: '#B1B5C3',
    6: '#E6E8EC',
    7: '#F4F5F6',
    8: '#FCFCFD',
  },
}

const breakpoints = createBreakpoints({
  mobile: '20em',
  tablet: '64em',
  desktop: '90em',
})

export const theme = extendTheme({
  colors,
  breakpoints,
  ...typo,
  components: { Text, Input, Button },
})
