import { getSession } from 'next-auth/react'

const middleware = async (req, res, next) => {
  const session = await getSession({ req })
  if (!session) {
    return res.json({ success: false, message: 'You are not logged in' })
  }
  req.userId = session.user.id
  return next()
}

export default middleware
