/**
 * @author [%author%]
 * @date [%date%]
 * @desc mock 数据模块引入
 * */
const user = require('./module/user.js');
const common = require('./module/common');

// 所有的mock接口入口文件
module.exports = {
  ...user,
  ...common,
};
