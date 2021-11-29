import axios from 'axios'
import { USER } from '@/constants'
import { getSession } from 'next-auth/react'
import { login } from '../auth'

export async function getUser(id, role = 0) {
  try {
    const response = await axios.get(`${USER.GET_ONE}?id=${id}&role=${role}`)
    return { success: true, message: response.data.data }
  } catch (error) {
    return { success: false, message: error }
  }
}

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

export async function updateImage(data) {
  try {
    const { user } = await getSession()
    const id = user.id
    const res = await axios.post(USER.UPDATE_IMAGE, { id, ...data })
    return { success: true, message: res.data }
  } catch (error) {
    return { success: false, message: error.response.data.data }
  }
}

export async function updateSessionAfterModify(email, password) {
  await login()
}
