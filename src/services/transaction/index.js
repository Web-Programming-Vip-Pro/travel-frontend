import axios from 'axios'
import useSWR, { mutate } from 'swr'
import { TRANSACTION } from '@/constants'
import { fetcher } from '@/utils'

export async function addTransaction(data) {
  try {
    const response = await axios
      .post(`/api/${TRANSACTION.defaults.ADD}`, data)
      .then((res) => res.data)
    return { success: true, message: response.message }
  } catch (err) {
    return { success: false, message: err.response.data.message }
  }
}

export function useTransactionStatus(placeId, userId) {
  const conditionType = 'or'
  const { data, error } = useSWR(
    () =>
      userId
        ? `${TRANSACTION.GET}?place_id=${placeId}&user_id=${userId}&status=[0,1]&condition_type=${conditionType}`
        : null,
    fetcher
  )
  const transactionStatus = data && data.data.status_place
  return {
    transactionStatus,
    isLoading: !error && !data,
    error: error,
  }
}

export function usePlacesByTransaction(
  userId,
  status = -1,
  page = 0,
  limit = 10
) {
  const { data, error } = useSWR(
    userId
      ? `${TRANSACTION.USER}?user_id=${userId}&status=${status}&page=${page}&limit=${limit}`
      : null,
    fetcher
  )
  const places = data && data.data
  return {
    places,
    isLoading: !error && !data,
    error: error,
  }
}

export function mutateTransactionStatus(placeId, userId) {
  const conditionType = 'or'
  mutate(
    `${TRANSACTION.GET}?place_id=${placeId}&user_id=${userId}&status=[0,1]&condition_type=${conditionType}`
  )
}
