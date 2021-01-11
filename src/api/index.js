import request from '../utils/request';
import * as api from './robotapi';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};

export default api;
