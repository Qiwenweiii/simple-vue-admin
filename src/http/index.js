import axios from './axios';

export const login = (data) => {
  return axios({
    url: '/login',
    method: 'post',
    data,
  });
};

export const getUser = () => {
  return axios({
    url: '/user',
    method: 'get',
  });
};

export const getMenu = (data) => {
  return axios({
    url: '/menu',
    method: 'post',
    data,
  });
};

// 默认全部导出
export default {
  login,
  getUser,
  getMenu,
};
