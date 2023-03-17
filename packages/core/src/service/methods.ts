import http from './axios'
import { Request } from '../types'

export const apiGet = <T>({
  url,
  params,
  token,
}: {
  url: string
  params?: T
  token: string
}): Promise<Request> => {
  return new Promise((resolve, reject) => {
    http.get(url, { params: params, headers: { auth: token } }).then(
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

export const apiPost = <T>({
  url,
  data,
  token,
  options,
}: {
  url: string
  data: T
  token: string
  options?: any
}): Promise<Request> => {
  // const last_data = typeof data != 'object' ? '' : data;
  const opt = options
    ? options
    : {
        'content-type': 'application/json',
      }

  return new Promise((resolve, reject) => {
    http
      .post(url, { data: data, headers: { auth: token, ...opt } })
      .then((response: any) => {
        resolve(response)
      })
      .catch(response => {
        reject(response)
        console.log('post error', response)
      })
  })
}
