/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 存放user模块的ajax请求地址
 */
import constant from '../constant/index';
import request from '../utils/request';

const { PROXY_API } = constant;
const api = {
  login: `/${PROXY_API}/user/login`,
  // 获取用户信息
  getUserInfo: `/${PROXY_API}/user/accounts`,
};

// 登录
export async function login(data) {
  return request({
    url: api.login,
    method: 'post',
    data,
  });
}

// 获取用户信息
export async function getUserInfo() {
  return request({
    url: api.getUserInfo,
    method: 'get',
  });
}
