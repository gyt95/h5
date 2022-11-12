import http from './axios'
import { Request } from '@/types'
// import Cookies from 'js-cookie';

export const apiGet = (url: string, params?: any): Promise<Request> => {
  return new Promise((resolve, reject) => {
    http.get(url, { params: params }).then(
      (response: any) => {
        if (typeof response === 'string') {
          const ret: Request = eval(response)
          resolve(ret)
        } else {
          resolve(response)
        }
      },
      response => {
        reject(response)
      }
    )
  })
}
export const apiPost = (
  url: string,
  data?: any,
  option?: any
): Promise<Request> => {
  // const last_data = typeof data != 'object' ? '' : data;
  const opt = option
    ? option
    : {
        headers: {
          'content-type': 'application/json',
        },
      }

  return new Promise((resolve, reject) => {
    http
      .post(url, data, opt)
      .then((response: any) => {
        resolve(response)
      })
      .catch(response => {
        reject(response)
        console.log('post error', response)
      })
  })
}
