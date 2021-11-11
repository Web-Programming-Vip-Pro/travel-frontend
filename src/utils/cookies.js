import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function getCookie(name) {
  return cookies.get(name)
}

export function setCookie(name, value, options) {
  return cookies.set(name, value, options)
}

export function getToken() {
  return getCookie('token')
}

export function setToken(token) {
  return setCookie('token', token)
}