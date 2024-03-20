import { axiosInstance } from "./axios.ts"


export async function postCall_API(phone: string): Promise<[null, number] | [Error, null]> {
   try {
      const response = <any>await axiosInstance.post(`/call/order?phone=${phone}`)

      console.log('response', response);
      return [null, response.data]
   } catch (error) {
      console.log('dddd',error);
      return [error as Error, null]
   }
}