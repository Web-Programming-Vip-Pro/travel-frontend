import { extendTheme } from '@chakra-ui/react'
import { typo } from './typo'
import { Text } from './components/text'

const colors = {
  primary: {
    1: '#3B71FE',
    '1-variant': '#3772FF',
    2: '#8BC5E5',
    3: '#92A5EF',
    4: '#58C27D',
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

const breakpoints = {
  desktop: '1440px',
  table: '1024px',
  mobile: '375px',
}

export const theme = extendTheme({
  colors,
  breakpoints,
  ...typo,
  components: { Text },
})
