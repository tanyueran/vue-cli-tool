/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 一些原生dom的操作
 */
export default {
  /**
   * 获取元素距离顶部的距离
   * @param el dom
   * @returns {number}
   */
  getElementTop: (el) => {
    let top = el.offsetTop;
    let current = el.offsetParent;
    while (current !== null) {
      top += current.offsetTop;
      current = current.offsetParent;
    }
    return top;
  },
};
