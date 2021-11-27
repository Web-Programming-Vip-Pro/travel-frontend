import useSWR from 'swr'
import axios from 'axios'
import { REVIEW } from '@/constants'
import { fetcher } from '@/utils'

// order = 'recent' | 'most-rated' | 'least-rated'
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

export function useCanUserAddReview(placeId, userId) {
  const { data, error } = useSWR(
    `${REVIEW.CHECK}?place_id=${placeId}&user_id=${userId}`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  )
  return {
    canUserAddReview: data && data.data,
    isLoading: !error && !data,
    error,
  }
}

export async function addReview(placeId, userId, rate, comment) {
  try {
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
