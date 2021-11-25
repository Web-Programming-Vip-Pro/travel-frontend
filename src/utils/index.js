import axios from 'axios'

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

export const fetcher = (...args) => {
  return axios(...args).then((res) => res.data)
}

export const shortenText = (text, length) => {
  if (text.length > length) {
    return text.substr(0, length) + '...'
  }
  return text
}

export const getOrderType = (order) => {
  switch (order) {
    case 'Recently Added':
      return 'recent'
    case 'Most Ratings':
      return 'rating'
    case 'High Price':
      return 'max-price'
    default:
      return 'min-price'
  }
}

export const getOrderTypeText = (order) => {
  switch (order) {
    case 'recent':
      return 'Recently Added'
    case 'rating':
      return 'Most Ratings'
    case 'max-price':
      return 'High Price'
    default:
      return 'Low Price'
  }
}

export const getTransactionStatus = (status) => {
  status = parseInt(status)
  switch (status) {
    case 0:
      return 'Waiting'
    case 1:
      return 'Booking'
    case 2:
      return 'Cancelled'
    case 3:
      return 'Finished'
  }
}
