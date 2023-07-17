import type { AxiosError } from 'axios'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'
import router from '@/router'

export async function redirectNotAuthorized() {
  const authStore = useAuthStore()
  await authStore.setAuth()

  router.push('/login')
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const auth = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')!) : ''
  const token = auth?.accessToken || ''
  config.headers.Authorization = token ? `Bearer ${token}` : ''

  return config
})

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error: AxiosError) => {
    const { response } = error

    if (response) {
      const { status } = response

      // Token expired
      if ([401, 403].includes(status))
        await redirectNotAuthorized()

      return Promise.reject(response)
    }
  },
)

export const diaryAxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosInstance
