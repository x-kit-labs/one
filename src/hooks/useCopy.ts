import * as Next from '@alifd/next';
import * as ReactIntl from 'react-intl';

/**
 * 文本复制
 * @param {string} [text=''] 复制文本
 * @param {boolean} [notifyFlag=true] 展示通知
 * @return {Promise}
 */
export function useCopy() {
  const intl = ReactIntl.useIntl();

  return {
    copy: (text = '', notifyFlag = true): Promise<void> => {
      return new Promise<void>((rs, rj) => {
        if (!text) {
          Next.Message.warning(intl.formatMessage({ id: 'o-copy-warning' }));
          rj();
        } else {
          const textNode = document.createElement('textarea');
          textNode.value = text;
          textNode.style.position = 'absolute';
          textNode.style.top = '0';
          textNode.style['z-index'] = -999;
          document.body.appendChild(textNode);

          textNode.select();

          try {
            const successful = document.execCommand('copy');
            document.body.removeChild(textNode);

            if (successful) {
              notifyFlag && Next.Message.success(intl.formatMessage({ id: 'o-copy-success' }));
              rs();
            } else {
              notifyFlag && Next.Message.error(intl.formatMessage({ id: 'o-copy-error' }));
              rj();
            }
          } catch (err) {
            document.body.removeChild(textNode);
            notifyFlag && Next.Message.error(intl.formatMessage({ id: 'o-copy-error' }));
            rj();
          }
        }
      });
    },
  };
}
