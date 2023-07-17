import AuthService from './auth.service'
import axios from '@/libs/axios'

const axiosInstance = axios

export const authService = new AuthService(axiosInstance)
