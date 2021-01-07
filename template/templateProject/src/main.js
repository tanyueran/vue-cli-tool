/**
 * @author [%author%]
 * @date [%date%]
 * @Description: vue工程的入口文件
 */
import Vue from 'vue';
// 引入自定的插件
import Sticky from '@/directive/sticky';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/index.scss';
import './plugins/element';
// 引入自定义的全局组件
import mHeaderComp from './components/m-header.vue';

Vue.use(Sticky);
Vue.config.productionTip = false;

Vue.component('m-header-comp', mHeaderComp);

// 初始化
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
