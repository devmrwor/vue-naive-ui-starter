export interface ApiResponse<T> {
    status: boolean,
    message: string
    data: T
}