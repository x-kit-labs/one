import { enc, dec } from '@/utils/encoding';
import { qs, sp } from '@/utils/query';

import { BizConfig } from './config';

const { linkPrefix, appId } = BizConfig;

export const generateFn = ({
  //
  type,
  id,
  attachStr = '',
}: {
  type: string;
  id: string;
  attachStr?: string;
}) => {
  const item = BizConfig[type];
  if (!item) {
    return '';
  }

  const pre = `${linkPrefix}?`;
  const pars = {
    appId,
    startPagePath: item.startPath,
    startPageQuery: enc(
      qs({
        [item.idKey]: id,
        ...sp(attachStr),
      }),
    ),
  };

  return `${pre}${qs(pars)}`;
};

export const generateDeFn = (str: string) => {
  return str.replace(
    //
    /(startPagePath|startPageQuery)=([0-9a-zA-Z]{1,})/g,
    (...ms) => `${ms[1]}=<span class="cls-hl-sign-stress">${dec(ms[2])}</span>`,
  );
};
