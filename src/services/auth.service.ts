import BaseService from './base.service'
import { ApiResponse } from '@/types/api'
import { AuthInfo } from '@/types/user.interface'

export interface LoginResponse {
  user: AuthInfo
  accessToken: string
  refreshToken: string
}

export default class AuthService extends BaseService {
  public async login(data: { username: string; password: string }) {
    return this.execute<ApiResponse<LoginResponse>>({ method: 'POST', url: '/admin/admin-login', data })
  }
}
