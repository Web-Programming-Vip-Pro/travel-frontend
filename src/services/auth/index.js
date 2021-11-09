import axios from 'axios'
import { USER } from '@/constants'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

export async function verifyUser() {
  const token = cookies.get('token')
  if (token) {
    const res = await axios.get(USER.CHECK, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return res.data
  } else {
    return { success: false }
  }
}

export async function signUp(user) {
  const response = await axios
    .post(USER.REGISTER, { ...user })
    .then((res) => res.data)
  if (response.success) {
    cookies.set('token', response.token, { path: '/' })
  }
  return response
}
export async function login(email, password) {
  const response = await fetch(USER.LOGIN, {
    body: JSON.stringify({ email, password }),
    method: 'POST',
  }).then((res) => res.json())
  return response
}
