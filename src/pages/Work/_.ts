import { enc, dec } from '@/utils/encoding';
import { qs, sp } from '@/utils/query';

import { T_BizType, BizConfig } from './config';

const { appLinkPrefix, linkPrefix, appId } = BizConfig;

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

  if (type === 'hashtag') {
    // #2024withBinance
    // bnc://app.binance.com/content/topicdetails?hashTag=%232024withBinance&hashTagBase64Url=IzIwMjR3aXRoQmluYW5jZQ&source=unknown
    const fullHashtagStr = (id.startsWith('#') ? id : `#${id}`).trim();
    const queryStr = qs({
      hashTag: encodeURIComponent(fullHashtagStr),
      hashTagBase64Url: enc(fullHashtagStr),
      source: 'unknown',
    });
    return `${appLinkPrefix}${item.startPath}?${queryStr}`;
  } else {
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
  }
};

const DeFnConstMap = {
  s: '<span class="cls-hl-sign-stress">',
  e: '</span>',
};
export const generateDeFn = ({
  //
  type,
  str,
}: {
  type: T_BizType;
  str: string;
}) => {
  if (type === 'hashtag') {
    return str
      .replace(
        //
        /(hashTag)=(.*?)&/g,
        (...ms) => {
          return `${ms[1]}=${DeFnConstMap.s}${decodeURIComponent(ms[2])}${DeFnConstMap.e}&`;
        },
      )
      .replace(
        //
        /(hashTagBase64Url)=(.*?)&/g,
        (...ms) => {
          return `${ms[1]}=${DeFnConstMap.s}${dec(ms[2])}${DeFnConstMap.e}&`;
        },
      );
  } else {
    return str.replace(
      //
      /(startPagePath|startPageQuery)=([0-9a-zA-Z]{1,})/g,
      (...ms) => `${ms[1]}=${DeFnConstMap.s}${dec(ms[2])}${DeFnConstMap.e}`,
    );
  }
};
