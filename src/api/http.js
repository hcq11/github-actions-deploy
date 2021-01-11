import Vue from 'vue';
import axios from 'axios'
import router from '../router';
import { getToken } from './auth.js'
import { base } from '../constant'


const http = axios.create({
  baseURL: base
})

http.interceptors.request.use(function (config) {
  if (config.url.indexOf('/token') !== 0) {
   // console.log('get token:', getToken())
    config.headers['Authorization'] = getToken()
  }
  return config
}, function (error) {
  return Promise.reject(error)
})


http.interceptors.response.use(
  res => {
    return res;
  },
  error => {
    if (error) {
      if (error.response) {
        console.log('data:', error.response.data);
        console.log('status:', error.response.status);
        console.log('headers:', error.response.headers);

        const status = error.response.status;
        const errortext = codeMessage[status] || error.response.statusText;
        Vue.prototype.$message.error(status + ':' + errortext);
        if (status === 401) {
          router.push('/login')
        }
      } else if( error.request) {
        console.log('request error:', error.request);
        Vue.prototype.$message.error('连接服务器失败')
      } else {
        Vue.prototype.$message.error(error.message)
        return console.log('Error', error.message);
      }
      console.log('err config:',err.config);
    }
    return Promise.reject(error);
  }
);

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const httpPlugin = {}

httpPlugin.install = function (Vue, options) {
  Vue.prototype.$http = http
}

export default httpPlugin
