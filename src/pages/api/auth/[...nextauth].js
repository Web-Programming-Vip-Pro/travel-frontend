import { USER } from '@/constants'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import axios from 'axios'

export default NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async ({ email, password }) => {
        try {
          const response = await axios
            .post(USER.LOGIN, { email, password })
            .then((res) => res.data)

          const user = response.data
          if (user.role === '0' && user.blocked === '0') return user
          return null
        } catch (err) {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.user = user
      }
      return token
    },
    session: ({ token, session }) => {
      if (token) {
        session.user = token.user
      }
      return session
    },
  },
  jwt: {
    secret: 'secret',
  },
  session: {
    strategy: 'jwt',
  },
})
