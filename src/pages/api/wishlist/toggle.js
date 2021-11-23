import nc from 'next-connect'
import middleware from '@/services/auth/middleware'
import axios from 'axios'
import { WISHLIST } from '@/constants'

const handler = nc()
  .use(middleware)
  .post(async (req, res) => {
    const placeId = req.body.placeId
    const userId = req.userId
    try {
      const data = await axios
        .post(WISHLIST.TOGGLE, {
          user_id: userId,
          place_id: placeId,
        })
        .then((res) => res.data)
      return res.json({ success: true, message: data.data })
    } catch (error) {
      return res.json({ success: false, message: error.response.data.data })
    }
  })

export default handler
