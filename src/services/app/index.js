import axios from 'axios'
import { APP } from '@/constants'

export async function sendContact(data) {
  try {
    const response = axios.post(APP.CONTACT, data)
    return { success: true, message: response.data }
  } catch (error) {
    return { success: false, message: error.response.data }
  }
}
