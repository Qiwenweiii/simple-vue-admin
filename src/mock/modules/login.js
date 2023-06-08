export function login() {
  return {
    // isOpen: false,
    url: 'http://localhost:5173/login',
    type: 'get',
    data: {
      msg: 'success',
      code: 0,
      data: {
        token: '4344323121398',
        // 其他数据
      },
    },
  };
}
