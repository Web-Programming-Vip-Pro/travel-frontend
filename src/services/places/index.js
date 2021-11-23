import useSWR from 'swr'
import { PLACE } from '@/constants'
import { fetcher } from '@/utils'

// type order = 'recent' | 'rating' | 'max-price' | 'min-price'
export function usePlaces(
  page = 0,
  limit = 10,
  order = 'recent',
  type = 0,
  cityId = -1
) {
  const { data, error } = useSWR(
    `${PLACE.GET_ALL}?page=${page}&limit=${limit}&order=${order}&type=${type}&city_id=${cityId}`,
    fetcher
  )
  return { places: data && data.data, isLoading: !error && !data, error }
}

export const usePlace = (id) => {
  const { data, error } = useSWR(`${PLACE.GET_ONE}?id=${id}`, fetcher)
  return { place: data, isLoading: !error && !data, error }
}

export function useSearchPlaces(q = '') {
  const { data, error } = useSWR(`${PLACE.SEARCH}?q=${q}`, fetcher)
  return { places: data && data.data, isLoading: !error && !data, error }
}

export function usePlacesStatistic() {
  const { data, error } = useSWR(`${PLACE.STATISTICS}`, fetcher)
  return { statistics: data && data.data, isLoading: !error && !data, error }
}
