import * as React from 'react';
import { runApp, IAppConfig } from 'ice';
import authRoutes from '@/routes-auth';
import LocalStorage from '@realign-zone/local-storage';
import { LS_K } from '@/constants';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
    fallback: <div />,
    // https://ice.work/docs/guide/basic/router/
    // https://github.com/brix/crypto-js
    modifyRoutes(routes) {
      const lk = LocalStorage.get(LS_K);
      return lk?.value ? routes : authRoutes;
      // /
    },
  },
};

runApp(appConfig);
