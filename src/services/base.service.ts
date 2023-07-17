import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AxiosError } from 'axios'
import { Nullable } from '@/types/common'

export type ExecuteResponse<T> = [Nullable<AxiosError>, T, number | unknown]

export default class BaseService {
  axiosInstance: AxiosInstance

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance
  }

  public async execute<T>(config: AxiosRequestConfig): Promise<ExecuteResponse<T>> {
    try {
      const { data, status } = await this.axiosInstance.request<T>(config)

      return [null, data, status]
    }
    catch (error) {
      const { data, status } = error as any
      return [error as AxiosError, data, status]
    }
  }
}
