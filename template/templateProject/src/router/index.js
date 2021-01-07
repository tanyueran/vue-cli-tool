/**
 * @author [%author%]
 * @date [%author%]
 * @Description: vue-router的路由
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import { Loading } from 'element-ui';
import routes from './routes';
import store from '../store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 保存加载显示对象
let loading = null;

router.beforeEach((to, from, next) => {
  loading = Loading.service({
    text: '页面加载中...',
  });
  // 判断是否登录
  if (!store.state.user.token) {
    if (to.meta.needLogin !== false) {
      return next({
        name: 'loginPage',
      });
    }
  }
  return next();
});

/* eslint-disable */
router.afterEach((to, from) => {
  if (loading != null) {
    Vue.nextTick(() => {
      loading.close();
    });
  }
});
/* eslint-enable */

export default router;
