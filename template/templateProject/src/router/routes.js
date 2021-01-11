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
    path: '/',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'homePage',
        component: () => import('../pages/home/index/index'),
      },
      {
        path: '/home/page1',
        name: 'homePage1',
        component: () => import('../pages/home/page1'),
      },
      {
        path: '/home/page2',
        name: 'homePage2',
        component: () => import('../pages/home/page2'),
      },
    ],
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
