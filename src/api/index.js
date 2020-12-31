// import axios from 'axios'
// import router from './index'
// import qs from 'qs'
//
// // const DOMAIN = 'http://shop.voyagerss.com'
// const DOMAIN =  '/api'
//
// const BadRequest = 400
// const Unauthorized = 401
// const Forbidden = 403
// const NotFound = 404


// export const setAuthInHeader = token => {
//   axios.defaults.headers.common['Authorization'] = token ? 'Bearer ${token}' : null
// }
//
// const onUnauthorized = () => {
//   router.push('/login?returnPath=${encodeURIComponent(location.pathname)}')
//   throw Error(response)
// }
// const onForbidden = (response) => {
//   alert('권한이 없습니다.')
//   router.push('/')
//   throw Error(response)
// }
//
// const onBadRequest = (response) => {
//   alert('잘못된요청입니다.')
//   throw Error(response)
// }
//
// const onNotFound = (response) => {
//   alert('잘못된 접근입니다.')
//   throw Error(response)
// }
//
//
// const authRequest = (method, url, data) => {
//   return axios({
//     headers: {
//       'Authorization': 'Basic aWQ6c2VjcmV0',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     method,
//     url: DOMAIN + url,
//     data: qs.stringify(data)
//   }).then(result => result)
//     .catch(({response}) => {
//       if (response.status === Unauthorized) return onUnauthorized()
//       else if (response.status == Forbidden) return onForbidden(response)
//       else if (response.status == BadRequest) return onBadRequest(response)
//       else if (response.status == NotFound) return onNotFound(response)
//       throw Error(response)
//     })
// }
//
// const request = (method, url, data) => {
//   return axios({
//     method,
//     url: DOMAIN + url,
//     data,
//
//   }).then(result => result)
//     .catch(error => error.response)
// }

// const requestFile = (method, url, data) => {
//   return axios({
//     method,
//     url: DOMAIN + url,
//     data,
//     processData: false,
//     contentType: false
//
//   }).then(result => result)
//     .catch(error => error.response)
// }

// export const auth = {
//   login(playload) {
//     return authRequest('post',  '/oauth/token', playload)
//   }
// }

// export const account = {
//   fetch() {
//     return request('get',  '/accounts')
//   },
//   create(playload) {
//     return request('post',  '/accounts', playload)
//   },
//   put(playload) {
//     return request('put',  '/accounts', playload)
//   },
//   fetchManager(playload) {
//     return request('get',  '/accounts/manager?page=${playload.page}&size=10&sort=id,DESC')
//   },
//   fetchManagerSearch(playload) {
//     return request('get',  '/accounts/manager/${playload.option}/${playload.keyword}?page=${playload.page}&size=10&sort=id,DESC')
//   },
//   idCheck(playload) {
//     return request('post',  '/accounts/join/check', playload)
//   },
//   createFiles(playload) {
//     return requestFile('post',  '/accounts/files/${playload.accountId}', playload.formData)
//   }
// }

// export const cart = {
//   fetch() {
//     return request('get',  '/carts')
//   },
//   create(playload) {
//     return request('post',  '/carts/${playload.itemId}')
//   },
//   destroy(playload) {
//     return request('delete',  '/carts/${playload.id}')
//   },
//   destroyAll() {
//     return request('delete',  '/carts/all')
//   }
// }
//