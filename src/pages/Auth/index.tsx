import React from 'react';
import * as Next from '@alifd/next';

import { queryAuth } from '@/api';
import LocalStorage from '@realign-zone/local-storage';
import { LS_K, STATIC_LOGO } from '@/constants';

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

const Auth = () => {
  const handleSubmit = async (values, errors) => {
    if (errors === null) {
      const x = await queryAuth(values.authKey);
      LocalStorage.set(LS_K, x.success ? values.authKey : '', { cover: true });
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
          <Next.Input.Password placeholder="访问密码" />
        </FormItem>
        <FormItem label="" style={{ textAlign: 'center' }} colon={false}>
          <Next.Form.Submit
            //
            type="primary"
            validate
            onClick={handleSubmit}
          >
            开启
          </Next.Form.Submit>
        </FormItem>
      </Next.Form>
    </div>
  );
};

export default Auth;
