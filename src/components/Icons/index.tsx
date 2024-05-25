// import { Icon } from '@alifd/next';

// export const CustomIcons = Icon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/c/font_4561712_dfhibujujke.js',
// });

import React, { CSSProperties } from 'react';

export const CustomIcons = ({ type, style }: { type: string; style?: CSSProperties }) => {
  return (
    <i className="next-icon next-medium">
      <svg className="next-icon-remote" focusable="false" style={style}>
        <use xlinkHref={`#${type}`} />
      </svg>
    </i>
  );
};
