/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 用户的mock
 */
const { Random } = require('mockjs');

module.exports = {
  // 登录
  'POST /api/user/login': {
    data: 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDVVAtRklMRS1TRVJWSUNFXHQiLCJhdXRoIjoiY29uc3VtZXIiLCJleHAiOjI0OTkxMzAyOTJ9.uI3RqqwksOoF_bSeLaVQx9QHkt4ArMUSpDxrPnimwr8',
    code: '00000',
    message: '操作成功',
  },
  // 获取用户信息
  'GET /api/user/accounts': {
    data: {
      userName: Random.cname(),
      userCode: 'userCode',
    },
    code: '00000',
    message: '操作成功',
  },
};
