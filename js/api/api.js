import {getFetchRequest, fetchRequestAsync} from './fetch';

// export const homeBannerList = fetchRequest('server/api', 'GET', {}).then(
//   res => {},
// );

export function homeBannerList() {
  return getFetchRequest('server/api/banner', 'GET', {});
}
