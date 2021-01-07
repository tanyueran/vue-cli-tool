/**
 * @author [%author%]
 * @date [%date%]
 * @desc 全局过滤器文件
 * */
export default {
  // 千分位分隔符
  /* eslint-disable-next-line */
  thousandBitSeparator: (num) => (num ? (num.toString()
    .indexOf('.') !== -1 ? num.toString()
      .replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => `${$1},`) : num.toString()
      .replace(/(\d)(?=(\d{3}))/g, ($0, $1) => `${$1},`)) : '-'),

};
