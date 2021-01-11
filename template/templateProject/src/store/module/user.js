import Vue from 'vue';
import { getUserInfo } from '@/api/user';

/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 用户模块的状态管理
 */

// 数据初始化
const initDataObj = (function init() {
  const token = window.sessionStorage.getItem('token');
  const userInfo = window.sessionStorage.getItem('userInfo');
  const result = {};
  if (token) {
    result.token = token;
  } else {
    result.token = '';
  }
  if (userInfo) {
    result.userInfo = JSON.parse(userInfo);
  } else {
    result.userInfo = {};
  }
  return result;
}());

export default {
  namespaced: true,
  state: {
    token: initDataObj.token,
    userInfo: initDataObj.userInfo,
  },
  getters: {
    // 获取用户信息
    getUserInfo: (state) => state.userInfo,
  },
  mutations: {
    set_token(state, val) {
      window.sessionStorage.setItem('token', val);
      Vue.set(state, 'token', val);
    },
    set_user_info(state, val) {
      window.sessionStorage.setItem('userInfo', JSON.stringify(val));
      Vue.set(state, 'userInfo', val);
    },
  },
  actions: {
    /**
     * 获取用户信息
     * @param commit
     */
    get_user_info({ commit }) {
      getUserInfo()
        .then((res) => {
          commit('set_user_info', res);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 退出登录
    logout({ commit }) {
      commit('set_token', '');
      commit('set_user_info', {});
    },
  },
};
