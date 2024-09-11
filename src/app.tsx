import * as React from 'react';
import {
  //
  runApp,
  IAppConfig,
  useLocale,
  getDefaultLocale,
} from 'ice';
import * as ReactIntl from 'react-intl';
import * as LocalStorage from '@realign-zone/local-storage';

import authRoutes from '@/routes-auth';
import { LS_AUTH_K } from '@/constants';
import { i18n } from '@/i18n';

import './styles/custom.scss';

function LocaleProvider({ children }) {
  const [locale] = useLocale();
  const defaultLocale = getDefaultLocale();

  return (
    <ReactIntl.IntlProvider
      //
      messages={i18n[locale]}
      locale={locale}
      defaultLocale={defaultLocale}
    >
      {children}
    </ReactIntl.IntlProvider>
  );
}

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => (
      //
      <LocaleProvider>{children}</LocaleProvider>
    ),
  },
  router: {
    type: 'browser',
    fallback: <div />,
    // https://ice.work/docs/guide/basic/router/
    // https://github.com/brix/crypto-js
    modifyRoutes(routes) {
      const lk = LocalStorage.get(LS_AUTH_K);
      return lk?.value ? routes : authRoutes;
      // /
    },
  },
};

runApp(appConfig);
