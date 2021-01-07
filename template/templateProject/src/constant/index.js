/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 放置全局使用的常量
 */
export default {
  // 代理的标识符
  PROXY_API: 'api',

  // 正则
  regexpObj: {
    // 邮编
    post: /^(\d{4}|\d{6})$/,
    // 身份证号码
    idCard: /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    // 统一社会信用代码
    creditCode: /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/,
    // 数字
    number: /^[0-9.]+$/,
    // 手机号码
    telephone: /^1[0-9]{10}$/,
  },
};
