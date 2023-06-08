import Mock from 'mockjs';

Mock.mock('http://localhost:5173/user', {
  name: '@name',
  email: '@email',
  'age|1-10': 5,
});

Mock.mock('http://localhost:5173/menu', {
  id: '@increment',
  name: 'menu',
  'order|10-20': 12,
});

Mock.mock('http://localhost:5173/login', {
  data: {
    token: '4324252534543535',
  },
});
