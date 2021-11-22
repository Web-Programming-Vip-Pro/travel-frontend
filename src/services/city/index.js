import axios from 'axios'
import { CITY } from '@/constants'

export async function getAllCities() {
  try {
    const response = await axios.get(CITY.GET_ALL).then((res) => res.data)
    return { success: true, message: response.data }
  } catch (error) {
    throw { success: false, message: error.response.data }
  }
}

export async function getCity(id) {
  try {
    const response = await axios
      .get(`${CITY.GET_ONE}?id=${id}`)
      .then((res) => res.data)
    return { success: true, message: response.data }
  } catch (error) {
    throw { success: false, message: error.response.data }
  }
}
