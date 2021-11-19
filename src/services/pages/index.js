import { PAGE } from '@/constants'
import axios from 'axios'

export const getPages = async () => {
  const res = await axios.get(PAGE.GET_ALL).then((res) => res.data)
  return res.data
}
