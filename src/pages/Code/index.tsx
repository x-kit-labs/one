import * as React from 'react';
import * as Next from '@alifd/next';
import * as ReactIntl from 'react-intl';

import { enc, dec } from '@/utils/encoding';

import { formItemLayout, formItemConfig } from './config';

import './index.scss';

const { Form, Input, Box, Divider } = Next;
const FormItem = Form.Item;

const Code = ({ intl }: { intl: any }) => {
  const [encodePreview, setEncodePreview] = React.useState<string>('');
  const [decodePreview, setDecodePreview] = React.useState<string>('');

  const handleEncode = (values, errors) => {
    if (errors) {
      console.log(errors);
    } else {
      console.log(values);
      setEncodePreview(enc(values.beforeString));
    }
  };
  const handleDecode = (values, errors) => {
    if (errors) {
      console.log(errors);
    } else {
      console.log(values);
      setDecodePreview(dec(values.afterString));
    }
  };
  return (
    <>
      <div className="m-code-container">
        <Divider orientation="center">{intl.formatMessage({ id: 'o-code-encode-divider-label' })}</Divider>
        <Form {...formItemLayout}>
          <FormItem
            name="beforeString"
            label={intl.formatMessage({ id: 'o-code-encode-text-label' })}
            required
            requiredMessage={intl.formatMessage({ id: 'o-required' })}
          >
            <Input.TextArea rows={formItemConfig.textarea.rows} />
          </FormItem>
          <FormItem label={intl.formatMessage({ id: 'o-preview' })}>
            <Input.TextArea rows={formItemConfig.textarea.rows} readOnly value={encodePreview} />
          </FormItem>
          <FormItem label=" " colon={false}>
            <Box direction="row" spacing={8}>
              <Form.Submit type="secondary" size={formItemLayout.size} validate onClick={handleEncode}>
                {intl.formatMessage({ id: 'o-code-encode-button' })}
              </Form.Submit>
            </Box>
          </FormItem>
        </Form>
        <div style={{ height: '10px' }} />
        <Divider orientation="center">{intl.formatMessage({ id: 'o-code-decode-divider-label' })}</Divider>
        <Form {...formItemLayout}>
          <FormItem
            name="afterString"
            label={intl.formatMessage({ id: 'o-code-decode-base64url-label' })}
            required
            requiredMessage={intl.formatMessage({ id: 'o-required' })}
          >
            <Input.TextArea rows={formItemConfig.textarea.rows} width="100%" />
          </FormItem>
          <FormItem label={intl.formatMessage({ id: 'o-preview' })}>
            <Input.TextArea rows={formItemConfig.textarea.rows} readOnly value={decodePreview} />
          </FormItem>
          <FormItem label=" " colon={false}>
            <Box direction="row" spacing={8}>
              <Form.Submit type="secondary" size={formItemLayout.size} validate onClick={handleDecode}>
                {intl.formatMessage({ id: 'o-code-decode-button' })}
              </Form.Submit>
            </Box>
          </FormItem>
        </Form>
      </div>
    </>
  );
};

export default ReactIntl.injectIntl(Code);
