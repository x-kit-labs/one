import * as React from 'react';
import * as Next from '@alifd/next';
import * as ReactIntl from 'react-intl';

import { IF_HotKeysTableItem } from './helper';

export const BalloonHotkeys = ({
  //
  data,
}: {
  data: IF_HotKeysTableItem[];
}) => {
  return (
    <Next.Balloon
      //
      v2
      closable={false}
      align="lb"
      trigger={<Next.Icon type="help" />}
      triggerType="hover"
    >
      <Next.Table size="small" dataSource={data}>
        <Next.Table.Column
          //
          title={<ReactIntl.FormattedMessage id="o-note-hotkey-tip-key" />}
          dataIndex="hotKey"
        />
        <Next.Table.Column
          //
          title={<ReactIntl.FormattedMessage id="o-note-hotkey-tip-desc" />}
          cell={(_value, _index, record) => {
            return (
              <span>
                <ReactIntl.FormattedMessage id={record.descI18nKey} />
              </span>
            );
          }}
          dataIndex="descI18nKey"
        />
      </Next.Table>
    </Next.Balloon>
  );
};
