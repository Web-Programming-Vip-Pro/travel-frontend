import nc from 'next-connect'
import middleware from '@/services/auth/middleware'
import axios from 'axios'
import { TRANSACTION } from '@/constants'

const handler = nc()
  .use(middleware)
  .post(async (req, res) => {
    const userId = req.userId
    const { placeId } = req.body
    try {
      const response = await axios
        .post(TRANSACTION.ADD, { user_id: userId, place_id: placeId })
        .then((res) => res.data)
      return res.json({ success: true, message: response.data })
    } catch (err) {
      return res
        .status(500)
        .json({ success: false, message: err.response.data.data })
    }
  })

export default handler
