import * as React from 'react';
import * as Next from '@alifd/next';
import * as ReactIntl from 'react-intl';

import { useCopy } from '@/hooks';

import { EncodingView } from './unit';
import { formItemLayout, formConfigData, formItemBizIdPreMap } from './config';
import { generateFn, generateDeFn } from './_';

import './index.scss';

const { Form, Input, Radio, Button, Box } = Next;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const Work = ({ intl }: { intl: any }) => {
  const { copy } = useCopy();
  const [bizIdPre, setBizIdPre] = React.useState<string>('');
  const [resPreview, setResPreview] = React.useState<string>('');
  const [resReviewCheck, setResReviewCheck] = React.useState<string>('');

  const bizReset = () => {
    setBizIdPre('');
    setResPreview('');
    setResReviewCheck('');
  };

  const handleGenerate = (values, errors) => {
    if (errors) {
      console.error(errors);
    } else {
      const res = generateFn({
        type: values.type,
        id: values.bizId,
        attachStr: values.attachParams || '',
      });
      setResPreview(res);
      setResReviewCheck(generateDeFn(res));
    }
  };
  return (
    <>
      <div className="m-work-container">
        <Form
          {...formItemLayout}
          colon
          onChange={(_values, item) => {
            if (item.name === 'type') {
              setBizIdPre(item.value);
            }
          }}
        >
          <FormItem
            name="type"
            label={intl.formatMessage({ id: 'o-work-biz-type' })}
            required
            requiredMessage={intl.formatMessage({ id: 'o-required' })}
          >
            <RadioGroup {...formConfigData.type} />
          </FormItem>
          <FormItem
            name="bizId"
            label={intl.formatMessage({ id: 'o-work-biz-id' })}
            required
            requiredMessage={intl.formatMessage({ id: 'o-required' })}
          >
            <Input label={formItemBizIdPreMap[bizIdPre] || ''} />
          </FormItem>
          <FormItem name="attachParams" label={intl.formatMessage({ id: 'o-work-biz-attach-params' })}>
            <Input />
          </FormItem>
          <FormItem label={intl.formatMessage({ id: 'o-preview' })}>
            <EncodingView str={resPreview} />
          </FormItem>
          <FormItem label={intl.formatMessage({ id: 'o-review' })}>
            <EncodingView str={resReviewCheck} />
          </FormItem>
          <FormItem label={' '} colon={false}>
            <Box direction="row" spacing={8}>
              <Form.Submit type="secondary" size={formItemLayout.size} validate onClick={handleGenerate}>
                {intl.formatMessage({ id: 'o-button-generate' })}
              </Form.Submit>
              <Button
                type="secondary"
                size={formItemLayout.size}
                onClick={() => {
                  copy(resPreview);
                }}
              >
                {intl.formatMessage({ id: 'o-button-copy' })}
              </Button>
              <Form.Reset size={formItemLayout.size}>
                <span
                  onClick={() => {
                    bizReset();
                  }}
                >
                  {intl.formatMessage({ id: 'o-button-reset' })}
                </span>
              </Form.Reset>
            </Box>
          </FormItem>
        </Form>
      </div>
    </>
  );
};

export default ReactIntl.injectIntl(Work);
