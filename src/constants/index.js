import { USER as USER_ENDPOINTS } from './endpoint'
import { PAGE as PAGE_ENDPOINTS } from './endpoint'
import { PLACE as PLACE_ENDPOINT } from './endpoint'
import { REVIEW as REVIEW_ENDPOINT } from './endpoint'
import { CITY as CITY_ENDPOINT } from './endpoint'
import { WISHLIST as WISHLIST_ENDPOINT } from './endpoint'
import { TRANSACTION as TRANSACTION_ENDPOINT } from './endpoint'
import { APP as APP_ENDPOINT } from './endpoint'

const ENDPOINT_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_ENDPOINT
    : process.env.NEXT_PUBLIC_MOCK_ENDPOINT

/**
 *
 * @param {Object.<string, string>} endpoint
 * @returns {Object.<string, string>}
 */
function wrapEndpointWithBaseURL(endpoint) {
  Object.keys(endpoint).forEach((key) => {
    endpoint.defaults = endpoint.defaults || {}
    endpoint.defaults[key] = endpoint[key]
    endpoint[key] = `${ENDPOINT_BASE_URL}${endpoint[key]}`
  })
  return endpoint
}

export const USER = wrapEndpointWithBaseURL(USER_ENDPOINTS)
export const PAGE = wrapEndpointWithBaseURL(PAGE_ENDPOINTS)
export const PLACE = wrapEndpointWithBaseURL(PLACE_ENDPOINT)
export const REVIEW = wrapEndpointWithBaseURL(REVIEW_ENDPOINT)
export const CITY = wrapEndpointWithBaseURL(CITY_ENDPOINT)
export const WISHLIST = wrapEndpointWithBaseURL(WISHLIST_ENDPOINT)
export const TRANSACTION = wrapEndpointWithBaseURL(TRANSACTION_ENDPOINT)
export const APP = wrapEndpointWithBaseURL(APP_ENDPOINT)
