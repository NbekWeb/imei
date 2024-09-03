import axios from 'axios'

export const axiosInstance = axios.create({
   baseURL: "https://api.uint.uz/api/",
   timeout: 20000,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
})

export interface AxiosResponse<T> {
   data: T
   headers: {
      file: string
   }
}

export interface BaseError {
   code: 1,
   message: ''
}



axiosInstance.interceptors.request.use(
   (config: any) => {
        
      return config
   },
   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   (response) => {
      return response
   },
   (error) => {
      return Promise.reject(error)
   }
)
