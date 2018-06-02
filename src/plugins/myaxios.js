import axios from 'axios'

const MyAxios = {}
MyAxios.install = function (Vue) {
  const instance = axios.create({
    baseURL: 'http://localhost:3000'
  })
  Vue.prototype.$http = instance
}
export default MyAxios
