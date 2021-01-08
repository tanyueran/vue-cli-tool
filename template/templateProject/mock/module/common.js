/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 请求公用的接口
 */
const { Random } = require('mockjs');

module.exports = {
  // 请求主键
  'GET /api/common/getKey/:number': (req, res) => {
    const number = res.params.id;
    const list = [];
    for (let i = 0; i < number; i++) {
      list.push(Random.guid());
    }
    return {
      data: list,
      code: '00000',
      message: '请求成功！',
    };
  },
};
