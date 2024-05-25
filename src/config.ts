export default {
  // 默认配置
  default: {
    server: 'https://api.realign.cn',
  },
  local: {
    // eslint-disable-next-line @iceworks/best-practices/no-http-url
    server: 'http://localhost:8002',
  },
  // daily: {
  //   appId: '789',
  // },
  prod: {
    server: 'https://api.realign.cn',
  },
};