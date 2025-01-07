export type T_BizType = 'post' | 'article' | 'profile' | 'hashtag';
export const BizConfig = {
  appLinkPrefix: 'bnc://app.binance.com',
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
  hashtag: {
    startPath: '/content/topicdetails',
    idKey: 'hashTag',
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
      {
        value: 'hashtag',
        label: 'HashTag',
      },
    ],
    shape: 'button' as any,
  },
};

export const formItemBizIdPreMap: Record<T_BizType, string> = {
  post: 'postId=',
  article: 'articleId=',
  profile: 'username=',
  hashtag: 'hashTag=',
};
