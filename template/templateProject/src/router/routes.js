/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 所有的路由
 */
export default [
  {
    path: '/',
    redirect: '/home',
  },
  // 首页
  {
    path: '/home',
    name: 'homePage',
    component: () => import('../pages/home/index/index.vue'),
  },
  // 登录页面
  {
    path: '/login',
    name: 'loginPage',
    meta: {
      needLogin: false,
    },
    component: () => import('../pages/login/index.vue'),
  },
  // 404
  {
    path: '*',
    component: () => import('../pages/notFound/index.vue'),
  },
];
