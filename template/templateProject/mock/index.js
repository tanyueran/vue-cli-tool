/**
 * @author [%author%]
 * @date [%date%]
 * @desc mock 配置
 * */
const apiMocker = require('mocker-api');
const path = require('path');

// 配置mock-server
module.exports = (app) => {
  apiMocker(app, path.resolve(__dirname, './api.js'), {
    header: {
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    },
  });
};
