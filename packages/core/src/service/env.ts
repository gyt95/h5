/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 *
 */
let baseUrl, apiUrl, cdnUrl, suffix
let routerMode, uploadUrl

const assetsPrefix = 'https://xxx.com'
const imagesUrl = assetsPrefix + '/static/images'

if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
  apiUrl = ''
  routerMode = 'hash'
  cdnUrl = ''
  suffix = ''
  uploadUrl = 'https://xxx.com'
} else {
  // baseUrl = window.location.origin + '/templates'; // 仅用于跳转页面
  baseUrl = ''
  apiUrl = '/api' // 用于发送请求
  routerMode = 'hash'
  cdnUrl = ''
  suffix = '.html'
  uploadUrl = '/img'
}

export default {
  baseUrl,
  routerMode,
  apiUrl,
  cdnUrl,
  suffix,
  uploadUrl,
  imagesUrl,
}
