import axios from 'axios'
import { CITY } from '@/constants'

export async function getAllCities(page = 0, limit = 10) {
  try {
    const response = await axios
      .get(`${CITY.GET_ALL}?page=${page}&limit=${limit}`)
      .then((res) => res.data)
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

export async function searchCities(q = '') {
  try {
    const response = await axios
      .get(`${CITY.SEARCH}?q=${q}`)
      .then((res) => res.data)
    return { success: true, message: response.data }
  } catch (error) {
    throw { success: false, message: error.response.data }
  }
}
