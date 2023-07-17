import type { Nullable } from '@/types/common'
import type { AuthInfo } from '@/types/user.interface'

interface AuthState {
  accessToken: string
  refreshToken: string
  authInfo: Nullable<AuthInfo>
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: '',
    refreshToken: '',
    authInfo: null,
  }),

  getters: {
    isLoggedIn: state => Boolean(state.accessToken),
  },

  actions: {
    async setAuth(authInfo: Nullable<AuthInfo> = null, accessToken = '', refreshToken = '') {
      this.$patch({
        authInfo,
        accessToken,
        refreshToken,
      })
    },
  },

  persist: true,
})
