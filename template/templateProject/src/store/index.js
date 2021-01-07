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
});
