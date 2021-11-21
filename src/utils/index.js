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
