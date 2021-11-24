import axios from 'axios'
import useSWR, { mutate } from 'swr'
import { WISHLIST } from '@/constants'
import { useSession } from 'next-auth/react'
import { fetcher } from '@/utils'

export const toggleToWishlist = async (placeId) => {
  const response = await axios
    .post(`/api/${WISHLIST.defaults.TOGGLE}`, {
      placeId,
    })
    .then((res) => res.data)
  return response
}

export function usePlaceIsInUserWishlist(placeId) {
  const { data: session } = useSession()
  const userId = session.user.id
  const { data, error, mutate } = useSWR(
    `${WISHLIST.IS_IN_WISHLIST}?place_id=${placeId}&user_id=${userId}`,
    fetcher
  )
  return {
    isPlaceInWishlist: data && data.data,
    isLoading: !error && !data,
    error,
    mutate,
  }
}

export function useWishlistByUser(
  page = 0,
  limit = 10,
  type = 0,
  order = 'recent'
) {
  const { data: session } = useSession()
  const userId = session ? session.user.id : -1
  const { data, error, mutate } = useSWR(
    `${WISHLIST.GET_BY_USER}?user_id=${userId}&page=${page}&limit=${limit}&type=${type}&order=${order}`,
    fetcher
  )
  return {
    wishlist: data && data.data,
    isLoading: !error && !data,
    error,
    mutate,
  }
}
