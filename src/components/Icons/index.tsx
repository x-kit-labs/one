import * as React from 'react';

export const CustomIcons = ({
  //
  type,
  style,
}: {
  type: string;
  style?: React.CSSProperties;
}) => {
  return (
    <i className="next-icon next-medium">
      <svg className="next-icon-remote" focusable="false" style={style}>
        <use xlinkHref={`#${type}`} />
      </svg>
    </i>
  );
};
