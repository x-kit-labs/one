export const BizConfig = {
  linkPrefix: 'bnc://app.binance.com/mp/app',
  appId: 'znf9fpiMh6ufdU3vDtAvi4',
  post: {
    startPath: 'cGFnZXMvYml0cy1idXp6L2luZGV4',
    idKey: 'postId',
  },
  article: {
    startPath: 'cGFnZXMvYXJ0aWNsZS1idXp6L2luZGV4',
    idKey: 'articleId',
  },
  profile: {
    startPath: 'cGFnZXMvYnV6ei1wcm9maWxlL2luZGV4',
    idKey: 'username',
  },
};

export const formItemLayout = {
  style: {
    width: '100%',
  },
  size: 'large' as any,
  labelCol: {
    fixedSpan: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

export const formConfigData = {
  type: {
    dataSource: [
      {
        value: 'post',
        label: 'Short Post',
      },
      {
        value: 'article',
        label: 'Long Article',
      },
      {
        value: 'profile',
        label: 'User Profile',
      },
    ],
    shape: 'button' as any,
  },
};

export const formItemBizIdPreMap = {
  post: 'postId=',
  article: 'articleId=',
  profile: 'username=',
};
