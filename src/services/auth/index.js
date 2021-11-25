import axios from 'axios'
import { USER } from '@/constants'
import { signIn } from 'next-auth/react'

export async function signUp(user) {
  try {
    await axios.post(USER.REGISTER, { ...user }).then((res) => res.data)
    await signIn('credentials', {
      email: user.email,
      password: user.password,
      redirect: false,
    })
    return { success: true }
  } catch (err) {
    return { success: false, message: err.response.data }
  }
}

export async function login({ email, password }) {
  const response = await signIn('credentials', {
    email,
    password,
    redirect: false,
  })
  return response
}

export async function forgetPassword(email) {
  try {
    const response = await axios
      .post(USER.FORGET_PASSWORD, email)
      .then((res) => res.data)
    return { success: true, message: response.data }
  } catch (err) {
    return { success: false, message: err.response.data }
  }
}

export async function logout() {}
