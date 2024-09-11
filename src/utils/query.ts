import { isNotEmptyString, isObject } from './typeof';

export const qs = (o: Record<string, unknown>) => {
  if (!isObject(o)) {
    return '';
  }

  return Object.keys(o)
    .map((k) => `${k}=${o[k]}`)
    .join('&');
};

export const sp = (s: string) => {
  if (!isNotEmptyString(s)) {
    return {};
  }

  return s.split('&').reduce((prev, item) => {
    const [k = '', v = ''] = item.split('=');
    prev[k] = v;
    return prev;
  }, {});
};
