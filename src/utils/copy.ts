import * as Next from '@alifd/next';

/**
 * 文本复制
 * @param {string} [text=''] 复制文本
 * @param {boolean} [notifyFlag=true] 展示通知
 * @return {Promise}
 */
export function copy(text = '', notifyFlag = true): Promise<void> {
  const MSG = {
    success: '复制成功',
    error: '复制失败',
  };
  return new Promise<void>((rs, rj) => {
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
        notifyFlag && Next.Message.success(MSG.success);
        rs();
      } else {
        notifyFlag && Next.Message.success(MSG.error);
        rj();
      }
    } catch (err) {
      document.body.removeChild(textNode);
      notifyFlag && Next.Message.error(MSG.error);
      rj();
    }
  });
}
