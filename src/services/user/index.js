import axios from 'axios'
import { USER } from '@/constants'
import { getSession } from 'next-auth/react'

export async function updateInfo(data) {
  try {
    const res = await axios.post(USER.UPDATE_INFO, data)
    return { success: true, message: res.data }
  } catch (error) {
    return { success: false, message: error.response.data.data }
  }
}

export async function updatePassword(data) {
  try {
    const { user } = await getSession()
    const id = user.id
    const res = await axios.post(USER.UPDATE_PASSWORD, { id, ...data })
    return { success: true, message: res.data }
  } catch (error) {
    return { success: false, message: error.response.data.data }
  }
}
