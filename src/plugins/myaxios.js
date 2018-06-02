import axios from 'axios'

const MyAxios = {}
MyAxios.install = function (Vue) {
  const instance = axios.create({
    baseURL: 'https://localhost:3000',
  });
  Vue.prototype
}