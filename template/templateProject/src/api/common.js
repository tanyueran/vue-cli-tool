/**
 * @author [%author%]
 * @date [%date%]
 * @Description: 一些公用的api接口
 */
import request from '../utils/request';
import constant from '../constant/index';

const { PROXY_API } = constant;

export const api = {
  // 请求主键
  getPrimaryKey: `/${PROXY_API}/common/getKey`,
};

// 请求主键
export async function getPrimaryKey(number) {
  return request({
    url: `${api.getPrimaryKey}/${number}`,
  });
}
