import axios from 'axios'
import { USER } from '@/constants'
import useSWR, { mutate } from 'swr'
import { getToken, setToken } from '@/utils/cookies'

export function useUser() {
  const fetcher = (url) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => res.data)
  const { data, error } = useSWR(USER.CHECK, fetcher)
  return {
    user: data ? data.data.user : null,
    isLoading: !error & !data,
    isError: error,
  }
}

export async function signUp(user) {
  try {
    const response = await axios
      .post(USER.REGISTER, { ...user, role: 0 })
      .then((res) => res.data)
    setToken(response.data)
    mutate(USER.CHECK)
    return { success: true }
  } catch (err) {
    return { success: false, message: err.response.data }
  }
}

export async function login(email, password) {
  const response = await fetch(USER.LOGIN, {
    body: JSON.stringify({ email, password }),
    method: 'POST',
  }).then((res) => res.json())
  return response
}
