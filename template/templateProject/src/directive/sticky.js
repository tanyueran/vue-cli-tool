/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 吸附功能，自定义命令
 */
import domUtils from '@/utils/domUtils';

const Sticky = {
  // 滚动的距离
  scrollTop: 0,
  // 定时器id
  timer: null,
  // 订阅数据 {id:{top:Number,handler:Function}}
  listener: {},

  // 监听函数
  funcHandler: (el) => (scrollTop, offsetTop) => {
    /* console.log('==========');
    console.log(`距离top的高度:${offsetTop}`);
    console.log(`滚动的高度：${scrollTop}`);
    console.log((offsetTop >= scrollTop)
      && (offsetTop <= (scrollTop + window.innerHeight)));
    console.log('=========='); */
    const { classList } = el;
    // min:滚动高度;  max :滚动高度+ window.innerHeight
    /* console.log(`(${offsetTop} >= ${scrollTop})
    && (${offsetTop} <= (${scrollTop} + ${window.innerHeight}))`); */
    if ((offsetTop >= scrollTop)
      && (offsetTop <= (scrollTop + window.innerHeight))) {
      // console.log('删除');
      if (classList.contains('sticky')) {
        classList.remove('sticky');
      }
    } else {
      // console.log('添加');
      classList.add('sticky');
    }
  },

  // 订阅
  subscribe: (id, handler) => {
    Sticky.listener[id] = handler;
  },

  // 取消订阅
  unsubscribe: (id) => {
    if (Sticky.listener[id] !== undefined) {
      delete Sticky.listener[id];
    }
  },

  // 安装的
  install(Vue) {
    // 创建全局的
    Vue.nextTick(() => {
      // 添加滚动监听
      window.addEventListener('scroll', () => {
        Sticky.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (Sticky.timer !== null) return;
        Sticky.timer = setTimeout(() => {
          /* eslint-disable */
          for (const val in Sticky.listener) {
            const obj = Sticky.listener[val];
            obj.handler(Sticky.scrollTop, obj.top);
          }
          /* eslint-enable */
          // 执行完了，清空定时id
          Sticky.timer = null;
        }, 100);
      });
    });
    // 添加自定义指令
    Vue.directive('sticky', {
      // 订阅的主键
      id: '',
      bind: (el) => {
        // 添加订阅
        const id = `${new Date().getTime()}-${`${Math.random()}`}`;
        this.id = id;
        Sticky.subscribe(id, {
          handler: Sticky.funcHandler(el),
          top: window.innerHeight,
        });
      },
      componentUpdated: (el) => {
        // console.log('componentUpdated');
        // console.log(binding);
        const { classList } = el;
        if (classList.contains('sticky')) {
          classList.remove('sticky');
        }
        // console.log(el.offsetTop);
        if (Sticky.listener[this.id] !== undefined) {
          // 组件更新后，更新元素原本距离顶部的距离
          Sticky.listener[this.id].top = domUtils.getElementTop(el);
          // 默认初始执行一次
          Sticky.listener[this.id].handler(0, el.offsetTop);
        }
      },
      unbind: () => {
        // console.log('unbind');
        // 取消订阅
        Sticky.unsubscribe(this.id);
      },
    });
  },
};

export default Sticky;
