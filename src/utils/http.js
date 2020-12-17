import axios from 'axios'
import { Loading, Message } from 'element-ui';

let loadingInstance = null;     // 加载全局的loading

const instance = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
  timeout: 60000, // 适当延长超时时间
  //baseURL: process.env.NODE_ENV === 'production' ? '/dgscgl' : '/dgscgl',   //根据自己配置的反向代理去设置不同环境的baeUrl
  baseURL: 'dgscgl',
  headers: {
    token: sessionStorage.getItem('token') || ''
  }
});
// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type' application/json
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//instance.defaults.headers.post['Content-Type'] = 'application/json'

let httpCode = {        //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
};

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
  loadingInstance = Loading.service({       // 发起请求时加载全局loading，请求失败或有响应时会关闭
    spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
    text: '加载中...'
  });

  // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
  if (config.url.includes('pur/contract/export')) {
    config.headers['responseType'] = 'blob'
  }
  // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
  if (config.url.includes('pur/contract/upload')) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  return config
}, error=> {
  // 对请求错误做些什么
  return Promise.reject(error)
});

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
  loadingInstance.close();
  if (response.data.status === 1) {     // 响应结果里的status: 1 是我与后台的约定，大家可以根据实际情况去做对应的判断
    return Promise.resolve(response.data)
  } else if( response.data.status === -1 ){
    // 该项操作无权限，提示用户
    Message({
      message: response.data.message,
      type: 'warning',
    });
    return Promise.reject(response.data.message)
  }else if(response.data.status === 2){
    // 用户身份失效,跳转首页
    Message({
      showClose: false,
      message: response.data.message,
      type: 'error',
      duration: 1000,
      onClose: () => {
        window.location.href = ''; // 跳转首页
      }
  });
  }else{
    Message({
      message: response.data.message,
      type: 'error',
    });
    return Promise.reject(response.data.message)
  }
  //return Promise.resolve(response.data)
}, error => {
  loadingInstance.close();
  if (error.response) {
    // 根据请求失败的http状态码去给用户相应的提示
    let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message;
    Message({
      message: tips,
      type: 'error',
    });
    return Promise.reject(error)
  } else {
    if( error.code === 'ECONNABORTED' ){
      Message({
        message: '请求超时, 请刷新重试',
        type: 'error'
      });
      return Promise.reject(new Error('请求超时，请重试'))
    }

    return Promise.reject(new Error('未知异常，请重试'))

  }
});

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'get',
      url,
      params,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
};

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      data,
      ...config
    }).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
};



export const baseUrl = 'dgscgl';

// export const getImg  = (url, params, config = {}) => {
//   return new Promise((resolve, reject) => {
//     instance({
//       method: 'get',
//       url,
//       params,
//       ...config
//     }).then(response => {
//       resolve(response)
//     }).catch(error => {
//       reject(error)
//     })
//   })
// };

/* 或者写成下面这样： Promise.resolve() 和 Promise.reject()返回的是promise对象，二者都是语法糖  */
// export const post = (url, data, config = {}) => {
//   return instance({
//     method: 'post',
//     url,
//     data,
//     ...config
//   }).then(response => {
//     return Promise.resolve(response)
//   }).catch(error => {
//     return Promise.reject(error)
//   })
