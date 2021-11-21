import useSWR from 'swr'
import axios from 'axios'
import { REVIEW } from '@/constants'
import { fetcher } from '@/utils'
import { getSession } from 'next-auth/react'

export const useReviewsInPlace = (
  placeId,
  page = 0,
  limit = 20,
  order = 'recent'
) => {
  const { data, error } = useSWR(
    `${REVIEW.GET_REVIEW_BY_PLACE}?id=${placeId}&page=${page}&limit=${limit}&order=${order}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  return {
    reviews: data && data.data,
    isLoading: !error && !data,
    error,
  }
}

export async function addReview(placeId, rate, comment) {
  try {
    const session = await getSession()
    const userId = session.user.id
    const response = await axios.post(REVIEW.ADD_REVIEW, {
      place_id: placeId,
      user_id: userId,
      rate,
      comment,
    })
    return { success: true, data: response.data }
  } catch (error) {
    return { success: false, error }
  }
}
