import * as React from 'react';

import './unit.scss';

export const EncodingView = ({ str }: { str: string }) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <div className="m-work-unit-encoding_view" dangerouslySetInnerHTML={{ __html: str }} />
    </>
  );
};
