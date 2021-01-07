/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 再次封装axios库
 */
import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store';

const request = axios.create({
  timeout: 100000,
});

/*
* 请求拦截器
* */
request.interceptors.request.use((config) => {
  // 此处可以添加认证的token
  if (store.state.token) {
    /* eslint-disable-next-line */
    config.headers.Authorization = store.state.token;
  }

  return config;
}, (err) => {
  console.log('==============REQUEST==ERROR===============');
  return Promise.reject(err);
});

/*
* 响应拦截器
* */
request.interceptors.response.use(
  (response) => {
    const { data } = response;
    /**
     * 判断是否成功
     */
    if (data.code === '00000') {
      return Promise.resolve(data.data);
    }
    Message({
      type: 'error',
      message: data.message || '本次请求后台出错了',
    });
    return Promise.reject(data);
  }, (error) => {
    // 超时的处理
    if (error.message && error.message.toLocaleLowerCase()
      .indexOf('timeout') > -1) {
      Message({
        type: 'error',
        message: '请求超时,您可以刷新页面重新请求',
      });
      return Promise.reject(error);
    }
    // 对响应错误做点什么
    switch (error.response.status) {
      // 处理后台响应的错误
      case 401:
        Message({
          type: 'error',
          message: (error.response.data && error.response.data.message) || '请登录后，再操作',
        });
        return Promise.reject(error.response.data || error);
      case 403:
        Message({
          type: 'error',
          message: '暂无权限，请联系管理员',
        });
        return Promise.reject(error.response.data || error);
      case 404:
        Message({
          type: 'error',
          message: (error.response.data && error.response.data.message) || '接口不存在，请联系管理员',
        });
        return Promise.reject(error.response.data || error);
      case 500:
        Message({
          type: 'error',
          message: (error.response.data && error.response.data.message) || '服务器出错啦，请求联系管理员',
        });
        return Promise.reject(error.response.data || error);
      default:
        Message({
          type: 'error',
          message: (error.response.data && error.response.data.message) || '未知错误',
        });
        return Promise.reject(error.response.data || error);
    }
  },
);

export default request;
