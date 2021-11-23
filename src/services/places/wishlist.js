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
