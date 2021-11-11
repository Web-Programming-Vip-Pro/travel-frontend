import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useUserStore = create(
  devtools((set, get) => ({
    user: null,
    setUser(user) {
      set({ user })
    },
  }))
)
