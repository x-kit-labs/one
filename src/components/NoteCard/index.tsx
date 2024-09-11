import * as React from 'react';

import { randomRange } from '@/utils';

import './index.scss';

const NoteCard = ({
  //
  children,
  randomRotate = true,
  onFocus,
  onBlur,
}: React.PropsWithChildren<{
  randomRotate?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}>) => {
  return (
    <div
      tabIndex={0}
      className="m-note-card-container"
      style={
        randomRotate
          ? {
              transform: `rotate(${randomRange(-7, 7)}deg)`,
            }
          : {}
      }
      onFocus={() => {
        onFocus?.();
      }}
      onBlur={() => {
        onBlur?.();
      }}
    >
      <div
        className="m-note-card-tape"
        style={
          randomRotate
            ? {
                transform: `rotate(${randomRange(-7, 7)}deg)`,
              }
            : {}
        }
      />
      <div className="m-note-card-inner">
        <div className="m-note-card-content">{children}</div>
      </div>
    </div>
  );
};

export default NoteCard;
