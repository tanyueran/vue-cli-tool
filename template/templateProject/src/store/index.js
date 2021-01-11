/**
 * @author [%author%]
 * @date [%date%]
 * @Description: vuex状态入口
 */
import Vue from 'vue';
import Vuex from 'vuex';
import User from './module/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: User,
  },
  state: {
    collapse: true,
  },
  mutations: {
    // 切换导航栏
    change_collapse(state, val) {
      Vue.set(state, 'collapse', val);
    },
  },
});
