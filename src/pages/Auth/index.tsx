import * as React from 'react';
import * as Next from '@alifd/next';
import * as ReactIntl from 'react-intl';
import * as LocalStorage from '@realign-zone/local-storage';

import { queryAuth } from '@/api';
import { LS_AUTH_K, STATIC_LOGO } from '@/constants';

import './index.scss';

const FormItem = Next.Form.Item;

const FormProps = {
  colon: true,
  labelCol: {
    fixedSpan: 0,
  },
  wrapperCol: {
    span: 24,
  },
  fullWidth: true,
  style: { width: '50%' },
};

const Auth = ({ intl }: { intl: any }) => {
  const handleSubmit = async (values, errors) => {
    if (errors === null) {
      const x = await queryAuth(values.authKey);
      LocalStorage.set(LS_AUTH_K, x.success ? values.authKey : '', { cover: true });
      location.reload();
    }
  };

  return (
    <div className="m-auth-container">
      <Next.Avatar
        //
        className="u-auth-logo"
        shape="square"
        src={STATIC_LOGO}
      />
      <Next.Form size="large" {...FormProps}>
        <FormItem name="authKey" label="" required requiredMessage="🙄🙄🙄🙄🙄🙄">
          <Next.Input.Password placeholder="******" />
        </FormItem>
        <FormItem label="" style={{ textAlign: 'center' }} colon={false}>
          <Next.Form.Submit
            //
            validate
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
          >
            {intl.formatMessage({ id: 'o-auth-enter' })}
          </Next.Form.Submit>
        </FormItem>
      </Next.Form>
    </div>
  );
};

export default ReactIntl.injectIntl(Auth);
