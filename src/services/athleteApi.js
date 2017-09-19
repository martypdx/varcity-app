import { request } from './_request';

const API_URL = '/athletes';

export default {
  get(id, tab = '') {
    return request.get(`${API_URL}/${id}/${tab}`);
  },
  update(id, data, tab = '') {
    return request.patch(`${API_URL}/${id}/${tab}`, data);
  }
};
