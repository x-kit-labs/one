import * as React from 'react';
import { setLocale } from 'ice';

import { EN_ACTIVE, LOCALE_ACTIVE, LOCALE_TARGET } from '@/constants';

const LocaleSwitcher = () => {
  const unActiveStyle: React.CSSProperties = {
    color: '#777',
  };

  const toggleLocaleEvt = () => {
    setLocale(LOCALE_TARGET);
    location.replace(location.pathname.replace(`/${LOCALE_ACTIVE}`, `/${LOCALE_TARGET}`));
  };

  return (
    <div
      style={{
        cursor: 'pointer',
      }}
      onClick={toggleLocaleEvt}
    >
      <span
        //
        style={EN_ACTIVE ? {} : unActiveStyle}
      >
        EN
      </span>
      /
      <span
        //
        style={EN_ACTIVE ? unActiveStyle : {}}
      >
        简
      </span>
    </div>
  );
};

export default LocaleSwitcher;
