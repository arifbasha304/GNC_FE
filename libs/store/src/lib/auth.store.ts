import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
}

interface User {
  id: string
  name: string
  email: string
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuthenticated: false,
        login: (user, token) =>
          set({ user, token, isAuthenticated: true }, false, 'auth/login'),
        logout: () =>
          set({ user: null, token: null, isAuthenticated: false }, false, 'auth/logout'),
      }),
      {
        name: 'auth-storage',
      }
    )
  )
)