export const USER = {
  CHECK: '/user',
  REGISTER: '/register',
  LOGIN: '/login',
  UPDATE_INFO: '/user/updateInfo',
  UPDATE_PASSWORD: '/user/updatePassword',
  FORGET_PASSWORD: '/user/forget',
  GET_ONE: '/user/get',
}

export const PAGE = {
  GET_ALL: '/pages',
}

export const PLACE = {
  GET_ALL: '/places',
  GET_ONE: '/place',
  SEARCH: '/place/search',
  STATISTICS: '/place/statistics',
}

export const WISHLIST = {
  TOGGLE: '/wishlist/toggle',
  DELETE: '/wishlist/delete',
  GET_BY_USER: '/wishlist',
  IS_IN_WISHLIST: '/wishlist/isInWishList',
}

export const REVIEW = {
  GET_REVIEW_BY_PLACE: '/review/place',
  GET_REVIEW_BY_USER: '/review/user',
  ADD_REVIEW: '/review/add',
  CHECK: '/review/check',
}

export const CITY = {
  GET_ALL: '/cities',
  GET_ONE: '/city',
  SEARCH: '/city/search',
}

export const TRANSACTION = {
  ADD: '/transaction/add',
  GET: '/transaction/get',
  USER: '/transaction/user',
}

export const APP = {
  CONTACT: '/app/contact',
}
