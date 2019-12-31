import {getFetchRequest, postFetchRequest, fetchRequestAsync} from './fetch';

/**
 * 首页轮播图
 */
export function homeBannerList() {
  return getFetchRequest('server/api/banner', 'GET', {});
}
