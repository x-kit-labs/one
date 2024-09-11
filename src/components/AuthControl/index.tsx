import * as React from 'react';
import * as ReactIntl from 'react-intl';
import * as LocalStorage from '@realign-zone/local-storage';

import { LS_AUTH_K } from '@/constants';

const AuthControl = ({ intl }: { intl: any }) => {
  const logoutEvt = () => {
    LocalStorage.set(LS_AUTH_K, '', { cover: true });
    location.reload();
  };

  return (
    <div
      style={{
        cursor: 'pointer',
      }}
      onClick={logoutEvt}
    >
      {intl.formatMessage({ id: 'o-auth-logout' })}
    </div>
  );
};

export default ReactIntl.injectIntl(AuthControl);
