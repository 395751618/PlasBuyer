import {fetchRequest} from './fetch';

export const homeBannerList = fetchRequest('server/api', 'GET', {}).then(
  res => {},
);
