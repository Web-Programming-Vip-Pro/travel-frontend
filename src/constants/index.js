import { USER as USER_ENDPOINTS } from './endpoint'
import { PAGE as PAGE_ENDPOINTS } from './endpoint'
import { PLACE as PLACE_ENDPOINT } from './endpoint'
import { REVIEW as REVIEW_ENDPOINT } from './endpoint'

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
    endpoint[key] = `${ENDPOINT_BASE_URL}${endpoint[key]}`
  })
  return endpoint
}

export const USER = wrapEndpointWithBaseURL(USER_ENDPOINTS)
export const PAGE = wrapEndpointWithBaseURL(PAGE_ENDPOINTS)
export const PLACE = wrapEndpointWithBaseURL(PLACE_ENDPOINT)
export const REVIEW = wrapEndpointWithBaseURL(REVIEW_ENDPOINT)
