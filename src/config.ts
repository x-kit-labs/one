export default {
  // 默认配置
  default: {
    server: 'https://api.realign.cn',
  },
  local: {
    // eslint-disable-next-line @iceworks/best-practices/no-http-url
    server: 'https://localhost:8001',
  },
  // daily: {
  //   appId: '789',
  // },
  prod: {
    server: 'https://api.realign.cn',
  },
};
