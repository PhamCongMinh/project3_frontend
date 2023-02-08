import axios, { AxiosRequestConfig, ResponseType } from 'axios'

export class AxiosService {
  readonly service

  constructor() {
    // const tokenAccess = StorageUtils.getToken()
    const service = axios.create({
      withCredentials: false,
      responseType: 'json',
      baseURL: 'http://localhost:5000/api/v1' || '',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTMxNTFkMGJhNDNjZjFkZTJlMDMzNSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJyb2xlIjoicmVudGVyIiwiaWF0IjoxNjc1ODM5MTE4LCJleHAiOjE2NzU4NDAwMTh9.fpcAIGFENbFhBBC66Atv5Jt2A-ttztvJXDxsoN2nDow'
      }
    })
    service.interceptors.request.use(this.handleInterceptRequest)
    service.interceptors.response.use(this.handleSuccess, this.handleError)
    this.service = service
  }

  setHeader(name: any, value: any) {
    this.service.defaults.headers.common[name] = value
  }

  removeHeader(name: string) {
    delete this.service.defaults.headers.common[name]
  }

  handleInterceptRequest(config: any) {
    return config
  }

  handleSuccess(response: any) {
    return response.data
  }

  handleError = (error: any) => {
    throw error
  }

  redirectTo = (document: any, path: string) => {
    document.location = path
  }

  async get(endpoint: string, options?: AxiosRequestConfig) {
    return this.service.get(endpoint, options)
  }

  async post(endpoint: string, payload: any, options?: AxiosRequestConfig) {
    return this.service.post(endpoint, payload, options)
  }

  async put(endpoint: string, payload: any, options?: AxiosRequestConfig) {
    return this.service.put(endpoint, payload, options)
  }

  async patch(endpoint: string, payload: any, options?: AxiosRequestConfig) {
    return this.service.patch(endpoint, payload, options)
  }

  async delete(endpoint: string, options?: AxiosRequestConfig) {
    return this.service.delete(endpoint, options)
  }
}

export default new AxiosService()