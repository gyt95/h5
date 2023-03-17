import { apiGet } from '@h5/core'
export const userInfoUrl = () =>
  apiGet({
    url: '/uinfo',
    token: 'tokenB',
  })
